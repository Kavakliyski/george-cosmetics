
export default function Header2() {

    return (
        <nav className="p-5 dark:bg-gray-800 dark:border-gray-600 bg-white border-t border-gray-200 text-gray-500 dark:text-gray-400">
            <div className="grid grid-cols-3 justify-center text-center	">

                {/* links */}
                <div className="inline object-center justify-center align-middle">
                    <ul className="flex flex-wrap justify-center align-center">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>

                {/* Logo */}
                <div className="flex justify-center align-middle">
                    <img className="inline w-16 object-center" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" />
                    <h1 className="inline align-center">George Cosmetics</h1>
                </div>

                {/* signin and cart */}
                <div className="object-center">
                    <button>SignIn</button>
                    <button>Cart</button>
                </div>
            </div>
        </nav>
    )
}