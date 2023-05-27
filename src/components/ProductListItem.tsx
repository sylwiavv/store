import React from 'react';
import {ProductDetails} from "@/pages/products";

type ProductsListItem = Pick<ProductDetails, "title" | "description" |"image" | "thumbnailAlt">

interface ProductsListItemProps {
    data: ProductsListItem
}

export const ProductListItem = ({data} : ProductsListItemProps) => {
    const { title, description, image, thumbnailAlt} = data
    return (
        <div className="bg-pink-300 flex flex-col border-2 p-2">
            <h3 className="font-bold">{title}</h3>
            <div>
                <img src={image } alt={thumbnailAlt}/>
            </div>
            <div>{description}</div>
        </div>
    );
}