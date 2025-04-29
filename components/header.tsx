"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter, MapPin,Youtube , User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ModeToggle } from "./mode-toggle"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`w-full transition-all duration-300 ${isScrolled ? "sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-md" : ""}`}
    >
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span className="text-sm">+91 81716 28118</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span className="text-sm">karanmehandi22@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
                href="https://youtube.com"
                aria-label="Youtube"
                className="text-primary-foreground hover:text-accent transition-colors"
              >
                <Youtube size={18} />
              </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative">
              <span className="text-2xl font-bold text-primary">Karan Mehndi Art</span>
              <span className="block text-xs font-cursive text-secondary">Timeless Henna, Crafted with Love</span>
            </div>
          </Link>

          {/* Theme toggle and menu section */}
          <div className="flex items-center gap-4">
            <ModeToggle />
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/why-us" className="text-foreground hover:text-primary transition-colors">
                Why Us
              </Link>
              <Link href="/gallery" className="text-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link href="/videos" className="text-foreground hover:text-primary transition-colors">
                Videos
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </nav>

            {/* Right Side Elements */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center text-sm">
                <MapPin size={16} className="text-primary mr-1" />
                <span>Hydrabad, India</span>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>Account</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link href="/login" className="w-full">
                      Login
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/signup" className="w-full">
                      Sign Up
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/bookings" className="w-full">
                      My Bookings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 bg-background z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="container p-4">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-xl font-bold text-primary">
              Karan Mehndi Art
              <p className="text-xl md:text-2xl dark-golden font-cursive">
                Timeless Henna, Crafted with Love
              </p>
            </Link>
            
            <div className="flex items-center gap-4">
              <ModeToggle />
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                aria-label="Close menu" 
                className="text-foreground"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-lg py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/services"
              className="text-lg py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-lg py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/why-us"
              className="text-lg py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="/gallery"
              className="text-lg py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/videos"
              className="text-lg py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Videos
            </Link>
            <Link
              href="/contact"
              className="text-lg py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>

          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin size={18} className="text-primary" />
              <span>Hydrabad, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={18} className="text-primary" />
              <span>+91 81716 28118</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} className="text-primary" />
              <span>karanmehandi22@gmail.com</span>
            </div>

            <div className="flex flex-col space-y-2 mt-4">
              <Link
                href="/login"
                className="btn-primary w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="btn-outline w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
;