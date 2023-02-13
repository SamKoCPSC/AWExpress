import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/examplePage");
    }, [])

    return (
        <></>
    )
}

export async function getServerSideProps(context) {

    return {
        redirect: {
            destination: '/examplePage',
            permanent: false,
        }
    }
}
