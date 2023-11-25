import Stack from "@mui/material/Stack";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { alpha, styled, useTheme } from "@mui/material/styles";
import { LeftIcon, RightIcon } from "./arrowIcons";
import { SxProps } from "@mui/material";

interface StyledIconButtonProps extends IconButtonProps {
  filled?: boolean;
  shape?: "circular" | "rounded";
  hasChild?: boolean;
}

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) =>
    prop !== "filled" && prop !== "hasChild" && prop !== "shape",
})<StyledIconButtonProps>(({ filled, shape, hasChild, theme }) => ({
  color: "inherit",
  transition: theme.transitions.create("all", {
    duration: theme.transitions.duration.shorter,
  }),
  ...(shape === "rounded" && {
    borderRadius: theme.shape.borderRadius * 1.5,
  }),
  ...(!filled && {
    opacity: 0.48,
    "&:hover": {
      opacity: 1,
    },
  }),
  ...(filled && {
    color: alpha(theme.palette.common.white, 0.8),
    backgroundColor: alpha(theme.palette.grey[900], 0.48),
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.grey[900],
    },
  }),
  ...(hasChild && {
    zIndex: 9,
    top: "50%",
    position: "absolute",
    marginTop: theme.spacing(-2.5),
  }),
}));

interface CarouselArrowsProps {
  shape?: "circular" | "rounded";
  filled?: boolean;
  icon?: string;
  onNext?: () => void;
  onPrev?: () => void;
  children?: React.ReactNode;
  leftButtonProps?: any;
  rightButtonProps?: any;
  sx?: SxProps;
}

export default function CarouselArrows({
  shape = "circular",
  filled = false,
  icon,
  onNext,
  onPrev,
  children,
  leftButtonProps,
  rightButtonProps,
  sx,
}: CarouselArrowsProps) {
  const theme = useTheme();

  const isRTL = theme.direction === "rtl";

  const hasChild = !!children;

  if (hasChild) {
    return (
      <Stack sx={sx}>
        {onNext && (
          <StyledIconButton
            filled={filled}
            shape={shape}
            hasChild={!!children}
            onClick={onPrev}
            {...leftButtonProps}
            sx={{
              left: 16,
              ...leftButtonProps?.sx,
            }}
          >
            <LeftIcon icon={icon} isRTL={isRTL} />
          </StyledIconButton>
        )}

        {children}

        {onPrev && (
          <StyledIconButton
            filled={filled}
            shape={shape}
            hasChild={!!children}
            onClick={onNext}
            {...rightButtonProps}
            sx={{
              right: 16,
              ...rightButtonProps?.sx,
            }}
          >
            <RightIcon icon={icon} isRTL={isRTL} />
          </StyledIconButton>
        )}
      </Stack>
    );
  }

  return (
    <Stack direction="row" alignItems="center" display="inline-flex" sx={sx}>
      <StyledIconButton
        filled={filled}
        shape={shape}
        onClick={onPrev}
        {...leftButtonProps}
      >
        <LeftIcon icon={icon} isRTL={isRTL} />
      </StyledIconButton>

      <StyledIconButton
        filled={filled}
        shape={shape}
        onClick={onNext}
        {...rightButtonProps}
      >
        <RightIcon icon={icon} isRTL={isRTL} />
      </StyledIconButton>
    </Stack>
  );
}
