import JsonPreview from "@/sanity/components/JsonPreview";

interface Props {
  S: any;
}

/**
 * Returns the default view for a document node.
 *
 * @param {Object} S - The structure builder object.
 * @returns {Object} The default document node with predefined views.
 */
export const defaultDocumentNodeResolver = ({ S }: Props) =>
  S.document().views([
    S.view.form(),
    S.view.component(JsonPreview).title("JSON"),
  ]);
