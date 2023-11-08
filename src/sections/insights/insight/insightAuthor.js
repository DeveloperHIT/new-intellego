import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function InsightAuthor({ name, role }) {
  return (
    <Stack
      direction="row"
      spacing={{ xs: 3, md: 4 }}
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Avatar src={"/"} sx={{ width: 96, height: 96 }} />

      <Stack spacing={2}>
        <Stack
          spacing={2}
          alignItems={{ md: "center" }}
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ md: "space-between" }}
        >
          <Stack spacing={0.5}>
            <Typography variant="h5">{name}</Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {role}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
