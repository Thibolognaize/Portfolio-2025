import { Mail } from "lucide-react";
import img from '../assets/profile.jpg'
import { age } from "../scripts/ageCalculator";

const Home = () => {
	return (
		<section
			className="flex flex-col-reverse md:flex-row justify-center items-center md:py-32 py-10"
			id="Home">
			<div className="flex flex-col ">
				<h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
					Bonjour,
					<br /> je suis{" "}
					<span className="text-accent">Thibault FEAT</span>
				</h1>
				<p className="my-4 text-md text-center md:text-left">
					Étudiant en Pre-MSC à Epitech et alternant développeur chez
					Augefi, j'ai {age()} ans et une passion pour la technologie.
					Curieux et déterminé, je cherche à maîtriser tout ce que
					j'entreprends. Toujours à la recherche de nouveaux défis, je
					m'efforce de repousser mes limites et d'élargir mes
					compétences.
				</p>
				<a href="#" className="btn btn-accent md:w-fit">
					<Mail className="w-5 h-5" />
					Contactez-moi
				</a>
			</div>

			<div className="md:ml-32">
				<img
					src={img}
					alt=""
					className="w-96 h-96 md:min-w-60 object-cover border-8 border-accent shadow-xl"
					style={{
						borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",
					}}
				/>
			</div>
		</section>
	);
};

export default Home;
