import Link from "next/link";
import React from "react";
import { MDXRemote } from "next-mdx-remote";
import {MarkdownResultType} from "../../types";

export const ReactMarkDownLink = ({ children }: {children: MarkdownResultType}) => {
    return (
        <MDXRemote
            {...children}
            components={{
                a: ({ href, ...props }) => {
                    if (!href) {
                        return <a {...props} />;
                    }
                    return (
                        <Link href={href}>
                            <a {...props}> </a>
                        </Link>
                    );
                },
            }}
        />
    );
};