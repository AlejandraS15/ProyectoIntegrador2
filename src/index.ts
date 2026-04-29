import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { attachI18nLocals } from "./config/i18n.js";
import indexRouter from "./routes/index.js";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirectory = dirname(currentFilePath);

const app = express();
const port = Number(process.env.PORT ?? 3000);
const localPublicDirectory = join(currentDirectory, "..", "public");
const buildPublicDirectory = join(currentDirectory, "public");
const publicDirectory = existsSync(buildPublicDirectory)
  ? buildPublicDirectory
  : localPublicDirectory;

app.set("view engine", "ejs");
app.set("views", join(currentDirectory, "views"));
app.set("layout", "layouts/app");

app.locals.defaultImageUrl = "/img/placeholders/dental-preview.svg";
app.locals.googleMapsUrl =
  "https://www.google.com/maps/place/Dental+Expertos,+Cra.+52+%23+7-115,+Guayabal,+Medell%C3%ADn,+Guayabal,+Medell%C3%ADn,+Antioquia/@6.2137364,-75.5827135,16z/data=!4m6!3m5!1s0x8e4429d121384199:0x174c3362860f3874!8m2!3d6.2137364!4d-75.5827135!16s%2Fg%2F11j53bg4nq";
app.locals.siteName = "Dental Expertos";

app.use(expressEjsLayouts);
app.use(express.static(publicDirectory));

app.use((request, response, next) => {
  attachI18nLocals(request, response);

  const baseUrl = (process.env.SITE_URL ?? `${request.protocol}://${request.get("host")}`).replace(/\/$/, "");
  const path = request.originalUrl.split("?")[0] || "/";
  const canonicalUrl = `${baseUrl}${path}`;
  const imageUrl = `${baseUrl}${app.locals.defaultImageUrl}`;

  response.locals.absoluteImageUrl = (url: string): string => {
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }

    return `${baseUrl}${url.startsWith("/") ? url : `/${url}`}`;
  };
  response.locals.canonicalUrl = canonicalUrl;
  response.locals.localBusinessSchema = {
    "@context": "https://schema.org",
    "@id": `${baseUrl}/#dentist`,
    "@type": ["Dentist", "LocalBusiness"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      postalCode: "050024",
      streetAddress: "Cra. 52 # 07-115, Guayabal"
    },
    areaServed: ["Medellín", "Guayabal", "El Poblado", "Antioquia"],
    description:
      "Clínica odontológica estética en Guayabal, Medellín, especializada en diseño de sonrisa, carillas, ortodoncia estética, blanqueamiento e implantes.",
    email: "dentalexpertos@hotmail.com",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.2137364,
      longitude: -75.5827135
    },
    hasMap: app.locals.googleMapsUrl,
    image: imageUrl,
    name: app.locals.siteName,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        closes: "19:00",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        closes: "15:00",
        dayOfWeek: "Saturday",
        opens: "08:00"
      }
    ],
    priceRange: "$$",
    telephone: "+573008938020",
    url: baseUrl
  };
  next();
});

app.use("/", indexRouter);

app.use((_request, response) => {
  response.status(404).render("errors/404", {
    seo: {
      description: "La página solicitada no existe en Dental Expertos. Encuentra tratamientos, resultados, equipo y contacto.",
      title: "Página no encontrada"
    }
  });
});

app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error(error);
  response.status(500).send("Error interno del servidor");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
