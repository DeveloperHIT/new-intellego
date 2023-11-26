"use client";
import Container from "@mui/material/Container";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Grid from "@mui/material/Unstable_Grid2";

interface ServiceViewProps {}

export default function ServiceView({}: ServiceViewProps) {
  return (
    <>
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            // TODO: how to make this dynamic so it remembers the route (e.g., clicking services, valuation, business valuation works, but then it doesn't remember when clicking back?
            { name: "Service", href: "/services/service" },
            { name: "test" },
          ]}
        />
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          direction={{ md: "row-reverse" }}
        >
          <Grid xs={12} md={4}>
            {/*<ServiceLineSummary serviceLineData={serviceLineData} />*/}
          </Grid>

          <Grid xs={12} md={8}>
            TODO: Add Service Page
            {/*<Typography variant="h3">{serviceLineData.title}</Typography>*/}
            {/* TODO: Add serializer */}
            {/*<PortableText value={serviceLineData.servicesDescription} />*/}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
