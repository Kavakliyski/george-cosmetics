// next
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// styles
import styles from '../styles/header.module.scss';
import styled from 'styled-components';
import { Account } from './account/Account';


const NavLinksA = styled.a`
    text-decoration: none;
    font-size: 28px;
    width: 10vw;
    font-weight: bold;
    text-transform: uppercase;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

    box-shadow: inset 0 0 0 0 #54b3d6;
    color: #54b3d6;
    margin: 0 2rem;
    padding: 0 0.15rem;
    transition: color .3s ease-in-out, box-shadow .325s ease-in-out;

    &:hover {
        box-shadow: inset 150px 0 0 0 #54b3d6;
        color: white;
    }
`

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

        <header className={isScrolled ? styles.header : styles.header2}>
            <nav className={styles.Nav}>
                <h1 className={styles.Title}>Header</h1>

                <ul>
                    <li>
                        <Link href="/" passHref legacyBehavior>
                            <NavLinksA>Home</NavLinksA></Link>
                    </li>
                    <li>
                        <Link href="/signin" passHref legacyBehavior>
                            <NavLinksA>Sign in</NavLinksA></Link>
                    </li>
                    <li>
                        <Link href="/register" passHref legacyBehavior>
                            <NavLinksA>Register</NavLinksA></Link>
                    </li>

                    <li>
                        <Link href="/deadpage" passHref legacyBehavior>
                            <NavLinksA>deadpage</NavLinksA></Link>
                    </li>

                    {/* <Image src='' alt='shopping cart' width={30} height={30} /> */}
                </ul>

                <div className={styles.UserProfileCart}>
                    <Account />
                </div>
            </nav>
        </header>
    )
}