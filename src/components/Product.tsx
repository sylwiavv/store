import React from 'react';
import {StoreApiResponse} from "@/pages/products";
import Link from "next/link";
import Image from "next/image";

type ProductDetails = Pick<StoreApiResponse, "title" | "image" | "thumbnailAlt" | "id">

interface ProductsListItemProps {
    data: ProductDetails
}

export const Product = ({data} : ProductsListItemProps) => {
    const { title, image, thumbnailAlt} = data
    return (
        <div className="bg-white flex flex-col border-2 p-2 h-full">
            <Link href={`/products/${data.id}`}>
                    <h3 className="font-bold mb-8">{title}</h3>
            </Link>
            <div style={{backgroundColor: "#fff", display: "flex", justifyContent: "center", padding: "8px 16px"}}>
                <Image src={image }
                       alt={title}
                       width={500}
                       height={500}
                       style={{objectFit: "contain"}}
                />
            </div>
        </div>
    );
}