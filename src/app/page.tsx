import Hero from "@/sections/Hero";
import { Box } from "@mui/material";
import TrendingInsights from "@/sections/TrendingInsights";
import Services from "@/sections/Services";
import Industry from "@/sections/Industry";
import Insights from "@/sections/Insights";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <Box>
      <Hero />
      <TrendingInsights />
      <Services />
      <Industry />
      <Insights />
      <Footer />
    </Box>
  );
}
