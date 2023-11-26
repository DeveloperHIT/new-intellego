"use client";
import ClientsSection from "@/sections/clients/clientsSection";
import { ClientType } from "@/types";

interface PageData {
  buttonText: string;
  pageDescription: string;
  pageTitle: string;
}

interface ClientsViewProps {
  pageData: PageData;
  clientsData: ClientType[];
}

export default function ClientsView({
  clientsData,
  pageData,
}: ClientsViewProps) {
  const { buttonText, pageDescription, pageTitle } = pageData;
  return (
    <>
      <ClientsSection
        buttonText={buttonText}
        pageDescription={pageDescription}
        pageTitle={pageTitle}
        clientsData={clientsData}
      />
    </>
  );
}
