"use client";
import ClientsSection from "@/sections/clients/clientsSection";

export default function ClientsView({ clients }) {
  return (
    <>
      <ClientsSection clients={clients} />
    </>
  );
}
