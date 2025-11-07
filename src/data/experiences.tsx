import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgREACT from "../assets/techno/react.png";
import imgNODE from "../assets/techno/node-js.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgPRISMA from "../assets/techno/prisma.webp";

import google from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";
import amazon from "../assets/companies/amazon.png";

export const skills = [
	{ id: 1, name: "HTML", image: imgHTML },
	{ id: 2, name: "CSS", image: imgCSS },
	{ id: 3, name: "JavaScript", image: imgJS },
	{ id: 4, name: "TypeScript", image: imgTYPE },
	{ id: 5, name: "React", image: imgREACT },
	{ id: 6, name: "Node.js", image: imgNODE },
	{ id: 7, name: "Express.js", image: imgNODE },
	{ id: 8, name: "Python", image: imgNEXT },
	{ id: 9, name: "Java", image: imgPRISMA },
];

export const experiences = [
	{
		id: 1,
		role: "Software Engineer",
		company: "Google",
		period: "Sep 2022 - Présent",
		description: [
			"Développement de nouvelles fonctionnalités pour Google Maps.",
			"Optimisation des performances de l'application.",
		],
		image: google,
	},
	{
		id: 2,
		role: "Fullstack Developer",
		company: "Meta",
		period: "Jan 2021 - Août 2022",
		description: [
			"Création d'une plateforme interne de collaboration pour les équipes.",
			"Mise en place d'une architecture scalable et optimisée.",
		],
		image: meta,
	},
	{
		id: 3,
		role: "Frontend Developer",
		company: "Amazon",
		period: "Mai 2019 - Déc 2020",
		description: [
			"Développement d'une interface utilisateur pour Amazon Web Services.",
			"Implémentation des tests unitaires et E2E.",
		],
		image: amazon,
	},
];
