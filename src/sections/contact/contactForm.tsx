import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm as useFormspree } from "@formspree/react";
import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";
import FormProvider, { RhfTextField } from "@/components/HookForm";
import React from "react";

interface FormValues {
  email: string;
  company: string;
  website?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  message: string;
}

export default function ContactForm() {
  const [formspreeState, formSubmit] = useFormspree(
    process.env.NEXT_PUBLIC_CONTACT_FORM as string,
  );

  // Validation Schema
  const ContactSchema = Yup.object().shape({
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
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValues) => {
    // Convert the data to the format that formspree expects
    const submittedData = {
      ...data,
      _subject: "New Contact Request",
      _format: "plain",
    };

    try {
      await formSubmit(submittedData);
      reset(defaultValues);
    } catch (error) {
      console.error("Form submission error", error);
    }
  };

  // TODO: Update state of "Ready to Get Started?" in parent component after form is submitted
  if (formspreeState.succeeded) {
    return <p>
        Thank you for your interest in Intellego. We will be in touch shortly.
    </p>
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5} alignItems="flex-start">
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
