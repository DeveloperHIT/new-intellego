"use client";
import Container from "@mui/material/Container";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Grid from "@mui/material/Unstable_Grid2";
import ServiceSummary from "@/sections/services/serviceSummary";
import Typography from "@mui/material/Typography";
import { PortableText } from "@portabletext/react";
import { ServiceLineType, ServiceType } from "@/types";

interface ServiceViewProps {
  serviceData: ServiceType;
  serviceLineData: ServiceLineType;
}

export default function ServiceView({
  serviceData,
  serviceLineData,
}: ServiceViewProps) {
  return (
    <>
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            // TODO: This should say valuation, litigation support, etc.
            {
              name: serviceLineData.title,
              href: `/services/${serviceLineData.slug.current}`,
            },
            { name: serviceData.title },
          ]}
        />
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          direction={{ md: "row-reverse" }}
        >
          <Grid xs={12} md={4}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <ServiceSummary serviceData={serviceData} />
          </Grid>

          <Grid xs={12} md={8}>
            <Typography variant="h3">{serviceData.title}</Typography>
            {/* TODO: Add serializer */}
            <PortableText value={serviceData.description} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
