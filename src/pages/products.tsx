import { InferGetStaticPropsType } from "next";
import { ProductListItem} from "@/components/ProductListItem";
import {Product} from "@/components/Product";

export interface StoreApiResponse {
    id: number,
    title: string,
    description: string
    category: string,
    image: string
    thumbnailUrl: string,
    thumbnailAlt: string,
}

export interface ProductDetails {
    id: number,
    title: string,
    description: string
    category: string,
    image: string
    thumbnailUrl: string,
    thumbnailAlt: string,
}

interface ProductProps {
    data: ProductDetails
}

type ProductType = Pick<StoreApiResponse, "title" | "description">

const ProductPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-7/12 m-auto">
            {data.map((product) => {
                return (
                    <li key={product.id} className={"shadow-xl border-2"}>
                        <Product data={{
                            title: product.title,
                            image: product.image,
                            thumbnailAlt: product.thumbnailAlt
                        }} />
                    </li>
                );
            })}
        </ul>
    )
};

export default ProductPage;

export const getStaticProps = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/`);
    const data: StoreApiResponse[] = await res.json();

    return {
        props: {
            data,
        },
    };
};