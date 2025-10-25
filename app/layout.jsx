import "./globals.css";
import Navbar from "../_components/Navbar";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import { getProductsFromServer } from "@/lib/services/productService";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


export const metadata = {
  title: "MegaMart",
  description: "Best online store",
};

export default async function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="bg-white">
        <ReactQueryProvider>
          <Navbar/>
          {children}
          <ReactQueryDevtools initialIsOpen={true} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
