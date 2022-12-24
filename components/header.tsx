import Link from 'next/link'


export default function Header() {

    return (

        <nav>
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