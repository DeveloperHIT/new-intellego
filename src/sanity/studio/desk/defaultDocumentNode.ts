import JsonPreview from "../../components/JsonPreview";
import { StructureBuilder } from "sanity/desk";

/**
 * Determines the default document node based on the given index type or document ID.
 *
 * @returns {Object|undefined} The default document node or undefined.
 */
export const defaultDocumentNodeResolver = (S: StructureBuilder) => {
  return S.document().views([
    S.view.form(),
    S.view.component(JsonPreview).title("JSON"),
  ]);
};
