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
      {/* TODO: Maybe just map array of service types instead of using page description on services page */}
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
