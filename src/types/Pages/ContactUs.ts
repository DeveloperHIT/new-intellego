import { Address } from "@/types/Address";

export interface ContactUsPage {
  contactFormFields?: any;
  socialMediaProfiles?: any;
  pageTitle?: string;
  pageDescription?: string;
  address: Address;
  contactPhoneNumber?: string;
  contactEmail?: string;
}
