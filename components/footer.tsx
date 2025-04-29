"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowUp } from "lucide-react"

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="relative">
                <span className="text-2xl color-black font-bold">Karan Mehndi Art</span>
                <span className="block text-xs font-cursive">Timeless Henna, Crafted with Love</span>
              </div>
            </Link>
            <p className="text-sm mb-4">
              Bringing the ancient art of mehendi to life with intricate designs and natural ingredients. Creating
              beautiful memories for all your special occasions.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-primary-foreground hover:text-accent transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-primary-foreground hover:text-accent transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                aria-label="Youtube"
                className="text-primary-foreground hover:text-accent transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-primary-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-primary-foreground hover:text-accent transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="text-primary-foreground hover:text-accent transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-primary-foreground hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-primary-foreground hover:text-accent transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#bridal" className="text-primary-foreground hover:text-accent transition-colors">
                  Bridal Mehndi
                </Link>
              </li>
              <li>
                <Link href="/services#festive" className="text-primary-foreground hover:text-accent transition-colors">
                  Festive Mehndi
                </Link>
              </li>
              <li>
                <Link href="/services#arabic" className="text-primary-foreground hover:text-accent transition-colors">
                  Arabic Designs
                </Link>
              </li>
              <li>
                <Link
                  href="/services#indo-arabic"
                  className="text-primary-foreground hover:text-accent transition-colors"
                >
                  Indo-Arabic Fusion
                </Link>
              </li>
              <li>
                <Link href="/services#custom" className="text-primary-foreground hover:text-accent transition-colors">
                  Custom Designs
                </Link>
              </li>
              <li>
                <Link href="/services#group" className="text-primary-foreground hover:text-accent transition-colors">
                  Group Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>+91 81716 28118</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>karanmehandi22@gmail.com</span>
              </li>
              <li>
                <address className="not-italic">
                  123 Kisan Fashion Mall, <br />
                  Secunderabad, <br />
                  Hydrabad, Telangana 500067
                </address>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-primary-foreground/20 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Karan Mehndi Art. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-primary-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-foreground hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className={`fixed bottom-6 right-6 bg-accent text-accent-foreground p-3 rounded-full shadow-lg transition-opacity duration-300 ${showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}

export default Footer

