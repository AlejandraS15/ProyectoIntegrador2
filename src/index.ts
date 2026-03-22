import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

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

app.locals.defaultImageUrl = "/img/default.svg";
app.locals.siteName = "Dental Expertos";

app.use(expressEjsLayouts);
app.use(express.static(publicDirectory));

app.use("/", indexRouter);

app.use((_request, response) => {
  response.status(404).send("Ruta no encontrada");
});

app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error(error);
  response.status(500).send("Error interno del servidor");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
