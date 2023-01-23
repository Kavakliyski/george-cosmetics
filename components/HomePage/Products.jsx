import React from 'react'


import { fetcher } from '../../library/api';
import { Prods } from './Prods';


export default function Products({ products }) {

    console.table(products)

    return (
        <>
            <div>Products</div>
            <Prods products={products} />
        </>
    )
}



export async function getStaticProps() {

    const productsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products`)

    console.log(productsResponse);

    return {
        props: {
            products: productsResponse.json
        }
    }
}
