import { Button } from "@/components/ui/button";

export default function Introduction() {
  return (
    <section className="flex flex-col items-center text-center space-y-6">
      <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
          <img src="/images/profile/me.png" alt="Eric Marcellini" className="w-full h-full object-cover" />
      </div>
      <h1 className="text-4xl font-bold">Eric Marcellini</h1>
      <h2 className="text-xl text-gray-400">Web Developer - 📍Berlin, Germany</h2>
      <p className="text-lg max-w-2xl">
        I design and build functional, user-friendly websites and web applications. 
        My expertise includes React, Next.js, and modern web development tools, 
        with a focus on creating seamless digital experiences.
      </p>
      <Button className="get-in-touch" asChild>
        <a href="#contact">Get in Touch</a>
      </Button>
    </section>
  );
}

