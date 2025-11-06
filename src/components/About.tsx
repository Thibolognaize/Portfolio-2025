import Title from "./Title"
import img from '../assets/img.jpg'
import { LetterText } from "lucide-react";

const aboutSection = [
	// TODO: Tout traduire en anglais
	{
		id: 1,
		title: "Etudiant à Epitech",
		description:
        "J'ai commencé Epitech en septembre 2025 avec l'objectif de me dépasser et devenir un développeur compétant et pleinement autonome",
		icon: <LetterText className="text-accent scale-150" />,
	},
	{
		id: 2,
		title: "Alternant Dev FullStack chez Augefi",
		description:
			"Depuis plus d'une année, je suis présent aux côtés de l'équipe informatique du cabinet comptable Augefi. Ma mission principale est d'améliorer le quotidient de nos collaborateur à travers la disposition de divers outils/plateformes : Web, Automatisations, Scripts, BDD...",
		icon: <LetterText className="text-accent scale-150" />,
	},
	{
		id: 3,
		title: "Développeur Passionné",
		description:
			"Je ne suis sûremment pas le meilleur, mais j'aime avant tout me surpasser et tendre à toujours apprendre de nouvelles notions",
		icon: <LetterText className="text-accent scale-150" />,
	},
];
const About = () => {
  return (
		<div className="bg-base-300 p-10 mb-10 md:mb-32">
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