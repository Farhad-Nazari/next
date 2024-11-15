import Link from "next/link";


const ProductsLayout = ({ children }) => {
    return (
        <>
            <header className="h-[60px] w-[100%] bg-blue-900 flex gap-3 items-center px-3">
                <Link href={"/"} className="font-bold text-white text-[24px]">My Brand</Link>
                <nav className="h-[100%] flex gap-2 items-center ">
                    <Link className="text-[#dedede] px-1 " href={"/"}>Home</Link>
                    <Link className="text-[#dedede] px-1 " href={"/services"}>Services</Link>
                    <Link className="text-[#dedede] px-1 " href={"/products"}>products</Link>
                    <Link className="text-[#dedede] px-1 " href={"/posts"}>posts</Link>
                    <Link className="text-[#dedede] px-1 " href={"/contact"}>Contact</Link>
                    <Link className="text-[#dedede] px-1 " href={"/about"}>About</Link>
                </nav>
            </header>
            <div className="p-5">{children}</div>
            <footer className="w-[100%] bg-slate-900 flex justify-between p-4">
                <div className="w-[30%]">
                    <h4 className="text-[#ddd] underline mb-3">about</h4>
                    <p className="text-[#ddd] text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis adipisci molestiae quis repudiandae blanditiis fugit! Id, porro. Debitis ad explicabo reprehenderit expedita optio provident aliquid nemo minus hic voluptatum.</p>
                </div>
                <div className="w-[30%]">
                    <h4 className="text-[#ddd] underline mb-3">Usefull Links</h4>
                    <Link className="text-[#dedede] px-1 block" href={"/"}>Home</Link>
                    <Link className="text-[#dedede] px-1 block" href={"/services"}>Services</Link>
                    <Link className="text-[#dedede] px-1 block" href={"/products"}>products</Link>
                    <Link className="text-[#dedede] px-1 block" href={"/contact"}>Contact</Link>
                    <Link className="text-[#dedede] px-1 block" href={"/about"}>About</Link>
                </div>
                <div className="w-[30%]">
                    <h4 className="text-[#ddd] underline mb-3">contact</h4>
                    <p className="text-[#ddd] font-bold text-justify">Address:</p>
                    <p className="text-[#ddd] text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis adipisci molestiae quis repudiandae blanditiis fugit! Id, porro. Debitis ad explicabo reprehenderit expedita optio provident aliquid nemo minus hic voluptatum.</p>
                </div>
            </footer>
        </>
    );
}

export default ProductsLayout;