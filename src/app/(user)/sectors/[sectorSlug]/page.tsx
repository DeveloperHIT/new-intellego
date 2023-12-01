import SectorView from "@/sections/view/sectorView";
import { client } from "@/sanity/lib/client";
import { getSectorQuery } from "@/sanity/queries/sectors";

type Props = {
  params: { sectorSlug: string };
};

export default async function Sector(props: Props) {
  const sector = await client.fetch(getSectorQuery, {
    slug: props.params.sectorSlug,
  });

  console.log(sector);

  return <SectorView sector={sector} />;
}
