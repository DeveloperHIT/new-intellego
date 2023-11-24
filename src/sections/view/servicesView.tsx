"use client";
import ServicesSection from "@/sections/services/servicesSection";

interface PageData {
  buttonText: string;
  pageDescription: string;
  pageTitle: string;
}

interface ServicesListItem {
  title: string;
  slug: {
    current: string;
  };
}

type ServicesList = ServicesListItem[];

interface ServicesViewProps {
  servicesList: ServicesList;
  pageData: PageData;
}

export default function ServicesView({
  servicesList,
  pageData,
}: ServicesViewProps) {
  const { buttonText, pageDescription, pageTitle } = pageData;

  return (
    <>
      <ServicesSection
        buttonText={buttonText}
        pageDescription={pageDescription}
        pageTitle={pageTitle}
        servicesList={servicesList}
      />

      {/* TODO: Add process section */}
      {/* TODO: Add CTA section */}
    </>
  );
}
