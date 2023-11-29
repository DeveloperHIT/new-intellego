"use client";
import ServicesSection from "@/sections/services/servicesSection";
import { ServiceLineType } from "@/types";

interface PageData {
  buttonText: string;
  pageDescription: string;
  pageTitle: string;
}

interface ServicesViewProps {
  serviceLines: ServiceLineType[];
  pageData: PageData;
}

export default function ServiceLinesView({
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
