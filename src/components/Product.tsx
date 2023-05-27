import React from 'react';
import {StoreApiResponse} from "@/pages/products";

type ProductDetails = Pick<StoreApiResponse, "title" | "image" | "thumbnailAlt">

interface ProductsListItemProps {
    data: ProductDetails
}

export const Product = ({data} : ProductsListItemProps) => {
    const { title, image, thumbnailAlt} = data
    return (
        <div className="bg-pink-300 flex flex-col border-2 p-2">
            <h3 className="font-bold">{title}</h3>
            <div>
                <img src={image } alt={thumbnailAlt}/>
            </div>
        </div>
    );
}