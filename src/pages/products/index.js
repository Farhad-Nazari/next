import Link from "next/link";
// import { useEffect, useState } from "react";

const productsPage = ({ data }) => {
    
   
    // const [products, setProducts] = useState([]);
    // const getProducts = async () => {
    //     try {
    //         const res = await fetch("https://fakestoreapi.com/products");
    //         const data = await res.json();
    //         setProducts(data);
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }
    // useEffect(() => {
    //     getProducts();
    // }, [])
    return (
        <>
            <h1>products List</h1>
            <div className="w-[100%] flex flex-wrap">
                {data.map((item) => {
                    return (
                        <div key={item.id} className="w-[20%]  p-2">
                            <div className="w-[100%] h-[100%] overflow-hidden p-2 rounded-[8px] bg-slate-400 flex flex-col justify-between">
                                <div>
                                    <img src={item.image} alt="{item.title}" className="w-[100%] h-[250px] block mx-auto" />
                                    <h2 className="font-bold my-2">{item.title}</h2>
                                    <div className="flex justify-between px-2">
                                        <p>{item.category}</p>
                                        <p>{item.rating.rate}</p>
                                    </div>
                                </div>
                                <Link href={`/products/${item.id}`} className="text-[#363] px-2 my-2">View More</Link>
                            </div>

                        </div>

                    )
                })}
            </div>

        </>
    );
}
export async function getServerSideProps() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        return (
            { props: { data: data } }
        )
    } catch (error) {
        console.log(error.message);
    }
}

export default productsPage;