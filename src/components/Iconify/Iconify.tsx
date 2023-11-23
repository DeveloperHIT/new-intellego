import { forwardRef, ForwardRefRenderFunction } from "react";
import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/material";

interface IconifyProps {
  icon: any;
  width?: number;
  sx?: SxProps;
}

const Iconify: ForwardRefRenderFunction<unknown, IconifyProps> = (
  { icon, width = 20, sx, ...other },
  ref,
) => (
  <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, ...sx }}
  />
);

Iconify.displayName = "Iconify";

export default forwardRef(Iconify);
