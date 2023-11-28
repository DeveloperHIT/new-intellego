import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";

interface RhfSelectProps {
  name: string;
  native?: boolean;
  maxHeight?: number | string;
  helperText?: string;
  PaperPropsSx?: any;
  children: any;
}

export default function RhfSelect({
  name,
  native,
  maxHeight = 220,
  helperText,
  children,
  PaperPropsSx,
  ...other
}: RhfSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          SelectProps={{
            native,
            MenuProps: {
              PaperProps: {
                sx: {
                  ...(!native && {
                    maxHeight:
                      typeof maxHeight === "number" ? maxHeight : "unset",
                  }),
                  ...PaperPropsSx,
                },
              },
            },
            sx: { textTransform: "capitalize" },
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        >
          {children}
        </TextField>
      )}
    />
  );
}
