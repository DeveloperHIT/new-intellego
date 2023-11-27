import { defineField, defineType } from "sanity";

export const recentInsightsType = defineType({
  name: "recentInsights",
  type: "object",
  title: "Recent Insights",
  fields: [
    // Define any fields that you need for the recentInsights section here
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    // ... other fields like description, images, etc.
  ],
  // Add any preview configurations or icon settings if needed
});
