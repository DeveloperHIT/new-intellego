"use client";
import ClientsSection from "@/sections/clients/clientsSection";

interface PageData {
  buttonText: string;
  pageDescription: string;
  pageTitle: string;
}

interface ClientsViewProps {
  pageData: PageData;
}

export default function ClientsView({ pageData }: ClientsViewProps) {
  const { buttonText, pageDescription, pageTitle } = pageData;
  return (
    <>
      <ClientsSection
        buttonText={buttonText}
        pageDescription={pageDescription}
        pageTitle={pageTitle}
      />
    </>
  );
}
