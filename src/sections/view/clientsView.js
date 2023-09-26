"use client";
import Container from "@mui/material/Container";

import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";

export default function ClientsView({}) {
  return (
    <>
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Clients", href: "/clients" },
          ]}
        />
      </Container>
    </>
  );
}
