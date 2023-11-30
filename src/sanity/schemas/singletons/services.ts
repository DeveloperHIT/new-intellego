import { defineType } from "sanity";
import { Folder } from "@mui/icons-material";
import { pageTitleField } from "@/sanity/schemas/pageTitleField";
import { pageDescriptionField } from "@/sanity/schemas/pageDescriptionField";
import { buttonTextField } from "@/sanity/schemas/buttonTextField";

export default defineType({
  name: "services",
  title: "Services Sectors",
  type: "document",
  icon: Folder,
  fields: [pageTitleField, pageDescriptionField, buttonTextField],
});
