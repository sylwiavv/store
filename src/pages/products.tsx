import { InferGetStaticPropsType } from "next";
import {Product} from "@/components/Product";

export interface StoreApiResponse {
    id: number,
    title: string,
    description: string
    category: string,
    image: string,
    longDescription: string,
    thumbnailUrl: string,
    thumbnailAlt: string,
    // rating: {
    //     rate: number,
    //     count: number
    // }
}

export interface ProductDetails {
    id: number,
    title: string,
    description: string
    category: string,
    image: string
    thumbnailUrl: string,
    thumbnailAlt: string,
    longDescription: string
    // rating: {
    //     rate: number,
    //     count: number
    // }
}

const ProductPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-2/3 m-auto">
            {data.map((product) => {
                return (
                    <li key={product.id} className={"shadow-xl border-2"}>
                        <Product data={{
                            id: product.id,
                            title: product.title,
                            image: product.image,
                            thumbnailAlt: product.thumbnailAlt
                            // rating: product.rating.rate
                        }} />
                    </li>
                );
            })}
        </ul>
    )
};

export default ProductPage;

export const getStaticProps = async () => {
    const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
    const data: StoreApiResponse[] = await res.json();

    return {
        props: {
            data,
        },
    };
};