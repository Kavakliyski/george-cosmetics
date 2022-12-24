import Head from 'next/head'


// components
import Header from '../components/heading_footer/header'
import Footer from '../components/heading_footer/footeer'
import Header2 from '../components/heading_footer/header2'

export default function Home() {
    return (
        <>
            <Head>
                <title>George Cosmetics</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <Header /> */}
            <Header2 />
            
            <main className=''>
                <div className=''>
                    <h1 className="text-3xl font-bold underline">
                        Hello world!
                    </h1>
                </div>
            </main>
            <Footer />
        </>
    )
}
