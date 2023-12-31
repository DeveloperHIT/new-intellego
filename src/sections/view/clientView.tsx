"use client";
import Container from "@mui/material/Container";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Grid from "@mui/material/Unstable_Grid2";
import ClientSummary from "@/sections/clients/clientSummary";
import Typography from "@mui/material/Typography";
import { ClientType } from "@/types";
import { PortableText } from "@portabletext/react";

interface ClientViewProps {
  client: ClientType;
}

export default function ClientView({ client }: ClientViewProps) {
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
          { name: client.title },
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
          <Typography variant="h3">{client.title}</Typography>
          {/* TODO: Add serializer */}
          <PortableText value={client.servicesDescription} />
        </Grid>
      </Grid>
    </Container>
  );
}
