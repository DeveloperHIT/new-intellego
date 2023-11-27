import Stack from "@mui/material/Stack";

import NavList from "./navList";
import { SxProps } from "@mui/material";

interface NavDesktopProps {
  data: {
    title: string;
    path: string;
  }[];
  sx?: SxProps;
}

export default function NavDesktop({ data, sx }: NavDesktopProps) {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={5}
      sx={{
        height: 1,
        ...sx,
      }}
    >
      {data.map((link) => (
        <NavList key={link.title} item={link} />
      ))}
    </Stack>
  );
}
