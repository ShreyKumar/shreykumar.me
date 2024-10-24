"use client"

import Layout from "./components/Layout";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
    const router = useRouter();

    return (
        <Layout>
            <h1>Woopsie! Looks like you stumbled on the wrong page</h1>
            <p>
                Click <button onClick={() => router.back()}>here</button> to go back to the previous page.
            </p>
        </Layout>
    );
}