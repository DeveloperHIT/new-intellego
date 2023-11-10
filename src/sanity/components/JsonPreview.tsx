import React from "react";

/**
 * Expected desk of the `document.displayed` object.
 */
interface Displayed {
  title: string;
  // ...include other properties that you expect to be in the `document.displayed` object
}

/**
 * Props for the JsonPreview component.
 */
interface JsonPreviewProps {
  document: {
    displayed: Displayed;
  };
}

/**
 * Renders a preview of JSON data for a given document.
 *
 * @param {JsonPreviewProps} props - The props object with `document` containing the data to be displayed.
 * @returns {JSX.Element} A React component that displays the JSON preview.
 */
const JsonPreview: React.FC<JsonPreviewProps> = ({ document }) => (
  <>
    <h1>JSON Data for {document.displayed.title}</h1>
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
  </>
);

export default JsonPreview;
