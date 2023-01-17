
import styles from '../styles/header.module.scss';

import Link from 'next/link';

// react
import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function Header() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])


    return (

        <header
            className={isScrolled ? styles.header : styles.header2}

        >
            <h1>Header</h1>

            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/signin">Sign In</Link>
                </li>
                <li>
                    <Link href="/deadpage">deadpage</Link>
                </li>

                {/* <Image src='' alt='shopping cart' width={30} height={30} /> */}
            </ul>
        </header>
    )
}