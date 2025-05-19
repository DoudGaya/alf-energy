import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Target, Award, Lightbulb, Globe, BarChart3 } from "lucide-react"
import PublicBanner from "@/components/PublicBanner"
import aboutImage from '@/public/solar farm 1.jpg'

const pageData = {
  title: "About Us",
  subTitle: "Pioneering Sustainable Energy Solutions",
  description:
    " Alfuttaim Energy Limited stands as a pioneering force in the energy sector, distinguished by our unwavering commitment to sustainable practices and innovative solutions.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">

      <PublicBanner pageName={pageData.title} title={pageData.title} subTitle={pageData.subTitle} />
      {/* Hero Section */}
      {/* <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="About Us Background"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="outline">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pioneering Sustainable Energy Solutions</h1>
            <p className="text-lg text-gray-300 mb-8">
              Alfuttaim Energy Limited stands as a pioneering force in the energy sector, distinguished by our
              unwavering commitment to sustainable practices and innovative solutions.
            </p>
          </div>
        </div>
      </section> */}

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Alfuttaim Energy Limited</h2>
              <p className="text-muted-foreground mb-6">
                Since our establishment, we have built a reputation for excellence through our integrated approach to
                energy solutions—combining traditional petroleum expertise with forward-thinking renewable energy
                initiatives. Our success is anchored in our ability to adapt to evolving market demands while
                maintaining the highest standards of operational excellence and customer service.
              </p>

              <h3 className="text-xl font-bold mb-4">Our Organizational Culture</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>
                    <span className="font-medium">Integrity and Transparency:</span> Operating with the highest ethical
                    standards in all business dealings.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>
                    <span className="font-medium">Innovation and Adaptability:</span> Embracing new technologies and
                    methodologies to stay ahead of industry trends.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>
                    <span className="font-medium">Collaborative Excellence:</span> Fostering a work environment that
                    encourages teamwork and professional growth.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>
                    <span className="font-medium">Customer-Centric Approach:</span> Prioritizing client needs and
                    satisfaction in all our operations.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>
                    <span className="font-medium">Safety and Quality:</span> Maintaining rigorous standards in all
                    operational aspects.
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={aboutImage}
                alt="Alfuttaim Energy Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Purpose</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vision & Mission</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guided by our vision and mission, we strive to make a positive impact on the energy landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-10 w-10 text-orange-500 mr-4" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg">
                  To be the leading integrated energy solutions provider in Africa, driving sustainable development
                  through innovative and responsible energy practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lightbulb className="h-10 w-10 text-blue-500 mr-4" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg">
                  To deliver reliable, sustainable, and innovative energy solutions while creating value for our
                  stakeholders, protecting the environment, and contributing to social development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Goals</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Objectives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our strategic objectives guide our operations and future growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-gray-200 dark:border-gray-800">
              <CardContent className="p-6">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Market Leadership</h3>
                <p className="text-muted-foreground">
                  Establish and maintain leadership in key market segments through innovation and excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-800">
              <CardContent className="p-6">
                <Lightbulb className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Continue investing in cutting-edge technologies and solutions to stay ahead of industry trends.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-800">
              <CardContent className="p-6">
                <Globe className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  Advance our commitment to environmental stewardship and sustainable energy practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-800">
              <CardContent className="p-6">
                <BarChart3 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <p className="text-muted-foreground">
                  Expand our presence in strategic markets and diversify our service offerings.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-800">
              <CardContent className="p-6">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Maintain the highest standards in service delivery and operational efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-800">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Contribute to social development and improve the quality of life in the communities we serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced leadership team brings diverse expertise to drive our vision forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=400&width=300" alt="Femi Kumuyi" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">Femi Kumuyi</h3>
                <p className="text-sm text-muted-foreground mb-4">Managing Director</p>
                {/* <p className="text-muted-foreground mb-4">
                  An experienced IT consultant, Femi ensures our digital transformation and technological advancement
                  remain cutting-edge.
                </p> */}
                <div className="flex space-x-4">
                  {/* <Link href="mailto:femi.kumuyi@alfenergyng.com" className="text-primary hover:underline">
                    femi.kumuyi@alfenergyng.com
                  </Link> */}
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Dr. Nabilah Sani Mohammed"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">Dr. Nabilah Sani Mohammed</h3>
                <p className="text-sm text-muted-foreground mb-4">Director, Corporate Services</p>
                {/* <p className="text-muted-foreground mb-4">
                  Brings extensive expertise in sustainable energy and public policy. She leads climate-smart
                  initiatives and is currently pursuing her PhD.
                </p> */}
                {/* <div className="flex space-x-4">
                  <Link href="mailto:nabilah.mohammed@alfenergyng.com" className="text-primary hover:underline">
                    nabilah.mohammed@alfenergyng.com
                  </Link>
                </div> */}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Emeka Nwabudike"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">Emeka Nwabudike</h3>
                <p className="text-sm text-muted-foreground mb-4">Director,  Technical Services</p>
                {/* <p className="text-muted-foreground mb-4">
                  With over three decades of engineering excellence, Emeka brings international experience from Eni
                  S.p.A. His leadership drives our technical operations.
                </p> */}
                <div className="flex space-x-4">
                  {/* <Link href="mailto:emeka.nwabudike@alfenergyng.com" className="text-primary hover:underline">
                    emeka.nwabudike@alfenergyng.com
                  </Link> */}
                </div>
              </CardContent>
            </Card>

           
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Impact</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Portfolio</h2>
              <p className="text-muted-foreground mb-8">
                At Alfuttaim Energy Limited, we have built an impressive portfolio of successful projects and
                initiatives across various energy sectors, demonstrating our capability and commitment to excellence.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">25+</p>
                  <p className="text-muted-foreground">Successful Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">130+</p>
                  <p className="text-muted-foreground">Environmental Impact Assessments</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">1000+</p>
                  <p className="text-muted-foreground">KWp of Solar Capacity</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">11</p>
                  <p className="text-muted-foreground">Communities Served</p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=600" alt="Our Impact" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Creating a Sustainable Future</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Alfuttaim Energy Limited to drive innovation and sustainability in the energy sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
