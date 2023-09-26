"use client";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import ContactInfo from "@/sections/contact/contactInfo";
import ContactForm from "@/sections/contact/contactForm";

export default function ContactView() {
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
            <ContactInfo />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Typography variant="h3" sx={{ mb: 5 }}>
              Ready To Get Started?
            </Typography>

            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}