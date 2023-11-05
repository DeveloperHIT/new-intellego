import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";

// TODO: Move to environment variables
const config = defineConfig({
  projectId: "khbtshbn",
  dataset: "production",
  title: "Intellego Website",
  apiVersion: "2023-11-04",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
