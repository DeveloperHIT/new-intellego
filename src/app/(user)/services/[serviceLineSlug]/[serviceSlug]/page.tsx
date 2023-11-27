import ServiceView from "@/sections/view/serviceView";
import { getServiceBySlugQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

type Props = {
  params: { serviceSlug: string };
};

export default async function SingleServiceLinePage(props: Props) {
  const serviceData = await client.fetch(getServiceBySlugQuery, {
    slug: props.params.serviceSlug,
  });

  console.log(serviceData);

  return <ServiceView serviceData={serviceData} />;
}
