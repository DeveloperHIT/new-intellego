import { defineType } from "sanity";
import { People } from "@mui/icons-material";
import { pageTitleField } from "@/sanity/schemas/pageTitleField";
import { pageDescriptionField } from "@/sanity/schemas/pageDescriptionField";
import { buttonTextField } from "@/sanity/schemas/buttonTextField";

export default defineType({
  name: "clients",
  title: "Clients Page",
  type: "document",
  icon: People,
  fields: [pageTitleField, pageDescriptionField, buttonTextField],
});
