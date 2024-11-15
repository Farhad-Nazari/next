import Link from "next/link";


const postsPage = ({posts}) => {
    return (
        <>
            <h1>products List</h1>
            <div className="w-[100%] flex flex-wrap">
                {posts.map((item) => {
                    return (
                        <div key={item.id} className="w-[20%]  p-2">
                            <div className="w-[100%] h-[100%] overflow-hidden p-2 rounded-[8px] bg-slate-400 flex flex-col justify-between">
                                <div>
                                    <h2 className="font-bold my-2">{item.title}</h2>
                                    <div className="flex justify-between px-2">
                                        <p>{item.category}</p>
                                    </div>
                                </div>
                                <Link href={`/posts/${item.id}`} className="text-[#363] px-2 my-2">View More</Link>
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
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return {
            props:{
                posts:data
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}
export default postsPage;