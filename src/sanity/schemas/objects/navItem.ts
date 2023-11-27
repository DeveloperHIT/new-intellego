import { defineField, defineType } from "sanity";
import { NavigateNext } from "@mui/icons-material";

export default defineType({
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  icon: NavigateNext,
  fields: [
    defineField({
      name: "text",
      title: "Navigation Text",
      type: "string",
    }),
    defineField({
      name: "navigationItemUrl",
      title: "Navigation Item URL",
      type: "reference",
      to: [{ type: "page" }, { type: "clients" }, { type: "services" }],
    }),
  ],
});
