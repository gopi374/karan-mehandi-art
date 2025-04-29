"use client"

import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export default function BookingModal({ trigger }: { trigger?: React.ReactNode }) {
  const [state, handleSubmit] = useForm("myzedgpj")
  const [isOpen, setIsOpen] = useState(false)

  if (state.succeeded) {
    setTimeout(() => {
      setIsOpen(false)
    }, 3000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="lg">
            Book Now
          </Button>
        )}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px] w-full px-4 py-6 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-bold">Book an Appointment</DialogTitle>
        </DialogHeader>
        
        {/* Show success message after submission */}
        {state.succeeded ? (
          <div className="p-4 bg-green-100 text-green-800 rounded-lg flex items-start">
            <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
            <p>Thank you for your booking request! We will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" action="https://formspree.io/f/myzedgpj" method="POST">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" required className="w-full" />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" required className="w-full" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" required className="w-full" />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input 
                id="date" 
                name="date" 
                type="date" 
                required 
                min={new Date().toISOString().split('T')[0]}
                className="w-full"
              />
              <ValidationError prefix="Date" field="date" errors={state.errors} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service Type</Label>
              <select
                id="service"
                name="service"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                required
              >
                <option value="">Select a service</option>
                <option value="bridal">Bridal Mehendi</option>
                <option value="party">Party Mehendi</option>
                <option value="festival">Festival Mehendi</option>
                <option value="custom">Custom Design</option>
              </select>
              <ValidationError prefix="Service" field="service" errors={state.errors} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Notes</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your requirements..."
                className="min-h-[100px] w-full"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
              disabled={state.submitting}
            >
              {state.submitting ? "Submitting..." : "Submit Booking Request"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
