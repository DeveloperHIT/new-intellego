// import ServiceLineView from "@/sections/view/serviceLineView";
// import {
//   getServiceBySlugQuery,
//   getServicesBySlugQuery,
// } from "@/sanity/lib/queries";
// import { client } from "@/sanity/lib/client";

// type Props = {
//   params: { serviceLineSlug: string; serviceSlug: string };
// };

export default async function ServiceLine() {
  // const serviceData = await client.fetch(getServiceBySlugQuery, {
  //   slug: props.params.serviceSlug,
  // });
  //
  // const serviceLineData = await client.fetch(getServicesBySlugQuery, {
  //   slug: props.params.serviceLineSlug,
  // });

  // const serviceLines = await client.fetch(getServiceLinesBySectorQuery);

  return (
    <>Service Line</>
    // <ServiceLineView
    //   // serviceData={serviceData}
    //   // serviceLines={serviceLines}
    // />
  );
}
