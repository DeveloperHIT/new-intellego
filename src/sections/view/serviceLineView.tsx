"use client";
import Container from "@mui/material/Container";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Grid from "@mui/material/Unstable_Grid2";
import { ServiceLineType } from "@/types";
import { PortableText } from "@portabletext/react";
import ServiceLineSummary from "@/sections/services/serviceLineSummary";
import Typography from "@mui/material/Typography";

interface ServiceViewProps {
  serviceLineData: ServiceLineType;
}

export default function ServiceLineView({ serviceLineData }: ServiceViewProps) {
  return (
    <>
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: serviceLineData.title },
          ]}
        />
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          direction={{ md: "row-reverse" }}
        >
          <Grid xs={12} md={4}>
            <ServiceLineSummary serviceLineData={serviceLineData} />
          </Grid>

          <Grid xs={12} md={8}>
            <Typography variant="h3">{serviceLineData.title}</Typography>
            {/* TODO: Add serializer */}
            <PortableText value={serviceLineData.servicesDescription} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
