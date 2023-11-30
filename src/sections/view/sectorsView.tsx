"use client";
import SectorsSection from "@/sections/services/sectorsSection";
import { SectorType } from "@/types/Sector";

interface SectorsViewProps {
  sectors: SectorType[];
}

export default function SectorsView({ sectors }: SectorsViewProps) {
  return (
    <>
      <SectorsSection sectors={sectors} />

      {/* TODO: Add process section */}
      {/* TODO: Add CTA section */}
    </>
  );
}
