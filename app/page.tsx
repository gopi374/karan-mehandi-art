import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BookingModal from "@/components/booking-modal"
import FeaturedDesignsCarousel from "@/components/featured-designs-carousel"
import HeroSlider from "@/components/hero-slider"
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={`${playfair.className} flex-1 overflow-hidden`}>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="container mx-auto px-4 py-12 sm:py-0">
          <HeroSlider />
          <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4">
              Welcome to Karan Mehndi Art
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-lg mb-8 font-cursive">
              Timeless Henna, Crafted with Love
            </p>
            <BookingModal
              trigger={
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-md transition-transform hover:scale-105"
                >
                  Book Now
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full overflow-hidden bg-background">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">About Karan Mehndi Art</h2>
              <p className="mb-6 text-lg">
                Welcome to the artistic world of Karan Mehndi Art, where tradition meets innovation. With over 10 years
                of experience, Karan has mastered the ancient art of mehendi, creating intricate designs that tell
                stories and capture emotions.
              </p>
              <p className="mb-6">
                Each design is crafted with precision, passion, and natural ingredients, ensuring not just beautiful
                patterns but also a rich, long-lasting color that enhances your special occasions.
              </p>
              <div className="flex space-x-4">
                <Link href="/about">
                  <Button variant="outline" className="group">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <BookingModal />
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/m6.jpeg?height=600&width=800"
                  alt="Karan applying mehendi"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[400px]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-cursive text-xl">Creating memories, one design<br></br> at a time</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">1000+</p>
                <p className="text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Designs Section */}
      <section className="w-full overflow-hidden bg-muted">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="text-center mb-12">
            <h2 className="section-title inline-block">Featured Designs</h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Explore our collection of exquisite mehendi designs, each telling a unique story through intricate
              patterns and artistic expression.
            </p>
          </div>

          <FeaturedDesignsCarousel />

          <div className="text-center mt-10">
            <Link href="/gallery">
              <Button variant="outline" className="group">
                View All Designs
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full overflow-hidden bg-background">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="text-center mb-12">
            <h2 className="section-title inline-block">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto">
              From traditional bridal designs to contemporary patterns, we offer a wide range of mehendi services
              tailored to your preferences and occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bridal Mehndi */}
            <div className="bg-card rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-64">
                <Image src="/m1.webp?height=400&width=600" alt="Bridal Mehndi" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Bridal Mehndi</h3>
                <p className="mb-4">
                  Elaborate, traditional designs for the bride's special day, covering hands and feet with intricate
                  patterns.
                </p>
                <Link href="/services#bridal">
                  <Button variant="link" className="p-0 text-primary group">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Festive Mehndi */}
            <div className="bg-card rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-64">
                <Image src="/m5.webp" alt="Festive Mehndi" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Festive Mehndi</h3>
                <p className="mb-4">
                  Beautiful designs for festivals and celebrations, adding joy and tradition to your special occasions.
                </p>
                <Link href="/services#festive">
                  <Button variant="link" className="p-0 text-primary group">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Custom Designs */}
            <div className="bg-card rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-64">
                <Image src="/m4.jpg?height=400&width=600" alt="Custom Designs" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Custom Designs</h3>
                <p className="mb-4">
                  Personalized mehendi art tailored to your preferences, incorporating elements that tell your unique
                  story.
                </p>
                <Link href="/services#custom">
                  <Button variant="link" className="p-0 text-primary group">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <Button className="btn-primary">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="w-full overflow-hidden bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience with Karan Mehndi Art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/ap.jpeg?height=100&width=100"
                    alt="Client"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-sm opacity-80">Bride</p>
                </div>
              </div>
              <p className="italic">
                "Karan's artistry made my wedding day even more special. The intricate designs were beyond my
                expectations, and the color lasted beautifully throughout my celebrations."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/ps.jpeg?height=100&width=100"
                    alt="Client"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Ananya Patel</h4>
                  <p className="text-sm opacity-80">Festival Celebration</p>
                </div>
              </div>
              <p className="italic">
                "I've been going to Karan for all my mehendi needs for years now. His creativity and attention to detail
                are unmatched. Always a pleasant experience!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/ap2.jpeg?height=100&width=100"
                    alt="Client"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Meera Kapoor</h4>
                  <p className="text-sm opacity-80">Custom Design</p>
                </div>
              </div>
              <p className="italic">
                "The custom design Karan created for me was exactly what I wanted. He listened to my ideas and
                transformed them into a beautiful piece of art on my hands."
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/about#testimonials">
              <Button variant="outline" className="border-white hover:bg-white/10">
                Read More Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full overflow-hidden bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 py-12 sm:py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Mehendi Session?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contact us today to schedule your appointment and experience the artistry of Karan Mehndi Art.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <BookingModal
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Book Now
                </Button>
              }
            />
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
