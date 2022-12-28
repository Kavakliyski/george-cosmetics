
const sanityClient = require('@sanity/client');
const imageUrlBuilder = require('@sanity/image_url_builder');


export const client = sanityClient({
    projectId: 'ofxz9fpd',
    dataset: 'production',
    apiVersion: '2022-12-28',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});


const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);