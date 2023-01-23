
// next
import { useRouter } from "next/router";
import Link from 'next/link';

// auth context
import { UserAuth } from "../../context/AuthContext";


export const Account = () => {

    const { user, logout } = UserAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logout()
            router.push('/signin');
            console.log('logged out');
        } catch (err) {
            console.log(err.message);
        }

    };

    return (
        <>
            {
                user
                    ?
                    <div>
                        <p>Hello: {user && user.email}</p>
                        <button onClick={handleLogout}>Log out</button>
                    </div>
                    :
                    <div>
                        <Link href="/signin"><p>Sign In</p></Link>
                    </div>
            }


        </>
    )
};