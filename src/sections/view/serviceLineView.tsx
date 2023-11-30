"use client";
import Container from "@mui/material/Container";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Grid from "@mui/material/Unstable_Grid2";
import { ServiceLineType } from "@/types";

interface ServiceLineViewProps {
  serviceLines: ServiceLineType[];
}

export default function ServiceLineView({}: ServiceLineViewProps) {
  return (
    <>
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/sectors" },
            // TODO: This should say valuation, litigation support, etc.
            // {
            //   name: serviceLines.title,
            //   href: `/services/${serviceLineData.slug.current}`,
            // },
            // { name: serviceData.title },
          ]}
        />
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          direction={{ md: "row-reverse" }}
        >
          <Grid xs={12} md={4}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            {/*<ServiceSummary serviceData={serviceData} />*/}
          </Grid>

          <Grid xs={12} md={8}>
            {/*<Typography variant="h3">{serviceData.title}</Typography>*/}
            {/* TODO: Add serializer */}
            {/*<PortableText value={serviceData.description} />*/}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
