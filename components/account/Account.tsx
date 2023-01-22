
// next
import { useRouter } from "next/router";

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
            <p>Hello: {user && user.email}</p>
            <button onClick={handleLogout}>Log out</button>
        </>
    )
};