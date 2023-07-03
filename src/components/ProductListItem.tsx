import React from 'react';
import {ProductDetails} from "@/pages/products";
import Image from "next/image";
import {ReactMarkDownLink} from "@/components/ReactMarkDownLink";
import {MDXRemote} from "next-mdx-remote";

type ProductsListItem = Pick<ProductDetails, "id" | "title" | "description" |"image" | "thumbnailAlt" | "longDescription">

interface ProductsListItemProps {
    data: ProductsListItem
}

export const ProductListItem = ({data} : ProductsListItemProps) => {
    const { title, description, image, thumbnailAlt, longDescription} = data
    return (
        <div className="flex flex-col border-2 p-2 w-2/3 ">
            <h3 className="font-bold">{title}</h3>
            <div className="p-40" style={{backgroundColor: "#fff" ,display: "flex", justifyContent: "center"}}>
                <Image width={500} height={500} src={image } alt={title} style={{objectFit: "cover"}} />
            </div>
            <div>{description}</div>
            <article className="prose lg:prose-xl p-4">
                <MDXRemote {...data.longDescription} />
            </article>
        </div>
    );
}