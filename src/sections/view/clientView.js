"use client";
import Container from "@mui/material/Container";

import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Grid from "@mui/material/Unstable_Grid2";
import ClientSummary from "@/sections/clients/clientSummary";
import Typography from "@mui/material/Typography";
import Markdown from "@/components/Markdown";

export default function ClientView({ client }) {
  return (
    <Container
      sx={{
        overflow: "hidden",
        pt: 5,
        pb: { xs: 10, md: 15 },
      }}
    >
      <CustomBreadcrumbs
        sx={{ my: 3 }}
        links={[
          { name: "Home", href: "/" },
          { name: "Clients", href: "/clients" },
          { name: client.type },
        ]}
      />

      <Grid
        container
        spacing={{ xs: 5, md: 8 }}
        direction={{ md: "row-reverse" }}
      >
        <Grid xs={12} md={4}>
          <ClientSummary client={client} />
        </Grid>

        <Grid xs={12} md={8}>
          <Typography variant="h3">{client.type}</Typography>
          <br />
          <Markdown content={client.main_header} />
          <br />
          <Markdown content={client.main_paragraph} />
          <br />
          <Markdown content={client.services_header} />
          <br />
          <Markdown content={client.services_paragraph} />
          <br />
          <Markdown content={client.why_intellego_header} />
          <br />
          <Markdown content={client.why_intellego_paragraph} />
          <br />
        </Grid>
      </Grid>
    </Container>
  );
}
