import { Box, Stack, SxProps, Theme } from "@mui/material";
import { fIsoDate } from "@/helpers/formatIsoDate";

interface PostDateProps {
  date: string;
  sx?: SxProps<Theme>;
}

export default function PostDate({ date, sx }: PostDateProps) {
  return (
    <Stack direction="row" sx={{ typography: "subtitle2", ...sx }}>
      <Box component="span">{fIsoDate(date)}</Box>
    </Stack>
  );
}
