import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { getAllGallery } from "@/lib/sanity"
import PublicBanner from "@/components/PublicBanner"
import GalleryGrid from "@/components/gallery-grid"

export const metadata: Metadata = {
  title: "Gallery - Alfuttaim Energy",
  description: "Explore our energy projects through stunning visuals and behind-the-scenes moments from solar installations, training programs, and community impact initiatives.",
  openGraph: {
    title: "Gallery - Alfuttaim Energy",
    description: "Explore our energy projects through stunning visuals and behind-the-scenes moments from solar installations, training programs, and community impact initiatives.",
    type: "website",
    images: [
      {
        url: "/public-banner.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery - Alfuttaim Energy",
    description: "Explore our energy projects through stunning visuals and behind-the-scenes moments from solar installations, training programs, and community impact initiatives.",
    images: ["/public-banner.jpg"],
  },
}

const pageData = {
  title: "Project Gallery",
  subTitle: "Explore our energy projects through stunning visuals and behind-the-scenes moments.",
  pagename: "/public-banner.jpg",
}

export default async function GalleryPage() {
  const gallery = await getAllGallery()

  return (
    <div className="flex flex-col w-full">
      <PublicBanner pageName={pageData.pagename} title={pageData.title} subTitle={pageData.subTitle} />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {gallery.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">No images found</h2>
              <p className="text-muted-foreground">
                We're working on adding more images to showcase our projects. Check back soon!
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <Badge className="mb-4">Portfolio</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work in Pictures</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  From solar installations to community impact, see how we're transforming energy landscapes across Nigeria.
                </p>
              </div>
              
              <GalleryGrid items={gallery} />
            </>
          )}
        </div>
      </section>
    </div>
  )
}
