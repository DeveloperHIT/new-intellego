import ServicesView from "@/sections/view/servicesView";
import { client } from "@/sanity/lib/client";
import {
  getServiceLinesQuery,
  getServicesPageQuery,
} from "@/sanity/lib/queries";

export default async function Page() {
  const servicesPageData = await client.fetch(getServicesPageQuery);

  const pageData = {
    buttonText: servicesPageData[0].buttonText,
    pageDescription: servicesPageData[0].pageDescription,
    pageTitle: servicesPageData[0].pageTitle,
  };

  const serviceLines = await client.fetch(getServiceLinesQuery);

  console.log("Services list structure from page.tsx: ", serviceLines);

  return <ServicesView pageData={pageData} serviceLines={serviceLines} />;
}
