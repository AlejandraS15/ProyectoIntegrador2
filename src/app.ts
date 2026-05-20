import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import { existsSync } from "node:fs";
import { join } from "node:path";

import { attachI18nLocals } from "./config/i18n.js";
import { getChatbotKnowledge } from "./data/chatbotKnowledge.js";
import { getTreatmentDetails } from "./data/treatments.js";
import indexRouter from "./routes/index.js";

function resolveDirectory(candidates: string[]): string {
  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      return candidate;
    }
  }

  return candidates[0];
}

export function createApp(): express.Express {
  const app = express();
  const viewsCandidates = process.env.NODE_ENV === "production"
    ? [join(process.cwd(), "dist", "views"), join(process.cwd(), "src", "views")]
    : [join(process.cwd(), "src", "views"), join(process.cwd(), "dist", "views")];
  const viewsDirectory = resolveDirectory(viewsCandidates);
  const publicDirectory = resolveDirectory([
    join(process.cwd(), "public"),
    join(process.cwd(), "dist", "public")
  ]);
  const baseSiteUrl = process.env.SITE_URL?.replace(/\/$/, "") ?? "";

  app.set("view engine", "ejs");
  app.set("views", viewsDirectory);
  app.set("layout", "layouts/app");

  app.locals.defaultImageUrl = "/img/placeholders/dental-preview.svg";
  app.locals.googleMapsUrl =
    "https://www.google.com/maps/place/Dental+Expertos,+Cra.+52+%23+7-115,+Guayabal,+Medell%C3%ADn,+Guayabal,+Medell%C3%ADn,+Antioquia/@6.2137364,-75.5827135,16z/data=!4m6!3m5!1s0x8e4429d121384199:0x174c3362860f3874!8m2!3d6.2137364!4d-75.5827135!16s%2Fg%2F11j53bg4nq";
  app.locals.siteName = "Dental Expertos";

  app.use(expressEjsLayouts);
  app.use(express.json({ limit: "24kb" }));

  app.get("/robots.txt", (request, response) => {
    const baseUrl = (baseSiteUrl || `${request.protocol}://${request.get("host")}`).replace(/\/$/, "");

    response.type("text/plain");
    response.send(`User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
`);
  });

  app.get("/sitemap.xml", (request, response) => {
    const baseUrl = (baseSiteUrl || `${request.protocol}://${request.get("host")}`).replace(/\/$/, "");
    const treatmentSlugs = getTreatmentDetails("es").map((treatment) => treatment.slug);
    const paths = [
      "/",
      "/nosotros",
      "/tratamientos",
      "/resultados",
      "/equipo",
      "/contacto",
      ...treatmentSlugs.map((slug) => `/tratamientos/${slug}`)
    ];
    const languages: Array<"es" | "en"> = ["es", "en"];

    const urlEntries = paths.flatMap((path) =>
      languages.map((language) => {
        const localizedPath = language === "en" && path !== "/" ? `/en${path}` : language === "en" ? "/en" : path;
        const priority = path === "/" ? "1.0" : path.startsWith("/tratamientos/") ? "0.8" : "0.9";
        const lastMod = new Date().toISOString();

        return `  <url>
    <loc>${baseUrl}${localizedPath}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${priority}</priority>
  </url>`;
      })
    );

    response.type("application/xml");
    response.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join("\n")}
</urlset>
`);
  });

  app.use(express.static(publicDirectory));

  app.use((request, response, next) => {
    attachI18nLocals(request, response);

    const baseUrl = (baseSiteUrl || `${request.protocol}://${request.get("host")}`).replace(/\/$/, "");
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
    const chatbotKnowledge = getChatbotKnowledge(response.locals.language);
    const chatbotWhatsAppUrl = `https://wa.me/${chatbotKnowledge.contact.whatsappNumber}?text=${encodeURIComponent(chatbotKnowledge.booking.whatsappText)}`;
    response.locals.chatbotKnowledgeJson = JSON.stringify({
      ...chatbotKnowledge,
      booking: {
        ...chatbotKnowledge.booking,
        whatsappUrl: chatbotWhatsAppUrl
      }
    }).replace(/</g, "\\u003c");
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

  return app;
}

export default createApp;
