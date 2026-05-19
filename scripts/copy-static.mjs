import { cp } from "node:fs/promises";
import { resolve } from "node:path";

const rootDirectory = process.cwd();
const distDirectory = resolve(rootDirectory, "dist");

await cp(resolve(rootDirectory, "src", "views"), resolve(distDirectory, "views"), {
  force: true,
  recursive: true
});

await cp(resolve(rootDirectory, "public"), resolve(distDirectory, "public"), {
  force: true,
  recursive: true
});
