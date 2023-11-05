import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";
import { tags } from "sanity-plugin-tags";

// TODO: Move to environment variables
const config = defineConfig({
  projectId: "khbtshbn",
  dataset: "production",
  title: "Intellego Website",
  apiVersion: "2023-11-04",
  basePath: "/admin",
  plugins: [deskTool(), tags({})],
  schema: { types: schemas },
});

export default config;
