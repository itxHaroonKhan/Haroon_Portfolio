import Image from "next/image";
import Link from "next/link";

const projects = [
  { id: 1, title: "Project 1", imageUrl: "/img/Screenshot 2025-01-31 232806.png", projectLink: "https://blog-pages-gules.vercel.app/" },
  { id: 2, title: "Project 2", imageUrl: "/img/Screenshot 2025-01-31 232920.png", projectLink: "https://hackathon-milestone-3-steel-three.vercel.app/" },
  { id: 3, title: "Project 3", imageUrl: "/img/Screenshot 2025-01-31 233204.png", projectLink: "https://api-data-fetcher-murex.vercel.app/" },
  { id: 4, title: "Project 4", imageUrl: "/img/Screenshot 2025-01-31 233308.png", projectLink: "https://day-5-drab.vercel.app/" },
  { id: 5, title: "Project 5", imageUrl: "/img/Screenshot 2025-01-31 233548.png", projectLink: "https://api-asingment.vercel.app/" },
  { id: 6, title: "Project 6", imageUrl: "/img/Screenshot 2025-01-31 233740.png", projectLink: "https://next-js-004.vercel.app/" },
  { id: 7, title: "Project 7", imageUrl: "/img/Screenshot 2025-01-31 233845.png", projectLink: "https://hacathon-milestone-vert.vercel.app/" },
  { id: 8, title: "Project 8", imageUrl: "/img/Screenshot 2025-01-31 234246.png", projectLink: "https://assimgnent-porfplio.vercel.app/" },
];

export default function Projects() {
  return (
    <div className="p-9" id="projects">
      <h2 className="text-2xl text-center pb-14 underline font-bold">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="zoom-in-up"> {/* Adjusted for 4 columns */}
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-50 rounded shadow p-4 text-center relative">
            <Link href={project.projectLink} passHref>
              <div className="group cursor-pointer">
                <Image
                  className="w-full h-auto rounded mb-2 transition-transform transform group-hover:scale-105"
                  src={project.imageUrl}
                  alt={project.title}
                  width={500}
                  height={300}
                />
                <p className="text-gray-700 text-xl font-bold">{project.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
