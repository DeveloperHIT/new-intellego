import SectorsView from "@/sections/view/sectorsView";
import { client } from "@/sanity/lib/client";
import { queries } from "@/sanity/queries";

export default async function Sectors() {
  const sectors = await client.fetch(queries.getSectorsQuery);

  return <SectorsView sectors={sectors} />;
}
