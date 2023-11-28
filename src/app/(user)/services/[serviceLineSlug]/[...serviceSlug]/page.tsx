import ServiceView from "@/sections/view/serviceView";
import {
  getServiceBySlugQuery,
  getServicesBySlugQuery,
} from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

type Props = {
  params: { serviceSlug: string; serviceLineSlug: string };
};

export default async function SingleServiceLinePage(props: Props) {
  const serviceData = await client.fetch(getServiceBySlugQuery, {
    slug: props.params.serviceSlug[0],
  });

  const serviceLineData = await client.fetch(getServicesBySlugQuery, {
    slug: props.params.serviceLineSlug,
  });

  return (
    <ServiceView serviceData={serviceData} serviceLineData={serviceLineData} />
  );
}
