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
    description: "Pokedex app that displays information about different Pokemon species. Uses the PokeAPI.",
    technologies: ["Javascript", "CSS", "HTML"],
    link: "https://github.com/ericmarcellini/pokedex",
    live: "https://ericmarcellini.github.io/pokedex/",
    image: "/images/projects/pkm1.png",
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.title}>
            <Card>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-48 mb-4 bg-gray-200 flex items-center justify-center text-gray-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  /> 
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={project.live}>Live Project</a>
                </Button>
                <Button asChild>
                  <a href={project.link}>Github</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
