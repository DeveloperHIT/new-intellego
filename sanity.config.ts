import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import {
  dashboardTool,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { colorInput } from "@sanity/color-input";
import { index } from "@/sanity/schemas";
import { defaultDocumentNodeResolver } from "@/sanity/studio/desk/defaultDocumentNode";
import { structure } from "@/sanity/studio/desk";

export default defineConfig({
  projectId,
  dataset,
  title: "Intellego Website",
  apiVersion: "2023-11-04",
  // TODO: Move basePath to env
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: structure,
      defaultDocumentNode: defaultDocumentNodeResolver,
    }),
    codeInput(),
    colorInput(),
    dashboardTool({
      widgets: [projectInfoWidget(), projectUsersWidget()],
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: index,
});
