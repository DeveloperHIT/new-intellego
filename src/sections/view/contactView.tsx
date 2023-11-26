"use client";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ContactInfo from "@/sections/contact/contactInfo";
import ContactForm from "@/sections/contact/contactForm";
import { AddressType } from "@/types";

interface PageData {
  contactFormFields?: any;
  socialMediaProfiles?: any;
  pageTitle?: string;
  pageDescription?: string;
  address: AddressType;
  contactPhoneNumber?: string;
  contactEmail?: string;
}

interface ContactViewProps {
  pageData: PageData;
}

export default function ContactView({ pageData }: ContactViewProps) {
  const {
    address: { street, city, pmb, state, zipCode },
    contactPhoneNumber,
    contactEmail,
    pageTitle,
  } = pageData;

  return (
    <>
      <Container
        sx={{
          overflow: "hidden",
          pt: { xs: 5, md: 10 },
          pb: { xs: 10, md: 15 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          justifyContent="space-between"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid xs={12} md={6} lg={5}>
            <ContactInfo
              street={street}
              city={city}
              pmb={pmb}
              state={state}
              zipCode={zipCode}
              contactPhoneNumber={contactPhoneNumber}
              contactEmail={contactEmail}
            />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Typography variant="h3" sx={{ mb: 5 }}>
              {pageTitle}
            </Typography>

            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
