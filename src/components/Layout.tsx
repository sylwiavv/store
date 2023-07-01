import React, {ReactNode} from 'react';
import Head from "next/head";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>elo</title>
                <meta name="description" />
            </Head>
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
        </div>
    );
}