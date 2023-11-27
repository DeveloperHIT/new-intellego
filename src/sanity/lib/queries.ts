import { groq } from "next-sanity";

// ======================== Categories ================================
export const getCategoriesQuery = groq`*[_type == "category"] {
    _id,
    title,
    slug,
    meta_description,
    publishedAt,
    "postCount": count(*[_type == "post" && references(^._id)]),
  }`;

export const getCategoryRelatedPostQuery = groq`*[_type == "post" && $slug in categories[]->slug.current]{
    _createdAt,
    title,
    body,
    "author": author -> {name,slug,image,designation,profiles,bio,about},
    meta_description,
    mainImage,
    slug,
    "tags": tags[]-> {title,slug},
    "category": categories[]-> {title,slug},
    "series":series-> {title,slug},
    publishedAt,
}`;

// ======================== Contact Us Page =======================
export const getContactUsPageQuery = groq`*[_type == "contact"]{
  pageTitle,
  pageDescription,
  address,
  contactPhoneNumber,
  contactEmail,
  "contactFormFields": contactFormFields[]{
    fieldType,
    fieldName,
    isRequired
  },
  "socialMediaProfiles": socialMediaProfiles[]{
    platformName,
    profileUrl,
    "iconAsset": platformIcon.asset->url
  }
}`;

// ======================== Clients Page ================================

export const getClientsPageQuery = groq`*[_type == "clients"]{
  buttonText,
  pageDescription,
  pageTitle,
}`;

export const getClientsQuery = groq`*[_type == "clientType"] | order(title asc) {
    title,
    slug,
    description,
    typicalServices,
    servicesDescription
}`;

export const getClientBySlugQuery = groq`*[_type == "clientType" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    description,
    typicalServices,
    servicesDescription
}`;

// ======================== Services ================================

export const getServicesPageQuery = groq`*[_type == "services"]{
    buttonText,
    pageDescription,
    pageTitle,
}`;

export const getServicesBySlugQuery = groq`*[_type == "serviceLine" && slug.current == $slug][0]{
    title,
    slug,
    description,
    servicesDescription,
    "services": services[]->{
        title,
        slug,
        description,
    }
}`;

export const getServiceLinesQuery = groq`*[_type == "serviceLine"] | order(title asc) {
    title,
    slug,
    description,
   "services": services[]->{
        title,
        slug,
        description,
    }
}`;

export const getLandingPageQuery = groq`*[_type == "landing"]{
    "heroButtonText": heroButtonText,
    "heroImage": heroImage.asset->url,
    "heroSubtitle": heroSubtitle,
    "heroTitle": heroTitle,
}`;
