import { Controller, useFormContext } from "react-hook-form";

import Switch from "@mui/material/Switch";
import FormHelperText from "@mui/material/FormHelperText";
import FormControlLabel from "@mui/material/FormControlLabel";

interface RhfSwitchProps {
  name: string;
  helperText?: string;
  label: string;
}

export default function RhfSwitch({
  name,
  helperText,
  ...other
}: RhfSwitchProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <FormControlLabel
            control={<Switch {...field} checked={field.value} />}
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
