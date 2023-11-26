import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";
import FormHelperText from "@mui/material/FormHelperText";

import FormProvider, { RhfTextField } from "@/components/HookForm";

export default function ContactForm() {
  const ContactSchema = Yup.object().shape({
    services: Yup.array(),
    email: Yup.string()
      .required("Email is required")
      .email("That is not an email"),
    company: Yup.string().required("Company is required"),
    website: Yup.string(),
  });

  const defaultValues = {
    services: [],
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    website: "",
    message: "",
  };

  const methods = useForm({
    resolver: yupResolver(ContactSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // TODO: Add form submission logic
  const onSubmit = handleSubmit(async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2.5} alignItems="flex-start">
        <Controller
          name="services"
          control={control}
          render={({ fieldState: { error } }) => (
            <div>
              {!!error && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )}
            </div>
          )}
        />

        <Stack
          spacing={{ xs: 2.5, md: 2 }}
          direction={{ xs: "column", md: "row" }}
          sx={{ width: 1 }}
        >
          <RhfTextField name="firstName" label="First Name" />
          <RhfTextField name="lastName" label="Last Name" />
        </Stack>

        <RhfTextField name="email" label="Email" />
        <RhfTextField name="phoneNumber" label="Phone number" />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2.5, md: 2 }}
          sx={{ width: 1 }}
        >
          <RhfTextField name="company" label="Company" />

          <RhfTextField name="website" label="Website" />
        </Stack>

        {/*<Stack spacing={5} sx={{ py: 2, width: 1 }}>*/}
        {/*  <Typography variant="overline" sx={{ color: "text.disabled" }}>*/}
        {/*    Your Budget*/}
        {/*  </Typography>*/}

        {/*  <RhfSlider*/}
        {/*    name="budget"*/}
        {/*    valueLabelDisplay="on"*/}
        {/*    max={20000}*/}
        {/*    step={1000}*/}
        {/*    valueLabelFormat={(value) => fCurrency(value)}*/}
        {/*  />*/}
        {/*</Stack>*/}

        <RhfTextField name="message" label="Message" multiline rows={4} />
      </Stack>

      <LoadingButton
        size="large"
        color="inherit"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ mt: 3 }}
      >
        Send Request
      </LoadingButton>
    </FormProvider>
  );
}
