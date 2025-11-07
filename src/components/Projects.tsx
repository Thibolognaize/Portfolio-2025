import Title from "./Title"

import img1 from "../assets/projects/1.png"
import img2 from "../assets/projects/2.png"
import img3 from "../assets/projects/3.png"
import img4 from "../assets/projects/4.png"
import img5 from "../assets/projects/5.png"
import img6 from "../assets/projects/6.png"
import { Github, Video } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Job-Board (Clarternance)",
        description: "Projet web réalisé en binôme dans l'objectif de créer une plateforme d'échange entre entreprise et candidats.",
        technologies: ["Postgresql", "Bootstrap", "Html", "Express.js"],
        demoLink: "#",
        github: "https://github.com/Thibolognaize/Job-board",
        image: img1
    },
    {
        id: 2,
        title: "Digital Resume",
        description: "CV numérique réalisé en première année d'Epitech.",
        technologies: ["Html", "Css", "Java-Script"],
        demoLink: "https://thibolognaize.github.io",
        github: "https://github.com/Thibolognaize/Thibolognaize.github.io",
        image: img2
    },
    {
        id: 3,
        title: "projet 3",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vero quia, delectus a eos deserunt iure beatae odio aspernatur distinctio natus placeat dolores maiores sequi esse, illum expedita, enim accusantium?",
        technologies: ["Jsp", "SQL"],
        demoLink: "#",
        image: img3
    },
    {
        id: 4,
        title: "projet 4",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vero quia, delectus a eos deserunt iure beatae odio aspernatur distinctio natus placeat dolores maiores sequi esse, illum expedita, enim accusantium?",
        technologies: ["Jsp", "SQL"],
        demoLink: "#",
        image: img4
    },
    {
        id: 5,
        title: "projet 5",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vero quia, delectus a eos deserunt iure beatae odio aspernatur distinctio natus placeat dolores maiores sequi esse, illum expedita, enim accusantium?",
        technologies: ["Jsp", "SQL"],
        demoLink: "#",
        image: img5
    },
    {
        id: 6,
        title: "projet 6",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vero quia, delectus a eos deserunt iure beatae odio aspernatur distinctio natus placeat dolores maiores sequi esse, illum expedita, enim accusantium?",
        technologies: ["Jsp", "SQL"],
        demoLink: "#",
        image: img6
    },
]

const Projects = () => {
  return (
		<div className="mt-10">
			<Title title="Projects" />
			<div className="grid md:grid-cols-3  gap-4">
				{projects.map((project) => (
					<div
						key={project.id}
						className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
						<img
							src={project.image}
							alt={project.title}
							className="w-full rounded-xl h-56 object-cover"
						/>
						<div>
							<h1 className="my-2 font-bold">{project.title}</h1>
							<p className="text-sm">{project.description}</p>
						</div>
						<div className="flex flex-wrap gap-2 my-3">
							{project.technologies.map((tech) => (
								<span className="badge badge-accent badge-sm">
									{tech}
								</span>
							))}
						</div>
						<div className="flex">
							<a
								className="btn btn-accent w-1/3"
								href={project.demoLink}>
								<Video className="w-4" />
							</a>
							<a
								className="btn btn-neutral w-2/3 ml-2"
								href={project.github}>
								<Github className="w-4" />
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
  );
}

export default Projects