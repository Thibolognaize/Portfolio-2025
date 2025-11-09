// import imgHTML from "../assets/techno/html.png";
// import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgREACT from "../assets/techno/react.png";
import imgNODE from "../assets/techno/node-js.png";
// import imgNEXT from "../assets/techno/next-js.webp";
// import imgPRISMA from "../assets/techno/prisma.webp";
import imgPYTHON from "../assets/techno/python.png";
import imgJAVA from "../assets/techno/java.png"
import imgPHP from "../assets/techno/php.png"
import imgDOCKER from "../assets/techno/docker.png"
import imgLINUX from "../assets/techno/linux.png"


import augefi from "../assets/companies/augefi.png";
import formasuite from "../assets/companies/formasuite.png";


export const skills = [
	{ id: 1, name: "JavaScript", image: imgJS },
	{ id: 2, name: "TypeScript", image: imgTYPE },
	{ id: 3, name: "React", image: imgREACT },
	{ id: 4, name: "Node/Express.js", image: imgNODE },
	{ id: 5, name: "PHP", image: imgPHP },
	{ id: 6, name: "Python", image: imgPYTHON },
	{ id: 7, name: "Java", image: imgJAVA },
	{ id: 8, name: "Docker", image: imgDOCKER },
	{ id: 9, name: "Linux", image: imgLINUX },
];

export const experiences = [
	{
		id: 1,
		role: "Alternant Développeur",
		company: "Augefi",
		period: "Oct 2024 - Présent",
		description: [
			"Développement d'une plateforme WEB pour l'intranet",
			"Mise en place de bases de données MySQL",
			"Automatisations de tâches collaborateurs avec Python",
			"Automatisations de processus avec PowerAutomate",
		],
		website: "https://augefi.fr/",
		image: augefi,
	},
	{
		id: 2,
		role: "Stagiaire Développeur",
		company: "Formasuite",
		period: "Juin 2023 - Août 2023",
		description: [
			"Création d'une page 'Dernières places' sur le site web.",
			"Gestion d'une nouvelle feature dans la code base javascript",
			"Creation d'une table dans une base de donnée MySQL",
		],
		website: "https://www.formasuite.fr/",
		image: formasuite,
	},
];
