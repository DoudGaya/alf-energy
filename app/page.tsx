"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import GallerySection from "@/components/gallery-section"
import NewsSection from "@/components/news-section"
import AnimatedCounter from "@/components/animated-counter"
import { ArrowRight, CheckCircle, Zap, Globe, BarChart3, Users, Award, Leaf } from "lucide-react"
import NewsCarousel from "@/components/news-carousel"
import anotherMinigrid from '@/public/home-page-card.jpg'
import petroleum from '@/public/images/farm-3.jpg'
import banner from '@/public/banner.jpg'
import minigrid from '@/public/images/minigrid-ng.jpg'
import colsultation from '@/public/images/consultations.jpg'
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={banner}
            alt="Renewable Energy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>

        <div className="container mx-auto px-4 z-10 pt-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white  mb-6">
              Powering a Sustainable Future Through Innovation
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Alfuttaim Nigeria Limited delivers reliable, sustainable, and innovative energy solutions while creating
              value for our stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <ArrowRight className="h-6 w-6 text-white rotate-90" />
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-primary">Our Impact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Making a Difference</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Through our innovative energy solutions, we're creating measurable impact across communities and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <p className="text-white/80">KWp Capacity</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={10000} suffix="+" />
              </div>
              <p className="text-white/80">Connections Provided</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <p className="text-white/80">Communities Served</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mx-auto mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={50} suffix="%" />
              </div>
              <p className="text-white/80">Carbon Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Energy Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From traditional petroleum operations to cutting-edge renewable energy development, we offer a wide range
              of services to meet your energy needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-800 shadow-md overflow-hidden">
              <Image src={petroleum}  alt="Petroleum Operations" className="object-cover h-[250px] w-full object-center relative overflow-hidden" />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Petroleum Operations
                </h3>
                <p className="text-muted-foreground mb-4">
                  Expert services in petroleum product distribution, refining, processing, and exploration with a focus
                  on efficiency and sustainability.
                </p>
                <Link href="/services" className="inline-flex items-center text-primary font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-800 shadow-md overflow-hidden">
                 <Image src={minigrid}  alt="Petroleum Operations" className="object-cover h-[250px] w-full object-bottom relative overflow-hidden" />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Renewable Energy</h3>
                <p className="text-muted-foreground mb-4">
                  Innovative solutions in solar, wind, and biomass energy development, including energy storage systems
                  and grid integration.
                </p>
                <Link href="/services" className="inline-flex items-center text-primary font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-800 shadow-md overflow-hidden">
              <Image src={colsultation}  alt="Petroleum Operations" className="object-cover h-[250px] w-full object-center relative overflow-hidden" />
             
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Energy Consulting</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic business services, market analysis, risk management, and regulatory compliance guidance for
                  energy sector clients.
                </p>
                <Link href="/services" className="inline-flex items-center text-primary font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Featured Project</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Mini Grid Projects</h2>
              <p className="text-muted-foreground mb-6">
                We're bringing sustainable energy solutions to communities across Nigeria through our solar mini grid
                projects, providing reliable electricity to underserved areas.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>11 communities across multiple local government areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Total capacity of over 10,000 Connections</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Providing clean energy to thousands of residents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Reducing carbon emissions and environmental impact</span>
                </li>
              </ul>

              <Button asChild>
                <Link href="/projects">Explore All Projects</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={anotherMinigrid}
                alt="Solar Mini Grid Project"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News & Activities */}
      <NewsSection />

      <GallerySection />

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with Alfuttaim Nigeria Limited.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help you achieve your energy goals with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className=" text-white bg-transparent hover:bg-white/20" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
