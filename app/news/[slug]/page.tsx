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
    // Paragraphs with proper spacing and formatting
    normal: ({ children }: any) => (
      <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300 first:mt-0 text-justify">
        {children}
      </p>
    ),
    // Headings with proper hierarchy
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-12 first:mt-0 text-gray-900 dark:text-gray-100 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-bold mb-5 mt-10 text-gray-900 dark:text-gray-100 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg md:text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100 leading-tight">
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-base md:text-lg font-semibold mb-3 mt-4 text-gray-900 dark:text-gray-100">
        {children}
      </h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-base font-semibold mb-2 mt-4 text-gray-900 dark:text-gray-100">
        {children}
      </h6>
    ),
    // Blockquotes with enhanced styling
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary bg-gray-50 dark:bg-gray-800 pl-6 pr-4 py-4 my-8 italic text-lg text-gray-700 dark:text-gray-300 rounded-r-md relative">
        <div className="absolute -left-2 -top-2 text-6xl text-primary/20 font-serif leading-none">"</div>
        {children}
      </blockquote>
    ),
  },
  list: {
    // Bulleted lists
    bullet: ({ children }: any) => (
      <ul className="mb-6 ml-6 space-y-3 list-disc marker:text-primary">
        {children}
      </ul>
    ),
    // Numbered lists
    number: ({ children }: any) => (
      <ol className="mb-6 ml-6 space-y-3 list-decimal marker:text-primary">
        {children}
      </ol>
    ),
  },
  listItem: {
    // List items with proper spacing
    bullet: ({ children }: any) => (
      <li className="text-base leading-relaxed text-gray-700 dark:text-gray-300 pl-2">
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li className="text-base leading-relaxed text-gray-700 dark:text-gray-300 pl-2">
        {children}
      </li>
    ),
  },
  marks: {
    // Strong/bold text
    strong: ({ children }: any) => (
      <strong className="font-semibold text-gray-900 dark:text-gray-100">
        {children}
      </strong>
    ),
    // Emphasis/italic text
    em: ({ children }: any) => (
      <em className="italic text-gray-700 dark:text-gray-300">
        {children}
      </em>
    ),
    // Code formatting
    code: ({ children }: any) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-primary">
        {children}
      </code>
    ),
    // Links with enhanced styling
    link: ({ children, value }: any) => (
      <a 
        href={value.href} 
        className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary/60 underline-offset-2 transition-colors duration-200" 
        target="_blank" 
        rel="noopener noreferrer"
      >
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
            <div className="news-content prose prose-lg prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-7 prose-li:text-gray-700 dark:prose-li:text-gray-300">
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
