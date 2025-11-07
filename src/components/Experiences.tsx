import Title from "./Title"

import { skills, experiences } from "../data/experiences";

const Experiences = () => {
  return (
		<section className="mt-10" id="Experiences">
			<Title title="Experiences" />
			<div className="flex flex-col-reverse md:flex-row justify-center items-center">
				<div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
					{
                    skills.map((skill) => (
						<div key={skill.id} className="flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name} 
                                className="object-cover rounded-full h-full w-full" />

                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
					))
                    }
				</div>

				<div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((experience) => (
                        <div key={experience.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">
                            <div className="flex items-center">
                                <img src={experience.image} alt={experience.company} className="object-cover h-15 w-15"/>
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {experience.role} - {experience.company}
                                    </h1>
                                    <span className="text-small">{experience.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {experience.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
			</div>
		</section>
  );
}

export default Experiences