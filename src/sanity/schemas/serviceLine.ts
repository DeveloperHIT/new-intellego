import { defineField, defineType } from "sanity";

export default defineType({
  name: "serviceLine",
  title: "Service Line",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    defineField({
      name: "clients",
      title: "Clients",
      type: "blockContent",
    }),
    defineField({
      name: "representativeEngagements",
      title: "Representative Engagements",
      type: "blockContent",
    }),
    defineField({
      name: "services",
      title: "Services Included",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    }),
  ],
});
