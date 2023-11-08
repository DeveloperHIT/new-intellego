import Iconify from "@/components/Iconify";

export function defaultProps(theme) {
  return {
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
      },
    },
    MuiAvatarGroup: {
      defaultProps: {
        max: 4,
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiButton: {
      defaultProps: {
        color: "inherit",
        disableElevation: true,
      },
    },
    MuiChip: {
      defaultProps: {
        deleteIcon: <Iconify icon="solar:close-circle-bold" />,
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: "filled",
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        component: "div",
      },
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },
    },
    MuiFab: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: "h6" },
        subheaderTypographyProps: {
          variant: "body2",
          marginTop: theme.spacing(0.5),
        },
      },
    },
    MuiDialogActions: {
      defaultProps: {
        disableSpacing: true,
      },
    },

    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          typography: "subtitle2",
        },
        secondaryTypographyProps: {
          component: "span",
        },
      },
    },

    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
        variant: "rounded",
      },
    },
    MuiSlider: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTabs: {
      defaultProps: {
        textColor: "inherit",
        variant: "scrollable",
        allowScrollButtonsMobile: true,
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
        iconPosition: "start",
      },
    },
    MuiTablePagination: {
      defaultProps: {
        backIconButtonProps: {
          size: "small",
        },
        nextIconButtonProps: {
          size: "small",
        },
      },
    },
  };
}
