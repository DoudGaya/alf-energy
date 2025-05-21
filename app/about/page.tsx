"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Target, Award, Lightbulb, Globe, BarChart3 } from "lucide-react"
import PublicBanner from "@/components/PublicBanner"
import nabilah from '@/public/nabilah.png'
import femi from '@/public/femi.png'
import workers from '@/public/images/workerspng.png'
import tunnels from '@/public/images/energy.jpg'
import emeka from '@/public/techguy.png'
import aboutImage from '@/public/solar farm 1.jpg'
import TeamMemberModal, { type TeamMember } from "@/components/team-member-modal"

// Team member data
const teamMembers = [
  {
    id: "femi",
    name: "Femi Kumuyi",
    role: "Managing Director",
    image: femi.src,
    email: '',
    // phone: "",
    location: "",
    linkedin: "#",
    bio: "Femi is a seasoned IT consultant with over 20 years of global industry experience. A graduate of the University of Greenwich, he has led and contributed to a wide range of high-impact IT projects across multiple continents. His core expertise lies in technology strategy, systems architecture, and digital transformation, where he consistently delivers innovative solutions to complex business challenges. Femi has a strong track record in project management, software development, and IT consultancy, partnering with diverse organisations to optimise operations and accelerate growth. Deeply passionate about emerging technologies, he is committed to continuous professional development and actively mentors the next generation of tech professionals.",
    education: [
      { degree: "BSc, Information Technology", institution: "University of Greenwich", year: "" }
    ],
    experience: [
      { role: "IT Consultant", company: "Various global firms", period: "20+ years" }
    ],
    expertise: [
      "Technology Strategy",
      "Systems Architecture",
      "Digital Transformation",
      "Project Management",
      "Software Development",
      "IT Consultancy"
    ],
  },
  {
    id: "nabilah-sani-mohammed",
    name: "Dr. Nabilah Sani Mohammed",
    role: "Director, Corporate Services",
    image: nabilah.src,
    email: "nabilah.sani@cosmopolitanuni.edu.ng",
    // phone: "",
    location: "Abuja, Nigeria",
    linkedin: "http://linkedin.com/in/nabilah-sani-mohammed-41b665145",
    bio: "Dr. Nabilah Sani Mohammed is a distinguished public policy expert, researcher, and communicator. Her doctoral research focused on renewable energy policy, specifically biomass electricity generation in Nigeria. She is passionate about inclusive, evidence-based policymaking and is currently the Head of Communications and Engagements at the Center for Climate-Smart Agriculture, Cosmopolitan University, Abuja. She also serves as Co-Founder and Director of Corporate Services at Alfuttaim Nigeria Limited. A regular contributor to Daily Trust, her writing covers governance, energy policy, and climate change.",
    education: [
      { degree: "PhD, Public Policy", institution: "Institute of Policy Studies, Universiti Brunei Darussalam", year: "" },
      { degree: "Master of Laws", institution: "The Pennsylvania State University", year: "" },
      { degree: "Bachelor of Laws", institution: "Baze University", year: "" },
      { degree: "Executive Education, Justice", institution: "Harvard University", year: "" },
      { degree: "Executive Education, Public Policy for Social Change", institution: "University of Michigan", year: "" },
    ],
    experience: [
      { role: "Head of Communications and Engagements", company: "Center for Climate-Smart Agriculture, Cosmopolitan University", period: "Present" },
      { role: "Director, Corporate Services", company: "Alfuttaim Nigeria Limited", period: "Present" },
    ],
    expertise: [
      "Public Policy Analysis",
      "Renewable Energy Policy",
      "Strategic Communications",
      "Stakeholder Engagement",
      "Governance & Development",
      "Climate Change Advocacy"
    ],
  },
  {
    id: "emeka-nwabudike",
    name: "Engr. Emeka Nwabudike",
    role: "Director, Technical Services",
    image: emeka.src,
    email: "",
    // phone: "",
    location: "United Kingdom",
    linkedin: "#",
    bio: "Emeka Nwabudike is an engineer with over 30 years of experience in the Oil & Gas and renewable energy industry. Formerly with Eni S.p.A in Milan, he led asset integrity projects globally and co-developed an acoustic leak detection technology. Currently the Managing Partner at Precision Engineering and Procurement Ltd in the UK, he has also overseen over 150 mini grid installations in Nigeria. Emeka is a dedicated member of IEEE and contributes to global industry dialogue.",
    education: [
      { degree: "MSc, Project Management (Oil and Gas)", institution: "University of Liverpool", year: "" },
      { degree: "BSc, Electronics", institution: "University of Lagos", year: "" },
    ],
    experience: [
      { role: "Managing Partner", company: "Precision Engineering and Procurement Ltd", period: "2021 - Present" },
      { role: "Asset Integrity Engineer", company: "Eni S.p.A", period: "2013 - 2021" },
    ],
    expertise: [
      "Asset Integrity Management",
      "Oil and Gas Engineering",
      "Renewable Energy Systems",
      "Pipeline Technology",
      "Project Management",
      "Energy Infrastructure Development"
    ],
  }
];

// const teamMembers: TeamMember[] = [
//   {
//     id: "femi-kumuyi",
//     name: "Femi Kumuyi",
//     role: "Managing Director",
//     image: femi.src,
//     email: "femi.kumuyi@alfenergyng.com",
//     phone: "+44 7775 210381",
//     location: "London, UK",
//     linkedin: "#",
//     // twitter: "#",
//     bio: "An experienced IT consultant with a focus on digital transformation in the energy sector, Femi ensures our technological infrastructure and digital initiatives remain cutting-edge. His expertise in data analytics and system integration has revolutionized our operational efficiency.",
//     education: [
//       { degree: "Master of Science, Computer Science", institution: "University College London", year: "2005" },
//       { degree: "Bachelor of Science, Information Systems", institution: "University of Manchester", year: "2001" },
//       {
//         degree: "Professional Certification, Project Management",
//         institution: "Project Management Institute",
//         year: "2008",
//       },
//     ],
//     experience: [
//       { role: "IT Director", company: "Alfuttaim Nig. Limited", period: "2017 - Present" },
//       { role: "Senior IT Consultant", company: "Deloitte Digital", period: "2010 - 2017" },
//       { role: "Systems Analyst", company: "BP plc", period: "2005 - 2010" },
//     ],
//     expertise: [
//       "Digital Transformation",
//       "IT Strategy Development",
//       "Data Analytics",
//       "System Integration",
//       "Cybersecurity",
//       "Cloud Computing",
//     ],
//     projects: [
//       {
//         name: "Enterprise Resource Planning Implementation",
//         description: "Led the implementation of a comprehensive ERP system across all company operations.",
//       },
//       {
//         name: "IoT Monitoring System for Energy Assets",
//         description: "Developed and deployed IoT-based monitoring systems for remote energy assets.",
//       },
//       {
//         name: "Data Analytics Platform",
//         description: "Created a data analytics platform for optimizing energy production and distribution.",
//       },
//     ],
//   },
//   {
//     id: "nabilah-mohammed",
//     name: "Dr. Nabilah Mohammed",
//     role: "Director, Corporate Services",
//     image: nabilah.src,
//     email: "nabilah.mohammed@alfenergyng.com",
//     phone: "+234 803 281 9032",
//     location: "Lagos, Nigeria",
//     linkedin: "#",
//     // twitter: "#",
//     bio: "Nabilah Mohammed brings extensive expertise in sustainable energy and public policy to her role as Sustainability Director at Alfuttaim Energy Limited. With over 15 years of experience in the energy sector, she has been instrumental in developing and implementing the company's sustainability strategy.",
//     education: [
//       { degree: "PhD Candidate, Energy Policy", institution: "University of Lagos", year: "Current" },
//       { degree: "Master of Science, Environmental Engineering", institution: "Imperial College London", year: "2010" },
//       { degree: "Bachelor of Engineering, Chemical Engineering", institution: "University of Ibadan", year: "2006" },
//     ],
//     experience: [
//       { role: "Sustainability Director", company: "Alfuttaim Energy Limited", period: "2018 - Present" },
//       { role: "Environmental Consultant", company: "Global Energy Solutions", period: "2012 - 2018" },
//       { role: "Research Associate", company: "Nigerian Institute of Energy Research", period: "2010 - 2012" },
//     ],
//     expertise: [
//       "Sustainability Strategy Development",
//       "Environmental Impact Assessment",
//       "Renewable Energy Policy",
//       "Carbon Footprint Reduction",
//       "Stakeholder Engagement",
//       "Climate Change Mitigation",
//     ],
//     projects: [
//       {
//         name: "Solar Mini Grid Implementation",
//         description: "Led the sustainability aspects of our solar mini grid projects across multiple communities.",
//       },
//       {
//         name: "Corporate Carbon Neutrality Initiative",
//         description: "Spearheaded the company's efforts to achieve carbon neutrality by 2030.",
//       },
//       {
//         name: "Community Energy Education Program",
//         description:
//           "Developed and implemented educational programs on sustainable energy practices for local communities.",
//       },
//     ],
//   },
//   {
//     id: "emeka-nwabudike",
//     name: "Emeka Nwabudike",
//     role: "Director,  Technical Services",
//     image: emeka.src,
//     email: "emeka.nwabudike@alfenergyng.com",
//     phone: "+44 7880 343239",
//     location: "London, UK / Lagos, Nigeria",
//     linkedin: "#",
//     // twitter: "#",
//     bio: "With over three decades of engineering excellence, Emeka brings international experience from Eni S.p.A and other major energy companies. His technical leadership has been crucial in implementing innovative technologies and ensuring operational excellence across all our projects.",
//     education: [
//       { degree: "PhD, Petroleum Engineering", institution: "University of Texas at Austin", year: "1995" },
//       { degree: "Master of Engineering, Energy Systems", institution: "Imperial College London", year: "1990" },
//       {
//         degree: "Bachelor of Science, Mechanical Engineering",
//         institution: "University of Nigeria, Nsukka",
//         year: "1986",
//       },
//     ],
//     experience: [
//       { role: "Chief Technical Officer", company: "Alfuttaim Energy Limited", period: "2015 - Present" },
//       { role: "Technical Director", company: "Eni S.p.A", period: "2005 - 2015" },
//       { role: "Senior Engineer", company: "Shell Petroleum", period: "1995 - 2005" },
//     ],
//     expertise: [
//       "Petroleum Engineering",
//       "Energy Systems Design",
//       "Project Management",
//       "Technical Due Diligence",
//       "Renewable Energy Integration",
//       "Process Optimization",
//     ],
//     // projects: [
//     //   {
//     //     name: "Offshore Oil Platform Modernization",
//     //     description: "Led the technical aspects of modernizing legacy oil platforms with state-of-the-art technology.",
//     //   },
//     //   {
//     //     name: "Hybrid Energy Systems Development",
//     //     description: "Pioneered the development of hybrid energy systems combining traditional and renewable sources.",
//     //   },
//     //   {
//     //     name: "Technical Standards Implementation",
//     //     description: "Established comprehensive technical standards across all company operations.",
//     //   },
//     // ],
//   },
  
// ]

const pageData = {
  title: "About Us",
  subTitle: "Pioneering Sustainable Energy Solutions",
  description:
    " Alfuttaim Energy Limited stands as a pioneering force in the energy sector, distinguished by our unwavering commitment to sustainable practices and innovative solutions.",
}

export default function AboutPage() {

    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openMemberModal = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const closeMemberModal = () => {
    setIsModalOpen(false)
  }


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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Alfuttaim Nig. Limited</h2>
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
              <CardContent className="p-6 text-center">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Market Leadership</h3>
                <p className="text-muted-foreground">
                  Establish and maintain leadership in key market segments through innovation and excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-800">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Continue investing in cutting-edge technologies and solutions to stay ahead of industry trends.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-800">
              <CardContent className="p-6 text-center">
                <Globe className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  Advance our commitment to environmental stewardship and sustainable energy practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-800">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <p className="text-muted-foreground">
                  Expand our presence in strategic markets and diversify our service offerings.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-800">
              <CardContent className="p-6 text-center">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Maintain the highest standards in service delivery and operational efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-800">
              <CardContent className="p-6 text-center">
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

          <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-8">
           
           {
            teamMembers.map((member) =>  {
              return (
                  <div
                   onClick={() => openMemberModal(member)}
                  key={member.id} className="border-0 dark:bg-black py-6 rounded-lg flex items-center justify-center flex-col shadow-lg overflow-hidden">
              <div className="relative w-[250px] h-[250px] md:h-[350px] md:w-[350px] rounded-full">
                <Image src={member.image} alt={member.name} fill className="object-contain border-4 border-primary/30 object-bottom rounded-full h-full w-full overflow-hidden" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
              </CardContent>
            </div>
              )
            })
            }
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
              <Image src={workers} alt="Our Impact" fill className="object-cover" />
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
            <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Team Member Modal */}
      <TeamMemberModal member={selectedMember} isOpen={isModalOpen} onClose={closeMemberModal} />
    </div>
  )
}
