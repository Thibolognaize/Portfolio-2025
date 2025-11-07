import Title from "./Title"

import { projects } from "../data/projects";
import { Github, Video } from "lucide-react"

const Projects = () => {
  return (
		<div className="pt-20" id="Projects">
			<Title title="Projects" />
			<div className="grid md:grid-cols-3 gap-4">
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
								<span key={tech} className="badge badge-accent badge-sm">
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