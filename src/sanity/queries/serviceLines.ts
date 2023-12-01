import { groq } from "next-sanity";

export const getServiceLinesBySectorQuery = groq`*[_type == "sector" && slug.current == $slug][0] | order(title asc){
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
    } 
}`;

export const getServiceLineQuery = groq`*[_type == "serviceLine" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    description,
    clients,
    representativeEngagements,
}`;
