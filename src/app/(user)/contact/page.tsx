import ContactView from "@/sections/view/contactView";
import { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "@sanity/client";
import { getContactQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page",
  keywords: "contact, contact page",
};

export default async function Page() {
  const contact = await sanityFetch<SanityDocument>({
    query: getContactQuery,
  });

  return <ContactView contact={contact} />;
}
