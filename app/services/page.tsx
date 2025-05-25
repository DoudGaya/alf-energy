import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Zap, Globe, Shield, BarChart3, Lightbulb, Droplet, Wind, Factory } from "lucide-react"
import PublicBanner from "@/components/PublicBanner"
import minigrid from '@/public/images/minigrid-ng.jpg'
import colsultation from '@/public/images/consultations.jpg'
import petroleum from '@/public/images/farm-3.jpg'



const pageData = {
  title: "Services",
  subTitle: "Comprehensive Energy Solutions",
  description:
    "  From traditional petroleum operations to cutting-edge renewable energy development, we offer a wide range of services to meet your energy needs.",
}


export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">

      <PublicBanner pageName={pageData.title} title={pageData.title} subTitle={pageData.subTitle} />

      {/* Services Overview */}
      <section className="py-16 md:py-24">
          <div className="text-center mb-6">
            {/* <Badge className="mb-4">Core Services</Badge> */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of energy services designed to meet diverse client needs.
            </p>
          </div>

        <div className="container mx-auto px-4">
        
          <Tabs defaultValue="petroleum" className="w-full pb-14">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="h-auto p-1">
                <TabsTrigger value="petroleum" className="py-2 px-4">
                  Petroleum Operations
                </TabsTrigger>
                <TabsTrigger value="renewable" className="py-2 px-4">
                  Renewable Energy
                </TabsTrigger>
                <TabsTrigger value="consulting" className="py-2 px-4">
                  Consulting Services
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="petroleum" className="mb-10">

           <div className=" flex flex-col py-10 items-center">
            {/* <div className=" flex flex-col max-w-2xl text-center items-center">
               <h3 className="text-2xl font-bold mb-4">Petroleum Operations</h3>
              <p className="text-muted-foreground mb-6">
                Our petroleum operations services cover the entire value chain, from exploration to distribution,
                with a focus on efficiency, safety, and environmental responsibility.
              </p>
            </div> */}

             <div className=" flex flex-col justify-center items-center">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[420px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={petroleum}
                    alt="Petroleum Operations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <Droplet className="h-5 w-5 text-primary mr-2" />
                        Petroleum Product Distribution
                      </h4>
                      <p className="text-muted-foreground ml-7">
                        Efficient and reliable distribution networks ensuring timely delivery of petroleum products to
                        various markets.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <Factory className="h-5 w-5 text-primary mr-2" />
                        Refining and Processing
                      </h4>
                      <p className="text-muted-foreground ml-7">
                        Process optimization, quality enhancement, efficiency improvement, and technology integration
                        for refining operations.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <Globe className="h-5 w-5 text-primary mr-2" />
                        Oil and Gas Exploration
                      </h4>
                      <p className="text-muted-foreground ml-7">
                        Advanced geological surveys, resource assessment, exploration technology implementation, and
                        project feasibility studies.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <Shield className="h-5 w-5 text-primary mr-2" />
                        Environmental Impact and Sustainability
                      </h4>
                      <p className="text-muted-foreground ml-7">
                        Comprehensive environmental impact assessments, carbon footprint reduction strategies, and
                        sustainable practice implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
               <div className="mt-8 flex flex-col  items-center justify-center">
                    <Button asChild>
                      <Link href="/contact">Inquire About Petroleum Services</Link>
                    </Button>
                  </div>
             </div>
           </div>
            </TabsContent>

            <TabsContent value="renewable" className="mt-0">
             <div className=" flex flex-col items-center justify-center">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  {/* <h3 className="text-2xl font-bold mb-4">Renewable Energy Solutions</h3>
                  <p className="text-muted-foreground mb-6">
                    Our renewable energy services focus on developing sustainable, clean energy solutions that reduce
                    environmental impact while meeting growing energy demands.
                  </p> */}

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <Zap className="h-5 w-5 text-primary mr-2" />
                        Solar Energy Development
                      </h4>
                      <p className="text-muted-foreground ml-7">
                        Design, installation, and maintenance of solar power systems, from residential installations to
                        utility-scale solar farms.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <Wind className="h-5 w-5 text-primary mr-2" />
                        Wind Energy Solutions
                      </h4>
                      <p className="text-muted-foreground ml-7">
                        Assessment, development, and implementation of wind energy projects, including site selection
                        and turbine installation.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <Lightbulb className="h-5 w-5 text-primary mr-2" />
                        Energy Storage Systems
                      </h4>
                      <p className="text-muted-foreground ml-7">
                        Implementation of advanced energy storage solutions to enhance grid stability and maximize
                        renewable energy utilization.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <Globe className="h-5 w-5 text-primary mr-2" />
                        Grid Integration Services
                      </h4>
                      <p className="text-muted-foreground ml-7">
                        Technical solutions for integrating renewable energy sources into existing power grids, ensuring
                        reliability and efficiency.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative h-[420px] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
                  <Image
                    src={minigrid}
                    alt="Renewable Energy Solutions"
                    fill
                    className="object-cover object-bottom"
                  />
                </div>
              </div>
              <div className="mt-8 flex flex-col  items-center justify-center">
                    <Button asChild>
                      <Link href="/contact">Inquire About Renewable Energy Services</Link>
                    </Button>
                  </div>
             </div>
            </TabsContent>

            <TabsContent value="consulting" className="mt-0">
             <div className=" flex flex-col items-center justify-center">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[420px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={colsultation}
                    alt="Consulting Services"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  {/* <h3 className="text-2xl font-bold mb-4">Energy Consulting Services</h3>
                  <p className="text-muted-foreground mb-6">
                    Our consulting services provide expert guidance and strategic solutions to help clients navigate the
                    complex energy landscape and achieve their objectives.
                  </p> */}

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <Shield className="h-5 w-5 text-primary mr-2" />
                        Environmental and Sustainability Consulting
                      </h4>
                      <p className="text-muted-foreground ml-7">
                        Guidance on environmental compliance, sustainability strategies, and carbon footprint reduction
                        initiatives.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <BarChart3 className="h-5 w-5 text-primary mr-2" />
                        Energy Trading and Risk Management
                      </h4>
                      <p className="text-muted-foreground ml-7">
                        Market analysis, trading strategies, risk assessment, portfolio optimization, and compliance
                        monitoring.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <Lightbulb className="h-5 w-5 text-primary mr-2" />
                        Strategic Business Services
                      </h4>
                      <p className="text-muted-foreground ml-7">
                        Strategic planning, operational efficiency optimization, market entry strategies, and technology
                        integration consulting.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <Globe className="h-5 w-5 text-primary mr-2" />
                        Regulatory Compliance Guidance
                      </h4>
                      <p className="text-muted-foreground ml-7">
                        Expert advice on navigating complex regulatory environments and ensuring compliance with
                        industry standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
               <div className="mt-8 flex flex-col  items-center justify-center">
                    <Button asChild>
                      <Link href="/contact">Inquire About Consulting Services</Link>
                    </Button>
                  </div>
             </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Service Benefits */}
      <section style={{
        backgroundImage: `url('/images/hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Competitive Advantage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets Alfuttaim Nigeria Limited apart from other energy service providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrated Service Offerings</h3>
                <p className="text-muted-foreground">
                  We provide comprehensive solutions across the energy spectrum, from traditional petroleum operations
                  to cutting-edge renewable technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Technical Expertise and Innovation</h3>
                <p className="text-muted-foreground">
                  Our team of experienced professionals brings deep industry knowledge and innovative approaches to
                  every project.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Strong Industry Relationships</h3>
                <p className="text-muted-foreground">
                  We have established strong partnerships with key industry players, enabling us to deliver exceptional
                  value to our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Our portfolio of successful projects demonstrates our capability to deliver results that meet and
                  exceed client expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Global Market Understanding</h3>
                <p className="text-muted-foreground">
                  Our international experience and market insights enable us to navigate complex global energy
                  landscapes effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Commitment to Sustainability</h3>
                <p className="text-muted-foreground">
                  We prioritize environmental responsibility and sustainable practices in all our operations and
                  services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Sectors */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Who We Serve</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Focus and Strategic Positioning</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have strategically positioned ourselves as a comprehensive energy solutions provider, serving diverse
              sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Oil and Gas Industry</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Exploration and production companies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Refining and processing facilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Distribution and retail operations</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Industrial Sector</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Manufacturing facilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Process industries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Heavy machinery operations</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Government Entities</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Federal energy agencies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>State and local governments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Public utilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Commercial Sector</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Office buildings and complexes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Retail establishments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Hospitality industry</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Renewable Energy Developers</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Solar project developers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Wind energy companies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Alternative energy startups</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Residential Communities</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Rural and underserved areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Housing developments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Community energy initiatives</span> 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Energy Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our comprehensive energy solutions can meet your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/contact">Request a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className=" text-white bg-transparent hover:bg-white/20" asChild>
              <Link href="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
