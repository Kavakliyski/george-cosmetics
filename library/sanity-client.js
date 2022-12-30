
import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'


export const sanity_client = sanityClient({
    projectId: 'ofxz9fpd',
    dataset: 'production',
    apiVersion: '2022-12-28',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});


const builder = imageUrlBuilder(sanity_client);

export const urlFor = (source) => builder.image(source);