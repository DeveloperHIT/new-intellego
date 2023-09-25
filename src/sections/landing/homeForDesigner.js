import { m } from "framer-motion";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import { paths } from "@/routes/paths";
import { bgGradient } from "@/theme/css";
import Iconify from "@/components/Iconify";
import { varFade, MotionViewport } from "@/components/Animate";

export default function HomeForDesigner() {
  const theme = useTheme();

  // TODO: Fix varFade

  return (
    <Box
      component={MotionViewport}
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: "/assets/images/home/for_designer.jpg",
        }),
        textAlign: "center",
        color: "common.white",
        py: { xs: 10, md: 15 },
      }}
    >
      <m.div variants={varFade({ distance: 40 }).inUp}>
        <Typography variant="overline" sx={{ opacity: 0.48 }}>
          Professional Kit
        </Typography>
      </m.div>

      <m.div variants={varFade({ distance: 40 }).inUp}>
        <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
          For Designer
        </Typography>
      </m.div>

      <m.div variants={varFade({ distance: 40 }).inUp}>
        <Button
          color="primary"
          size="large"
          variant="contained"
          endIcon={<Iconify icon="carbon:launch" />}
          target="_blank"
          rel="noopener"
          href={paths.figmaPreview}
        >
          figma workspace
        </Button>
      </m.div>
    </Box>
  );
}
