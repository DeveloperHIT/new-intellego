import { Controller, useFormContext } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import FormControlLabel from "@mui/material/FormControlLabel";
import { SxProps } from "@mui/material";

interface RhfCheckboxProps {
  name: string;
  label: string;
  helperText?: string;
  sx?: SxProps;
  spacing?: number;
  row?: boolean;
  other?: any;
}

export default function RhfCheckbox({
  name,
  helperText,
  ...other
}: RhfCheckboxProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            {...other}
          />

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}
