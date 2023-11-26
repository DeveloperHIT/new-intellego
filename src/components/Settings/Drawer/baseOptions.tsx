import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import Iconify from "@/components/Iconify";

interface BsaeOptionsProps {
  title: string;
  icons: string[];
  selected?: boolean;
}

export default function BaseOptions({
  title,
  icons,
  selected,
}: BsaeOptionsProps) {
  return (
    <ListItemButton
      sx={{
        p: 3,
        justifyContent: "space-between",
        ...(selected && {
          color: "primary.main",
        }),
      }}
    >
      <Typography variant="subtitle2">{title}</Typography>
      <Iconify width={28} icon={selected ? icons[1] : icons[0]} />
    </ListItemButton>
  );
}
