import CardDataStats from '@/_components/admin/CardDataStats'
import { Eye, ShoppingBag, ShoppingCart, UsersRound } from 'lucide-react'
import React from 'react'

export const metadata = {
  title: 'Admin - MegaMart',
  description: 'Admin dashboard',
}

export default function page() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 ">

        <CardDataStats title="Total views" total="$3.456K" >
          <Eye color='#fff'/>
        </CardDataStats>

        <CardDataStats title="Total Profit" total="$45,2K" >
          <ShoppingCart color='#fff'/>
        </CardDataStats>

        <CardDataStats title="Total Product" total="2.450" >
          <ShoppingBag color='#fff'/>
        </CardDataStats>

        <CardDataStats title="Total Users" total="3.456" >
          <UsersRound color='#fff'/>
        </CardDataStats>
        
      </div>
  )
}
