import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { getNewsBySlug, getAllNews, urlFor } from "@/lib/sanity"
import ShareButtons from "@/components/share-buttons"

interface NewsPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const news = await getNewsBySlug(params.slug)
  
  if (!news) {
    return {
      title: "News Not Found - Alfuttaim Energy",
    }
  }

  const imageUrl = news.mainImage ? urlFor(news.mainImage).width(1200).height(630).url() : "/public-banner.jpg"

  return {
    title: `${news.title} - Alfuttaim Energy`,
    description: news.overview,
    openGraph: {
      title: `${news.title} - Alfuttaim Energy`,
      description: news.overview,
      type: "article",
      publishedTime: news.publishedAt,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${news.title} - Alfuttaim Energy`,
      description: news.overview,
      images: [imageUrl],
    },
  }
}

export async function generateStaticParams() {
  const news = await getAllNews()
  return news.map((item: any) => ({
    slug: item.slug.current,
  }))
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlFor(value).width(800).height(600).url()}
          alt={value.alt || ""}
          width={800}
          height={600}
          className="rounded-lg w-full h-auto"
        />
        {value.alt && (
          <p className="text-sm text-muted-foreground text-center mt-2">{value.alt}</p>
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold my-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold my-5">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold my-4">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-bold my-3">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-lg">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const news = await getNewsBySlug(params.slug)

  if (!news) {
    notFound()
  }

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://alfeneryng.com'}/news/${params.slug}`

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-8 md:py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="mb-6" asChild>
            <Link href="/news">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Link>
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              {news.categories && news.categories.map((category: string) => (
                <Badge key={category} variant="secondary">{category}</Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{news.title}</h1>
            
            <div className="flex items-center text-muted-foreground mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(news.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">{news.overview}</p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {news.mainImage && (
        <section className="relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={urlFor(news.mainImage).width(1200).height(600).url()}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {news.body && <PortableText value={news.body} components={portableTextComponents} />}
            </div>

            <Separator className="my-12" />

            {/* Share Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Share this article</h3>
                <p className="text-muted-foreground">Help others discover this content</p>
              </div>
              <ShareButtons 
                url={shareUrl}
                title={news.title}
                description={news.overview}
              />
            </div>

            <Separator className="my-12" />

            {/* Back to News */}
            <div className="text-center">
              <Button asChild>
                <Link href="/news">View All News</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
