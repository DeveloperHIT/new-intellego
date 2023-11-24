import { siteConfig } from "./site-manager/siteConfig";
import { StructureBuilder } from "sanity/desk";
import { intellegoConfig } from "@/sanity/studio/desk/intellego-manager/intellegoConfig";
import { insightsManager } from "@/sanity/studio/desk/insights/insightsManager";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Base")
    .items([
      intellegoConfig(S),
      siteConfig(S),
      insightsManager(S),
      S.divider(),
    ]);
