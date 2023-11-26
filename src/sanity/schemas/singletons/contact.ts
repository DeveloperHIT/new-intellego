import { defineType, defineField } from "sanity";
import { Email } from "@mui/icons-material";

export default defineType({
  name: "contact",
  title: "Contact Page",
  type: "document",
  icon: Email,
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      description:
        'The main title displayed on the contact page, usually "Contact Us".',
    }),
    defineField({
      name: "pageDescription",
      title: "Page Description",
      type: "text",
      description:
        "A short summary that describes the purpose of the contact page, also used for SEO.",
    }),
    defineField({
      name: "address",
      title: "Physical AddressType",
      description: "Enter the components of the business address.",
      type: "reference",
      to: [{ type: "address" }],
    }),
    defineField({
      name: "contactPhoneNumber",
      title: "Contact Phone Number",
      type: "string",
      description:
        "The primary phone number where the business can be reached.",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email AddressType",
      type: "string",
      description: "The email address for general inquiries.",
    }),
    defineField({
      name: "contactFormFields",
      title: "Contact Form Fields",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "fieldType",
              type: "string",
              title: "Input Field Type",
              description:
                "The HTML input type, such as text, email, or textarea.",
            },
            {
              name: "fieldName",
              type: "string",
              title: "Input Field Name",
              description:
                "The name attribute for the input field, which will also be used as the label.",
            },
            {
              name: "isRequired",
              type: "boolean",
              title: "Required Field",
              description:
                "Indicates whether this field must be filled out in order to submit the form.",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "socialMediaProfiles",
      title: "Social Media Profiles",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platformName",
              type: "string",
              title: "Social Media Platform",
              description:
                "The name of the social media platform (e.g., LinkedIn, Twitter).",
            },
            {
              name: "profileUrl",
              type: "url",
              title: "Profile URL",
              description: "The URL to the social media profile or page.",
            },
            {
              name: "platformIcon",
              type: "image",
              title: "Platform Icon",
              description:
                "An icon image that represents the social media platform.",
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "pageTitle",
      subtitle: "pageDescription",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? subtitle : "No description",
      };
    },
  },
});
