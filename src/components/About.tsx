import Title from "./Title"
import img from "../assets/profile.jpg";
import { aboutSection } from "../data/about"; 

const About = () => {
  return (
		<div className="bg-base-300 p-10 mb-10 md:pb-32" id="About">
			<Title title="À propos" />
			<div className="md:h-screen flex justify-center items-center">
				<div className="hidden md:block">
					<img
						src={img}
						alt=""
						className="w-96 object-cover rounded-xl"
					/>
				</div>

				<div className="md:ml-4 space-y-4">
                    {aboutSection.map((section) => (
                        <div key={section.id} className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl">

                            <div className="mb-2 md:mb-0">{section.icon}</div>
                            <div className="md:ml-4 text-center md:text-left">
                                <h2 className="text-xl font-bold mb-1">
                                    {section.title}
                                </h2>
                                <p className="text-sm">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
			</div>
		</div>
  );
}

export default About