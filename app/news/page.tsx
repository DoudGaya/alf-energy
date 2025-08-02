import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { getPaginatedNews, urlFor } from "@/lib/sanity"
import PublicBanner from "@/components/PublicBanner"

export const metadata: Metadata = {
  title: "News & Updates - Alfuttaim Energy",
  description: "Stay updated with the latest news, insights, and developments from Alfuttaim Energy's renewable energy projects and initiatives.",
  openGraph: {
    title: "News & Updates - Alfuttaim Energy",
    description: "Stay updated with the latest news, insights, and developments from Alfuttaim Energy's renewable energy projects and initiatives.",
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
    title: "News & Updates - Alfuttaim Energy",
    description: "Stay updated with the latest news, insights, and developments from Alfuttaim Energy's renewable energy projects and initiatives.",
    images: ["/public-banner.jpg"],
  },
}

interface NewsPageProps {
  searchParams: { page?: string }
}

const pageData = {
  title: "Latest News & Updates",
  subTitle: "Stay informed about our energy projects and industry insights.",
  pagename: "/public-banner.jpg",
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const currentPage = Number(searchParams.page) || 1
  const { news, total, totalPages, hasMore } = await getPaginatedNews(currentPage, 9)

  return (
    <div className="flex flex-col w-full">
      <PublicBanner pageName={pageData.pagename} title={pageData.title} subTitle={pageData.subTitle} />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {news.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">No news found</h2>
              <p className="text-muted-foreground mb-8">
                We're working on bringing you the latest updates. Check back soon!
              </p>
              <Button asChild>
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {news.map((item) => (
                  <Card key={item._id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={item.mainImage ? urlFor(item.mainImage).width(400).height(300).url() : "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      {item.categories && item.categories.length > 0 && (
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{item.categories[0]}</Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(item.publishedAt).toLocaleDateString()}
                      </div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{item.overview}</p>
                      <Button variant="ghost" className="p-0 h-auto" asChild>
                        <Link href={`/news/${item.slug.current}`} className="flex items-center text-primary">
                          Read More <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4">
                  <Button
                    variant="outline"
                    disabled={currentPage === 1}
                    asChild={currentPage > 1}
                  >
                    {currentPage > 1 ? (
                      <Link href={`/news?page=${currentPage - 1}`}>
                        <ChevronLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Link>
                    ) : (
                      <>
                        <ChevronLeft className="h-4 w-4 mr-2" />
                        Previous
                      </>
                    )}
                  </Button>
                  
                  <span className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </span>
                  
                  <Button
                    variant="outline"
                    disabled={currentPage === totalPages}
                    asChild={currentPage < totalPages}
                  >
                    {currentPage < totalPages ? (
                      <Link href={`/news?page=${currentPage + 1}`}>
                        Next
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Link>
                    ) : (
                      <>
                        Next
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
