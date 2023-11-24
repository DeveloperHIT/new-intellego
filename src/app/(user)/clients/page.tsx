import ClientsView from "@/sections/view/clientsView";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { getClientsPageQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Clients",
  description: "Clients page",
  keywords: "clients, clients page",
};

export default async function Page() {
  const clientsPageData = await client.fetch(getClientsPageQuery);

  const pageData = {
    buttonText: clientsPageData[0].buttonText,
    pageDescription: clientsPageData[0].pageDescription,
    pageTitle: clientsPageData[0].pageTitle,
  };

  return <ClientsView pageData={pageData} />;
}
