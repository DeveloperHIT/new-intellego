import JsonPreview from "@/sanity/components/JsonPreview";

/**
 * Returns the default view for a document node.
 *
 * @param {Object} S - The structure builder object.
 * @returns {Object} The default document node with predefined views.
 */
export const defaultDocumentNodeResolver = (S) =>
  S.document().views([
    S.view.form(),
    S.view.component(JsonPreview).title("JSON"),
  ]);
