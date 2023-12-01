import { groq } from "next-sanity";

export const getSectorsQuery = groq`*[_type == "sector"] | order(title asc) {
    title,
    "slug": slug.current,
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
    } | order(title asc)
}`;

export const getSectorQuery = groq`*[_type == "sector" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    description,
    clients,
    representativeEngagements,
    "serviceLines": serviceLines[]->{
        title,
        "slug": slug.current,
        description,
        clients,
        representativeEngagements,
        "services": services[] ->{
            title,
            "slug": slug.current,
            description,
            clients,
            representativeEngagements,
        } | order(title asc)
    } | order(title asc)
}`;
