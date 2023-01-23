import Head from 'next/head';

import Products from '../components/HomePage/Products';


export default function Home() {


    return (
        <>

            <Head>
                <title>Home - George cosmetics</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <main className=''>
                landing page
                <h2>Banner</h2>
                <Products />
            </main>
        </>
    )
}


