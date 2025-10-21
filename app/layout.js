import "./globals.css";
import Navbar from "../_components/Navbar";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import { getProductsFromServer } from "@/lib/services/productService";

export const metadata = {
  title: "MegaMart",
  description: "Best online store",
};

export default async function RootLayout({ children }) {
  const data = await getProductsFromServer();
  
  return (
    <html lang="en">
      <body className="bg-white">
        <ReactQueryProvider>
          <Navbar initialData={data || []} />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}