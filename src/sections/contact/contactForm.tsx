import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";
import FormHelperText from "@mui/material/FormHelperText";

import FormProvider, { RhfTextField } from "@/components/HookForm";

interface FormValues {
  services?: string[];
  email: string;
  company: string;
  website?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  message: string;
}

export default function ContactForm() {
  // Validation Schema
  const ContactSchema = Yup.object().shape({
    services: Yup.array(),
    email: Yup.string()
      .required("Email is required")
      .email("That is not an email"),
    company: Yup.string().required("Company is required"),
    website: Yup.string(),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const defaultValues = {
    services: [],
    email: "",
    company: "",
    website: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
  };

  const methods = useForm<FormValues>({
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
  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log(data);
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
