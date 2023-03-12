// ----------------------------------------------------------------------

// AboutPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

import Head from "next/head";

export default function AboutPage() {
    return (
        <>
            <Head>
                <title> About us | Minimal UI</title>
            </Head>

            <div>
                <h1>About</h1>
            </div>
        </>
    );
}
