import { Controller, useFormContext } from "react-hook-form";
import Slider from "@mui/material/Slider";
import FormHelperText from "@mui/material/FormHelperText";

interface RhfSliderProps {
  name: string;
  helperText?: string;
  [x: string]: any;
}

export default function RhfSlider({
  name,
  helperText,
  ...other
}: RhfSliderProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <Slider {...field} valueLabelDisplay="auto" {...other} />

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </>
      )}
    />
  );
}
