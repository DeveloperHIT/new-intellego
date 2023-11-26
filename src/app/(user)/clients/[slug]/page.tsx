import ClientView from "@/sections/view/clientView";
import { client } from "@/sanity/lib/client";
import { getClientBySlugQuery } from "@/sanity/lib/queries";

type Props = {
  params: { slug: string };
};

export default async function SingleClientPage(props: Props) {
  const clientData = await client.fetch(getClientBySlugQuery, {
    slug: props.params.slug,
  });

  return <ClientView client={clientData} />;
}
