import "@mui/material/Chip";

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    soft: true;
  }
}
