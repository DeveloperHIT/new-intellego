import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";

interface RhfTextFieldProps {
  name: string;
  helperText?: string;
  label: string;
  multiline?: boolean;
  rows?: number;
  type?: string;
}

export default function RhfTextField({
  name,
  helperText,
  label,
  multiline,
  rows,
  type,
  ...other
}: RhfTextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          value={type === "number" && field.value === 0 ? "" : field.value}
          onChange={(event) => {
            if (type === "number") {
              field.onChange(Number(event.target.value));
            } else {
              field.onChange(event.target.value);
            }
          }}
          multiline={multiline}
          label={label}
          rows={rows}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  );
}
