"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import PageLoader from "./PageLoader";

export default function LinkButton({ href, children, className, onClick }) {
  const router = useRouter();
  const pathname = usePathname(); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  const handleClick = async (e) => {
    if (onClick) onClick(e);
    if (pathname !== href) {
      setLoading(true);
      await router.push(href);
    }
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        {children}
      </button>
      <PageLoader visible={loading} />
    </>
  );
}
