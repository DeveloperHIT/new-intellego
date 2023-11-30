import { groq } from "next-sanity";

export const getSectorsQuery = groq`*[_type == "sector"]{
    title,
    slug,
    description,
    clients,
    representativeEngagements,
    "serviceLines": serviceLines[]->{
        title,
        "slug": slug.current,
        description,
        clients,
        representativeEngagements,
        "services": services[]->{
            title,
            slug,
            description
        }
    }
}`;

export const getSectorQuery = groq`*[_type == "sector" && slug.current == $slug][0]{
    title,
    slug,
    description,
    clients,
    representativeEngagements,
    "serviceLines": serviceLines[]->{
        title,
        "slug": slug.current,
        description,
        clients,
        representativeEngagements,
        "services": services[]->{
            title,
            slug,
            description,
            clients,
            representativeEngagements,
        }
    }
}`;
