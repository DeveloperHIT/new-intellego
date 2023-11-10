import JsonPreview from "@/sanity/components/JsonPreview";

interface Props {
  documentId: string;
  schemaType: string;
  S: any;
}

/**
 * Determines the default document node based on the given index type or document ID.
 *
 * @param {Object} options - The options object.
 * @param {string} options.documentId - The ID of the document.
 * @param {string} options.schemaType - The index type of the document.
 * @returns {Object|undefined} The default document node or undefined.
 */
export const getDefaultDocumentNode = ({
  documentId,
  schemaType,
  S,
}: Props) => {
  if (schemaType === "post" || documentId === "siteSettings") {
    return S.document().views([
      S.view.form(),
      S.view.component(JsonPreview).title("JSON"),
    ]);
  }
};
