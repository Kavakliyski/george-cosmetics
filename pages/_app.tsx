import Footer from '../components/footer'
import Header from '../components/header'
import { AuthContextProvider } from '../context/AuthContext'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
    return (

        <>
            <AuthContextProvider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </AuthContextProvider>
        </>
    )
}
