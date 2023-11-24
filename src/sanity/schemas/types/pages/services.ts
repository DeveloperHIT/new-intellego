import { defineType, defineField } from "sanity";
import { Folder } from "@mui/icons-material";

export default defineType({
  name: "services",
  title: "Services Page",
  type: "document",
  icon: Folder,
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      description:
        'The main title displayed on the services page (e.g., "What we do").',
    }),
    defineField({
      name: "pageDescription",
      title: "Page Description",
      type: "text",
      description:
        "The description displayed on the services page (e.g., 'Intellego provides a wide range of valuation services to meet the needs of our clients.').",
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description:
        "The text displayed on the button that links to the services page.",
    }),
  ],
});
