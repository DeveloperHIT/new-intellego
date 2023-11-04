"use client";
import Box from "@mui/material/Box";
import { usePathname } from "@/hooks/usePathname";
import { HEADER } from "@/layouts/configLayout";
import Header from "./header";
import Footer from "./footer";
import { useScroll } from "framer-motion";
import ScrollProgress from "@/components/ScrollProgress/scrollProgress";

const pathsOnDark = ["/"];

const spacingLayout = [...pathsOnDark, "/"];

export default function MainLayout({ children, clientData, serviceData }) {
  const pathname = usePathname();

  const actionPage = (arr) => arr.some((path) => pathname === path);

  const { scrollYProgress } = useScroll();

  // Check if the current route is the admin route
  const isAdminRoute = pathname.includes("/admin");
  console.log("isAdminRoute", isAdminRoute);

  if (isAdminRoute) {
    return <>{children}</>;
  } else {
    return (
      <>
        <ScrollProgress scrollYProgress={scrollYProgress} />
        <Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
          <Header headerOnDark={actionPage(pathsOnDark)} />

          <Box
            component="main"
            sx={{
              flexGrow: 1,
            }}
          >
            {!actionPage(spacingLayout) && <Spacing />}

            {children}
          </Box>

          <Footer clientData={clientData} serviceData={serviceData} />
        </Box>
      </>
    );
  }
}

function Spacing() {
  return (
    <Box
      sx={{
        height: { xs: HEADER.H_MOBILE, md: HEADER.H_DESKTOP },
      }}
    />
  );
}
