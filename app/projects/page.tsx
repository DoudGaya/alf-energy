import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectMap from "@/components/project-map"
import PublicBanner from "@/components/PublicBanner"
import research from '@/public/images/research.jpg'
import training from '@/public/images/training 2.jpg'

import digital from '@/public/solar farm 1.jpg'

// Project data from the provided table
const solarProjects = [
  { id: 1, community: "BALLAGAZA", localGovt: "GABASAWA", latitude: 12.2567856, longitude: 8.8829435, capacity: 250 },
  { id: 2, community: "MEKIYA", localGovt: "GABASAWA", latitude: 12.2368686, longitude: 8.8753683, capacity: 220 },
  { id: 3, community: "DAGAR", localGovt: "GABASAWA", latitude: 12.1706211, longitude: 8.850769, capacity: 130 },
  {
    id: 4,
    community: "GOMBORAR FULANI",
    localGovt: "GABASAWA",
    latitude: 12.2462825,
    longitude: 8.8286187,
    capacity: 70,
  },
  { id: 5, community: "YAUTAR AREWA", localGovt: "GABASAWA", latitude: 12.2183395, longitude: 8.7678288, capacity: 70 },
  { id: 6, community: "YUMBU", localGovt: "GABASAWA", latitude: 12.2356985, longitude: 8.781265, capacity: 70 },
  { id: 7, community: "YARANCHI", localGovt: "GABASAWA", latitude: 12.1686878, longitude: 8.7542803, capacity: 70 },
  { id: 8, community: "MARAYA ROGO", localGovt: "WARAWA", latitude: 11.9970556, longitude: 8.6980682, capacity: 80 },
  {
    id: 9,
    community: "GURJIYA",
    localGovt: "MINJIBIR",
    latitude: 12.2238039,
    longitude: 8.7108652,
    capacity: 150,
    batch: 2,
  },
  {
    id: 10,
    community: "SARBI",
    localGovt: "MINJIBIR",
    latitude: 12.2930292,
    longitude: 8.673814,
    capacity: 150,
    batch: 2,
  },
  {
    id: 11,
    community: "KAWO",
    localGovt: "GABASAWA",
    latitude: 12.1542124,
    longitude: 8.8593602,
    capacity: 70,
    batch: 2,
  },
]

// Other project categories for demonstration
const otherProjects = [
  {
    id: 1,
    title: "Energy research",
    description: `Conduct cutting-edge research and develop innovative solutions to drive sustainable energy transitions, optimize systems and support informed decision-making across the energy value chain.
`,
    image: research,
    category: "Research",
  },
  {
    id: 2,
    title: " Training and Capacity building Building",
    description: `Empowering professionals and organizations with the knowledge, skills, and tools needed to excel in both traditional and renewable energy sectors. `,
    image: training,
    category: "Training",
  },
  {
    id: 3,
    title: "Digitalization & Energy Data Analytics",
    description: `Offer digital transformation services for energy companies, utilizing AI, IoT, and machine learning to optimize operations.`,
    image: digital,
    category: "Analytics",
  },
]



const pageData = {
  title: "Transforming Energy Landscapes",
  subTitle: "Explore our diverse portfolio of energy projects.",
  pagename: "/placeholder.svg?height=600&width=1920",
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full">
      <PublicBanner pageName={pageData.pagename} title={pageData.title} subTitle={pageData.subTitle} />
      {/* Hero Section */}
      {/* <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Projects Background"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="outline">
              Our Projects
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transforming Energy Landscapes</h1>
            <p className="text-lg text-gray-300 mb-8">
              Explore our portfolio of innovative energy projects that are making a positive impact on communities and
              the environment.
            </p>
          </div>
        </div>
      </section> */}

      {/* Featured Solar Mini Grid Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Featured</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Mini Grid Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our solar mini grid projects are bringing reliable, clean energy to communities across Nigeria, improving
              lives and supporting sustainable development.
            </p>
          </div>

          <Tabs defaultValue="map" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="map">Map View</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="map" className="mt-0">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-8">
                <div className="h-[600px] relative rounded-lg overflow-hidden">
                  <ProjectMap projects={solarProjects} />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="list" className="mt-0">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="px-4 py-3 text-left">S/N</th>
                      <th className="px-4 py-3 text-left">Community</th>
                      <th className="px-4 py-3 text-left">Local Govt</th>
                      <th className="px-4 py-3 text-left">Latitude</th>
                      <th className="px-4 py-3 text-left">Longitude</th>
                      <th className="px-4 py-3 text-end">Estimated PV Capacity (KWp)</th>
                      {/* <th className="px-4 py-3 text-left">Batch</th> */}
                      {/* <th className="px-4 py-3 text-left">Actions</th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {solarProjects.map((project) => (
                      <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <td className="px-4 py-3">{project.id}</td>
                        <td className="px-4 py-3 font-medium">{project.community}</td>
                        <td className="px-4 py-3">{project.localGovt}</td>
                        <td className="px-4 py-3">{project.latitude}</td>
                        <td className="px-4 py-3">{project.longitude}</td>
                        <td className="px-4 py-3 text-end">{project.capacity}</td>
                        {/* <td className="px-4 py-3">{project.batch || 1}</td> */}
                        <td className="px-4 py-3">
                          {/* <Button variant="outline" size="sm" asChild>
                            <Link href={`/projects/${project.id}`}>View Details</Link>
                          </Button> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Our solar mini grid projects have a total capacity of over 1,000 KWp, providing clean energy to thousands
              of residents across multiple communities.
            </p>
            <Button asChild>
              <Link href="/contact">Inquire About Solar Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Portfolio</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Other Energy Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse portfolio of energy projects across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-0 shadow-md">
                <div className="relative h-[300px]">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover object-bottom" />
                  <div className="absolute top-4 left-4">
                    {/* <Badge>{project.category}</Badge> */}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  {/* <Button variant="outline" asChild>
                    <Link href={`/projects/other/${project.id}`}>View Project</Link>
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our Energy Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Contact us today to discuss how we can help you achieve your energy goals with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
