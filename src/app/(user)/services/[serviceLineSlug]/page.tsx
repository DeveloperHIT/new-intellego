import ServiceLineView from "@/sections/view/serviceLineView";
import { client } from "@/sanity/lib/client";
import { getServicesBySlugQuery } from "@/sanity/lib/queries";

type Props = {
  params: { serviceLineSlug: string };
};

export default async function SingleServiceLinePage(props: Props) {
  const serviceLineData = await client.fetch(getServicesBySlugQuery, {
    slug: props.params.serviceLineSlug,
  });

  return <ServiceLineView serviceLineData={serviceLineData} />;
}
