import { useRouter } from "next/router";
import { useEffect } from "react";


// import MyProtectedPage from './MyProtectedPage'
// export default withAuth(MyProtectedPage)

const protectedtest = () => {
    const router = useRouter();


    useEffect(() => {
        
    }, [])

    return (
        <div>
            <h1>protectedtest</h1>
        </div>
    );
};

export default protectedtest;