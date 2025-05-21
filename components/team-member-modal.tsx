"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Linkedin, Twitter, MapPin, Award, BookOpen, Briefcase } from "lucide-react"

// Team member type definition
export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  email: string
//   phone: string
  location: string
  bio: string
  linkedin?: string
  twitter?: string
  education?: {
    degree: string
    institution: string
    year: string
  }[]
  experience?: {
    role: string
    company: string
    period: string
  }[]
  expertise?: string[]
  projects?: {
    name: string
    description: string
  }[]
}

interface TeamMemberModalProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
}

export default function TeamMemberModal({ member, isOpen, onClose }: TeamMemberModalProps) {
  const [activeTab, setActiveTab] = useState("bio")

  if (!member) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-4">
            <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <div>
              <Badge className="mb-2">{member.role}</Badge>
              <DialogTitle className="text-3xl font-bold">{member.name}</DialogTitle>
              <DialogDescription className="text-base mt-2">{member.location}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="bio" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="bio">Biography</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            {/* <TabsTrigger value="projects">Projects</TabsTrigger> */}
          </TabsList>

          <TabsContent value="bio" className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground">{member.bio}</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {member.expertise?.map((skill, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/10">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href={`mailto:${member.email}`} className="hover:underline">
                  {member.email}
                </a>
              </div>
              {/* <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href={`tel:${member.phone}`} className="hover:underline">
                  {member.phone}
                </a>
              </div> */}
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>{member.location}</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {member.linkedin && (
                <Button variant="outline" size="sm" asChild>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              )}
              {member.twitter && (
                <Button variant="outline" size="sm" asChild>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </a>
                </Button>
              )}
            </div>
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="h-6 w-6 mr-2 text-primary" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {member.experience?.map((exp, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 py-2">
                  <h4 className="text-xl font-bold">{exp.role}</h4>
                  <p className="text-muted-foreground">
                    {exp.company} | {exp.period}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {member.education?.map((edu, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 py-2">
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <p className="text-muted-foreground">
                    {edu.institution} | {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* <TabsContent value="projects" className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-primary" />
              Key Projects
            </h3>
            <div className="space-y-6">
              {member.projects?.map((project, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2">{project.name}</h4>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              ))}
            </div>
          </TabsContent> */}
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
