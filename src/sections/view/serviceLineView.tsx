"use client";
import { Container, Typography } from "@mui/material";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Grid from "@mui/material/Unstable_Grid2";
import { ServiceLineType } from "@/types";
import { SectorType } from "@/types/Sector";
import ServiceLineSummary from "@/sections/services/serviceLineSummary";
import { PortableText } from "@portabletext/react";

interface ServiceLineViewProps {
  sector: SectorType;
  serviceLine: ServiceLineType;
}

export default function ServiceLineView({
  sector,
  serviceLine,
}: ServiceLineViewProps) {
  // TODO: Create a helper function to remove sector name after hyphen
  const serviceLineTitle = serviceLine.title.split(" - ")[0];
  return (
    <>
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Sectors", href: "/sectors" },
            {
              name: sector.title,
              href: `/sectors/${sector.slug}`,
            },
            { name: serviceLineTitle },
          ]}
        />
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          direction={{ md: "row-reverse" }}
        >
          <Grid xs={12} md={4}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <ServiceLineSummary serviceLine={serviceLine} />
          </Grid>

          <Grid xs={12} md={8}>
            <Typography variant="h3">{serviceLineTitle}</Typography>
            {/* TODO: Add serializer */}
            <PortableText value={serviceLine.description} />
            <PortableText value={serviceLine.clients} />
            <PortableText value={serviceLine.representativeEngagements} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
