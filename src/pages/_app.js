import Layout from "@/components/Layout";
import ProductsLayout from "@/components/ProductsLayout";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {
  const pathname=usePathname();
  const productsLayouPages = ["/products" , "/services"]
  const LayoutComponent = productsLayouPages.includes(pathname) ? ProductsLayout : Layout; 
  return (
    <>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
}
