import ServiceLinesView from "@/sections/view/serviceLinesView";
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

  const servicesData = await client.fetch(getServiceLinesQuery);

  return <ServiceLinesView pageData={pageData} serviceLines={servicesData} />;
}
