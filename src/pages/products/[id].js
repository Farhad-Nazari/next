import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const singleProductPage = () => {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const fetchProduct = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${router.query.id}`);
            const data = await res.json();
            setProduct(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        if (router.query.id) {
            fetchProduct();
        }
    }, [router.query])

    if (isLoading) {
        return (
            <h1>LAODING ...</h1>
        )
    } else {
        return (
            <>
                <h1>{product.title}</h1>
                <img src={product.image} alt={product.title} className="w-[300px] " />
                <p>{product.description}</p>
            </>
        );

    }
}

export default singleProductPage;