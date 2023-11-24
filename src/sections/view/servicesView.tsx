"use client";
import ServicesSection from "@/sections/services/servicesSection";

interface PageData {
  buttonText: string;
  pageDescription: string;
  pageTitle: string;
}

interface ServicesViewProps {
  pageData: PageData;
}

export default function ServicesView({ pageData }: ServicesViewProps) {
  const { buttonText, pageDescription, pageTitle } = pageData;

  return (
    <>
      <ServicesSection
        buttonText={buttonText}
        pageDescription={pageDescription}
        pageTitle={pageTitle}
      />
      {/* TODO: Add process section */}
      {/* TODO: Add CTA section */}
    </>
  );
}
