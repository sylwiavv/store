import React, {ReactNode} from 'react';

interface MainProps {
    children: ReactNode
}

export const Main = ({children} : MainProps) => {
    return (
        <main className="flex-grow max-w-screen-2xl mx-auto w-full">{children}</main>

    );
}