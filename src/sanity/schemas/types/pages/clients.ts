import { defineType, defineField } from "sanity";
import { People } from "@mui/icons-material";

export default defineType({
  name: "clients",
  title: "Clients Page",
  type: "document",
  icon: People,
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      description:
        'The main title displayed on the clients page (e.g., "Who we serve").',
    }),
    defineField({
      name: "pageDescription",
      title: "Page Description",
      type: "text",
      description:
        "The description displayed on the clients page (e.g., 'Intellego provides a wide range of valuation services to meet the needs of our clients.').",
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description:
        "The text displayed on the button that links to the clients page.",
      validation: (Rule) => Rule.required(),
    }),
  ],
  // preview: {
  //   select: {
  //
  //     title: "pageTitle",
  //     subtitle: "pageDescription",
  //   },
  //   prepare({ title, subtitle }) {
  //     return {
  //       title,
  //       subtitle: subtitle ? subtitle : "No description",
  //     };
  //   },
  // },
});
