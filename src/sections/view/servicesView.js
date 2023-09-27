"use client";
import ServicesSection from "@/sections/services/servicesSection";

export default function ServicesView({ services }) {
  return (
    <>
      <ServicesSection services={services} />
      {/* TODO: Add process section */}
      {/* TODO: Add CTA section */}
    </>
  );
}
