import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import PublicBanner from "@/components/PublicBanner"



const pageData = {
  pageName: 'Contact Us',
  title: 'Get in Touch With Our Team',
  subTitle: `Have questions about our services or want to discuss your energy needs? We're here to help. Reach out to
              us using the contact information below or fill out the form.`
}

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <PublicBanner pageName={pageData.pageName} title={pageData.title} subTitle={pageData.subTitle} />
      {/* <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Contact Us Background"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="outline">
              
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6"></h1>
            <p className="text-lg text-gray-300 mb-8">
              
            </p>
          </div>
        </div>
      </section> */}

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              {/* <Badge className="mb-4">Our Contact Details</Badge> */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Reach Us</h2>
              <p className="text-muted-foreground mb-8">
                Feel free to contact us through any of the following channels. Our team is ready to assist you with any
                inquiries or requests.
              </p>

              <div className="space-y-6">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Our Headquarters</h3>
                        <p className="text-muted-foreground">26, Eric Moore close, Surulere Lagos, Nigeria</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Phone Numbers</h3>
                        <p className="text-muted-foreground mb-1"> +234 803 281 9032</p>
                        <p className="text-muted-foreground mb-1">+44 7880 343239</p>
                        <p className="text-muted-foreground">+44 7775 210381</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email Addresses</h3>
                        <p className="text-muted-foreground mb-1">
                          General Inquiries:{" "}
                          <Link href="mailto:info@alfenergyng.com" className="text-primary hover:underline">
                            info@alfenergyng.com
                          </Link>
                        </p>
                        {/* <p className="text-muted-foreground mb-1">
                          Nabilah Mohammed:{" "}
                          <Link href="mailto:nabilah.mohammed@alfenergyng.com" className="text-primary hover:underline">
                            nabilah.mohammed@alfenergyng.com
                          </Link>
                        </p>
                        <p className="text-muted-foreground mb-1">
                          Emeka Nwabudike:{" "}
                          <Link href="mailto:emeka.nwabudike@alfenergyng.com" className="text-primary hover:underline">
                            emeka.nwabudike@alfenergyng.com
                          </Link>
                        </p>
                        <p className="text-muted-foreground">
                          Femi Kumuyi:{" "}
                          <Link href="mailto:femi.kumuyi@alfenergyng.com" className="text-primary hover:underline">
                            femi.kumuyi@alfenergyng.com
                          </Link>
                        </p> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground mb-1">Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              {/* <Badge className="mb-4">Send Us a Message</Badge> */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below, and our team will get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="petroleum">Petroleum Services</SelectItem>
                      <SelectItem value="renewable">Renewable Energy</SelectItem>
                      <SelectItem value="consulting">Consulting Services</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Please provide details about your inquiry..." rows={5} required />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Location</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us on the Map</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Visit our headquarters in Lagos, Nigeria.</p>
          </div>

          <div className="h-[400px] md:h-[500px] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
            {/* Placeholder for Google Maps iframe */}
            <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <div className="text-center p-4">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Map Loading...</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Our interactive map is loading. If it doesn't appear, please check your internet connection or contact
                  us directly for directions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start a Conversation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Our team is eager to discuss how we can help you achieve your energy goals. Contact us today to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="tel:+2348032819032">
                <Phone className="h-4 w-4 mr-2" />
                Call Us Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="mailto:info@alfenergyng.com">
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
