import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    link: "#",
    live: "#",
    // image: "/path-to-your-image.jpg" 
  },
  {
    title: "Task Management App",
    description: "A responsive task management application with real-time updates and collaborative features.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    link: "#",
    live: "#",
    // image: "/path-to-your-image.jpg"
  },
  {
    title: "Pokedex",
    description: "Pokedex app that displays information about different Pokemon species. Uses the PokeAPI. Now transforming this project into Typescript, Next.js and TailwindCSS.",
    technologies: ["Javascript", "CSS", "HTML"],
    link: "https://github.com/ericmarcellini/pokedex",
    live: "https://ericmarcellini.github.io/pokedex/",
    image: "/images/projects/pkm1.png",
  },
  {
    title: "This Portfolio",
    description: "Portfolio website built with Next.js for more optimized SEO, Tailwind CSS for styling, and TypeScript.",
    technologies: ["Next.js","TypeScript", "Tailwind CSS", ],
    link: "https://github.com/ericmarcellini/ReactjsPortfolio",
    live: "#",
    image: "/images/projects/pkm1.png",
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="flex flex-col items-stretch">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                {/* Image */}
                <div className="mb-4 bg-gray-200 flex justify-center items-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover max-h-72 w-full"
                  />
                </div>

                {/* Technologies map */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="space-x-2">
                <Button asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Live Project
                  </a>
                </Button>
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
