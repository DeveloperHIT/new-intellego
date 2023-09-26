import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";

import { bgGradient } from "@/theme/css";
import Iconify from "@/components/Iconify";
import { useResponsive } from "@/hooks/useResponsive";

export default function Newsletter() {
  const theme = useTheme();

  const upMd = useResponsive("up", "md");

  return (
    <Box
      sx={{
        ...bgGradient({
          startColor: `${alpha(theme.palette.grey[900], 0.88)}`,
          endColor: `${alpha(theme.palette.grey[900], 0.88)}`,
          // imgUrl: "/assets/images/insights/insight_1.jpg",
          ...(upMd && {
            direction: "to right",
            startColor: `${alpha(theme.palette.grey[900], 0)} 0%`,
            endColor: `${alpha(theme.palette.grey[900], 1)} 50%`,
            // imgUrl: "/assets/images/insights/insight_1.jpg",
          }),
        }),
        py: 10,
        backgroundSize: "cover, auto 100%",
        backgroundPosition: { xs: "center", md: "center, left" },
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="flex-end">
          <Grid xs={12} md={5}>
            <Stack
              spacing={3}
              sx={{
                color: "common.white",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h2">Newsletter</Typography>

              <Typography>
                Sign up now to receive our expert insights!
              </Typography>

              <TextField
                fullWidth
                hiddenLabel
                placeholder="Enter your email"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        sx={{ minWidth: 48, px: 0 }}
                      >
                        <Iconify icon="carbon:chevron-right" />
                      </Button>
                    </InputAdornment>
                  ),
                  sx: { pr: 0.5, color: "common.white" },
                }}
                sx={{ my: 5 }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
