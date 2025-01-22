import { Badge } from "@/components/ui/badge";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Git",
  "Responsive Design",
];

export default function Skills() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <div key={skill}>
            <Badge variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          </div>
        ))}
      </div>
    </section>
  );
}
