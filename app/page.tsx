"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BookOpen,
  Users,
  Briefcase,
  Heart,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react"

export default function HopeForAll() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    amount: "",
    name: "",
    email: "",
    type: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Thank you for your support! This is a demo form.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary fill-primary" />
              <span className="text-xl font-bold text-foreground font-serif">Hope for All</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#work" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Our Work
              </a>
              <a href="#donate" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Get Involved
              </a>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#donate">Donate Now</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <a
                  href="#about"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#work"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Work
                </a>
                <a
                  href="#donate"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Involved
                </a>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                  <a href="#donate" onClick={() => setIsMenuOpen(false)}>
                    Donate Now
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[url('/community-children-education-empowerment.jpg')] bg-cover bg-center opacity-5" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight font-serif">
              Hope for All
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 text-balance">
              Empowering Lives Through Education and Support
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto transition-transform hover:scale-105"
            >
              <a href="#donate">Donate Now</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance font-serif">About Us</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Hope for All is dedicated to creating lasting change in communities through education and empowerment.
                We believe every child deserves access to quality education and every woman deserves the opportunity to
                reach her full potential.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since our founding, we've impacted thousands of lives by providing educational resources, skill training
                programs, and community support initiatives that break the cycle of poverty and create pathways to
                success.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/diverse-community-children-learning-together.jpg"
                alt="Community members working together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance font-serif">Our Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              We focus on three key areas to create sustainable impact in communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Child Education Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Child Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Providing quality education, school supplies, and learning resources to children in underserved
                  communities. We believe education is the foundation for breaking the cycle of poverty.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Women Empowerment Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Women Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Supporting women through leadership programs, entrepreneurship training, and community initiatives
                  that foster independence and economic stability.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Skill Training Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/80 transition-colors">
                  <Briefcase className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Skill Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Offering vocational training and professional development programs that equip individuals with
                  marketable skills for sustainable employment and income generation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="donate" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
              Get Involved
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Your support can change lives. Join us in making a difference today.
            </p>
          </div>

          <Card className="shadow-2xl border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Donation Form</CardTitle>
              <CardDescription>
                Every contribution helps us continue our mission of empowerment through education
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Donation Amount ($)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="100"
                    value={formData.amount}
                    onChange={(e) => handleInputChange("amount", e.target.value)}
                    required
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">I want to</Label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)} required>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="donate">Make a Donation</SelectItem>
                      <SelectItem value="volunteer">Volunteer</SelectItem>
                      <SelectItem value="both">Both Donate and Volunteer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 transition-transform hover:scale-105"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Our Focus */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Focus</h3>
              <ul className="space-y-2 text-secondary-foreground/90">
                <li>Child Education</li>
                <li>Women Empowerment</li>
                <li>Skill Training</li>
                <li>Community Development</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3 text-secondary-foreground/90">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:info@hopeforall.org" className="hover:text-secondary-foreground transition-colors">
                    info@hopeforall.org
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+1234567890" className="hover:text-secondary-foreground transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/80">
            <p>
              &copy; {new Date().getFullYear()} Hope for All. All rights reserved. Empowering lives through education
              and support.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
