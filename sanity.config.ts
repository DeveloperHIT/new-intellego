import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import {
  dashboardTool,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";
import { index } from "@/sanity/schemas";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import {
  defaultDocumentNodeResolver,
  documentTypes,
} from "@/sanity/studio/structure";

export default defineConfig({
  projectId,
  dataset,
  title: "Intellego Website",
  apiVersion: "2023-11-04",
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: documentTypes,
      defaultDocumentNode: defaultDocumentNodeResolver,
    }),
    codeInput(),
    dashboardTool({
      widgets: [projectInfoWidget(), projectUsersWidget()],
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: index,
});
