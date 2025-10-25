
"use client";

import Navbar from '@/_components/admin/Navbar';
import Sidebar from '@/_components/admin/Sidebar';
import {useState } from 'react'

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
    <div className="">
      <div className="flex h-screen overflow-hidden absolute top-0 left-0 w-full bg-[#1a222c]">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className={`mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 relative`}>
                {children}
            </div>
          </main>
        </div>
      </div>
    </div>
    </>
  );
}
