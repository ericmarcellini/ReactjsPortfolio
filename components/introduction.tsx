// filepath: /home/razerianwsl/coding/ReactjsPortfolio/nextjs-portfolio/components/introduction.tsx
import { Button } from "@/components/ui/button";

export default function Introduction() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">Eric Marcellini</h1>
      <h2 className="text-2xl text-gray-300 mb-6">Web Developer</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Web developer with expertise in creating responsive and user-friendly websites. Specialized in React,
        Next.js, and modern web technologies.
      </p>
      <Button asChild>
        <a href="#contact">Get in Touch</a>
      </Button>
    </section>
  );
}

