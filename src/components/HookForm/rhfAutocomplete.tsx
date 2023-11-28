import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface RhfAutocompleteProps {
  name: string;
  label: string;
  // TODO: Specify type for options
  options: any[];
  placeholder?: string;
  helperText?: string;
}

export default function RhfAutocomplete({
  name,
  label,
  options,
  placeholder,
  helperText,
  ...other
}: RhfAutocompleteProps) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          onChange={(event, newValue) =>
            setValue(name, newValue, { shouldValidate: true })
          }
          options={options}
          renderInput={(params) => (
            <TextField
              label={label}
              placeholder={placeholder}
              error={!!error}
              helperText={error ? error?.message : helperText}
              {...params}
            />
          )}
          {...other}
        />
      )}
    />
  );
}
