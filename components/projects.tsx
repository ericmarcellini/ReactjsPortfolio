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
    // image: "/path-to-your-image.jpg" // Uncomment and provide a real path if you have images
  },
  {
    title: "Task Management App",
    description: "A responsive task management application with real-time updates and collaborative features.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    link: "#",
    // image: "/path-to-your-image.jpg"
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather dashboard that provides real-time weather information and forecasts.",
    technologies: ["React", "Redux", "OpenWeatherMap API"],
    link: "#",
    // image: "/path-to-your-image.jpg"
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
                {/* Image placeholder or actual image if available */}
                <div className="relative w-full h-48 mb-4 bg-gray-200 flex items-center justify-center text-gray-500">
                  {/* If you have a project.image property, use: 
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  /> 
                  */}
                  Project Image
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
                  <a href={project.link}>View Project</a>
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
