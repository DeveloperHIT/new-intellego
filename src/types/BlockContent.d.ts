export type BlockContentType = Array<BlockType | MarkedBlockType>;

export interface BlockType {
  _type: "block";
  children: Array<TextSpanType | MarkSpanType>;
  style: string;
  list?: string; // 'bullet' or 'number'
  level?: number; // For headings
}

export interface MarkedBlockType extends BlockType {
  markDefs: Array<MarkDefinitionType>;
}

export interface TextSpanType {
  _type: "span";
  text: string;
  marks?: string[]; // IDs of marks applied to this span of text
}

export interface MarkSpanType extends TextSpanType {
  _key: string; // Unique key for this mark span
}

export interface MarkDefinitionType {
  _key: string; // Unique key for this mark definition
  _type: string; // Type of mark, e.g., 'link'
  // Additional fields depending on the _type
  href?: string; // For 'link' type
  // ...other mark-specific properties
}

// Extend this with other specific block singletons you may have, such as images, code blocks, etc.
