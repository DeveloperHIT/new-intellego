import StyledMarkdown from "./styles";

export default function Markdown({ content, firstLetter = false, sx }) {
  return (
    <StyledMarkdown
      firstLetter={firstLetter}
      dangerouslySetInnerHTML={{ __html: content }}
      sx={sx}
    />
  );
}
