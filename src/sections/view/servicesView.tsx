"use client";
import ServicesSection from "@/sections/services/servicesSection";

interface PageData {
  buttonText: string;
  pageDescription: string;
  pageTitle: string;
}

interface ServiceLine {
  title: string;
  slug: {
    current: string;
  };
}

type ServicesLines = ServiceLine[];

interface ServicesViewProps {
  serviceLines: ServicesLines;
  pageData: PageData;
}

export default function ServicesView({
  serviceLines,
  pageData,
}: ServicesViewProps) {
  const { buttonText, pageDescription, pageTitle } = pageData;

  return (
    <>
      <ServicesSection
        buttonText={buttonText}
        pageDescription={pageDescription}
        pageTitle={pageTitle}
        serviceLines={serviceLines}
      />

      {/* TODO: Add process section */}
      {/* TODO: Add CTA section */}
    </>
  );
}
