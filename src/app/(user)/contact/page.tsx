import ContactView from "@/sections/view/contactView";
import { Metadata } from "next";
import { getContactUsPageQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page",
  keywords: "contact, contact page",
};

export default async function Page() {
  const contactPageData = await client.fetch(getContactUsPageQuery);

  const pageData = {
    address: {
      pmb: contactPageData[0].address.pmb,
      city: contactPageData[0].address.city,
      street: contactPageData[0].address.street,
      state: contactPageData[0].address.state,
      zipCode: contactPageData[0].address.zipCode,
    },
    contactPhoneNumber: contactPageData[0].contactPhoneNumber,
    contactEmail: contactPageData[0].contactEmail,
    pageTitle: contactPageData[0].pageTitle,
  };

  return <ContactView contactPageData={pageData} />;
}
