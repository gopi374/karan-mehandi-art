"use client"

import React from 'react'
import Link from 'next/link'
import { Menubar, MenubarMenu, MenubarTrigger, MobileMenuToggle } from './ui/menubar'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Videos', href: '/videos' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <div className="relative w-full">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto w-full max-w-screen-xl px-4">
          <div className="relative flex h-16 items-center justify-between">
            {/* Logo area */}
            <div className="flex flex-1 items-center">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-semibold">Karan Mehndi Art</span>
              </Link>
            </div>

            {/* Desktop menu */}
            <nav className="hidden lg:flex lg:flex-1 lg:justify-center">
              <Menubar className="border-none">
                {menuItems.map((item) => (
                  <MenubarMenu key={item.href}>
                    <Link href={item.href} passHref legacyBehavior>
                      <MenubarTrigger>
                        {item.label}
                      </MenubarTrigger>
                    </Link>
                  </MenubarMenu>
                ))}
              </Menubar>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden">
              <MobileMenuToggle 
                isOpen={isMobileMenuOpen}
                onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-background/95 backdrop-blur"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-30 h-[calc(100vh-4rem)] overflow-y-auto border-t bg-background/95 backdrop-blur lg:hidden">
          <nav className="mx-auto w-full max-w-screen-xl divide-y divide-gray-200">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block w-full px-4 py-3 text-base font-medium hover:bg-accent/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

export default Navigation
