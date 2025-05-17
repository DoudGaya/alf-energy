import React from 'react'
import Image from 'next/image'
import { Badge } from './ui/badge'
import publicBanner from '@/public/solar farm 2.jpg'

type BannerProps = {
    pageName: string
    title: string
    subTitle: string
}

const PublicBanner = ({pageName, title, subTitle}: BannerProps ) => {
  return (
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={publicBanner}
            alt="Contact Us Background"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 py-10 z-10 relative">
          <div className="max-w-3xl">
            {/* <Badge className="mb-4 bg-orange-600 border-blue-500 text-blue-500" variant="outline">
            {pageName}
            </Badge> */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-lg text-gray-300 mb-8"> {subTitle} </p>
          </div>
        </div>
      </section>
  )
}

export default PublicBanner