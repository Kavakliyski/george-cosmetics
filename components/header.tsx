
import styles from '../styles/header.module.scss';

import Link from 'next/link';


export default function Header() {

    return (

        <nav className={styles.header}>
            <h1>Header</h1>

            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/signin">Sign In</Link>
                </li>
            </ul>
        </nav>
    )
}