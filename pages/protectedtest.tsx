import { useRouter } from "next/router";
import { useEffect } from "react";


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