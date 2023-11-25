export const themeColors = {
  name: "themeColors",
  title: "Theme Colors",
  type: "document",
  // Use a singleton pattern for theme colors
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "primary",
      title: "Primary",
      type: "colorSet", // Assume you have a colorSet type defined
    },
    {
      name: "secondary",
      title: "Secondary",
      type: "colorSet",
    },
    {
      name: "error",
      title: "Error",
      type: "colorSet",
    },
    // Add other color sets as needed...
  ],
};
