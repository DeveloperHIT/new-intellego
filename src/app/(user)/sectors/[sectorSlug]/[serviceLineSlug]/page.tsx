import ServiceLineView from "@/sections/view/serviceLineView";
// import {
//   getServiceBySlugQuery,
//   getServicesBySlugQuery,
// } from "@/sanity/lib/queries";
// import { client } from "@/sanity/lib/client";

import { client } from "@/sanity/lib/client";
import { queries } from "@/sanity/queries";

type Props = {
  params: { serviceLineSlug: string; sectorSlug: string };
};

export default async function ServiceLine(props: Props) {
  const sector = await client.fetch(queries.getSectorQuery, {
    slug: props.params.sectorSlug,
  });

  const serviceLine = await client.fetch(queries.getServiceLineQuery, {
    slug: props.params.serviceLineSlug,
  });

  console.log(serviceLine);

  return <ServiceLineView sector={sector} serviceLine={serviceLine} />;
}
