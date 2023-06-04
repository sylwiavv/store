import { useRouter } from "next/router";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { StoreApiResponse } from "@/pages/products";
import { ProductListItem } from "@/components/ProductListItem";
import Link from "next/link";

export type InferGetStaticPathsType<T> = T extends () => Promise<{
        paths: Array<{ params: infer R }>;
    }>
    ? R
    : never;

const ProductIdPage = ({ data}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();

    if (!data) {
        return <div>Coś poszło nie tak</div>;
    }
    return (
        <>
            <Link href={`/products`}>Wróć na stronę główną</Link>
            <ProductListItem
                data={{
                    id: data.id,
                    title: data.title,
                    description: data.description,
                    image: data.image,
                    thumbnailAlt: data.title,
                }}
            />
        </>

    );
};

export default ProductIdPage;

// ograniczenie ilości pathów, aby podaczs buildowania ten proces mógł się skończyć
// w naszym przypadku chodzi o productId
export const getStaticPaths = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/`);
    const data: StoreApiResponse[] = await res.json();

    return {
        paths: data.map((product) => {
            return {
                params: {
                    productId: product.id.toString(),
                },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps = async ({ params, }: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
    if (!params?.productId) {
        return {
            props: {},
            notFound: true,
        };
    }

    const res = await fetch(
        `https://fakestoreapi.com/products/${params?.productId}`
    );
    const data: StoreApiResponse | null = await res.json();

    return {
        props: {
            data,
        },
    };
};
