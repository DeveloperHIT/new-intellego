"use client";
import Container from "@mui/material/Container";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Grid from "@mui/material/Unstable_Grid2";
// import { ServiceLineType, ServiceType } from "@/types";
import { PortableText } from "@portabletext/react";
import SectorSummary from "@/sections/services/sectorSummary";
import Typography from "@mui/material/Typography";
import { SectorType } from "@/types/Sector";
// import Box from "@mui/material/Box";

interface SectorViewProps {
  sector: SectorType;
}

export default function SectorView({ sector }: SectorViewProps) {
  return (
    <>
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Sectors", href: "/sectors" },
            { name: sector.title },
          ]}
        />
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          direction={{ md: "row-reverse" }}
        >
          <Grid xs={12} md={4}>
            <SectorSummary sector={sector} />
          </Grid>

          <Grid xs={12} md={8}>
            <Typography variant="h3">{sector.title}</Typography>
            {/* TODO: Add serializer */}
            <PortableText value={sector.description} />

            {/* TODO: Add call to action */}

            {/*{sector.serviceLines.map((serviceLine: ServiceLineType, index) => (*/}
            {/*  <Box key={index}>*/}
            {/*    <Typography variant="h4">{serviceLine.title}</Typography>*/}
            {/*    /!* Render the serviceLine description here *!/*/}
            {/*    <PortableText value={serviceLine.description} />*/}

            {/*    {serviceLine.services?.map(*/}
            {/*      (service: ServiceType, serviceIndex) => (*/}
            {/*        <Box key={serviceIndex}>*/}
            {/*          <Typography variant="h5">{service.title}</Typography>*/}
            {/*          <PortableText value={service.description} />*/}
            {/*          <Typography variant="h6">Typical Clients</Typography>*/}
            {/*          <PortableText value={service.clients} />*/}
            {/*          <Typography variant="h6">*/}
            {/*            Representative Engagements*/}
            {/*          </Typography>*/}
            {/*          <PortableText value={service.representativeEngagements} />*/}
            {/*        </Box>*/}
            {/*      ),*/}
            {/*    )}*/}
            {/*  </Box>*/}
            {/*))}*/}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
