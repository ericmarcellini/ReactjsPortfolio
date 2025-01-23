import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-md mx-auto"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h2>
      <form className="space-y-4">
        <Input placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </section>
  )
}

