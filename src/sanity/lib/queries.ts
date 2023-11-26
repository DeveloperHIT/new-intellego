import { groq } from "next-sanity";

//============================== Posts ================================

export const postsQuery = groq`*[_type == "post"] | order(_createdAt desc){
  _createdAt,
  _updatedAt,
  title,
  body,
  isSeries,
  meta_description,
  mainImage,
  slug,
  "tags": tags[]-> {title,slug},
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  "series":series -> {title,slug},
  "category": categories[]-> {title,slug},
  "numberOfCharacters": length(pt::text(body)),
  "estimatedWordCount": round(length(pt::text(body)) / 5),
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  publishedAt,
}`;
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
    _createdAt,
    _updatedAt,
    publishedAt,
    title,
    body[]{
        ..., // Include all existing properties of the body field
        _type == "image" => {
            "imageWidth": asset->metadata.dimensions.width,
            "imageHeight": asset->metadata.dimensions.height
        } 
    },
    publishedAt,
    isSeries,
    tags,
    meta_description,
    mainImage,
    "mainImageWidth": mainImage.asset->metadata.dimensions.width,
    "mainImageHeight": mainImage.asset->metadata.dimensions.height,
    slug,
    "tags": tags[]-> {title,slug},
    "author": author -> {name,slug,image,designation,profiles,bio,about},
    "series":series -> {title,slug},
    "category": categories[]-> {title,slug},
    "numberOfCharacters": length(pt::text(body)),
    "estimatedWordCount": round(length(pt::text(body)) / 5),
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
}`;

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

// ======================== Landing Page ================================

export const getLandingPageQuery = groq`*[_type == "landing"]{
    "heroButtonText": heroButtonText,
    "heroImage": heroImage.asset->url,
    "heroSubtitle": heroSubtitle,
    "heroTitle": heroTitle,
}`;
