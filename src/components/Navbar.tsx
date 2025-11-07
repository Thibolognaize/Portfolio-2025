import { Bot } from "lucide-react";

const Navbar = () => {
	return (
		<header className="flex justify-center md:justify-between item-center p-4">
			<a
				className="flex items-center font-bold text-3xl md:text-xl gap-0.5"
				href="#">
				<Bot className="mr-2" />
				<span>Thibault</span>
				<span className="text-accent">FEAT</span>
			</a>

			<ul className="hidden md:flex space-x-4">
				<li>
					<a className="btn btn-sm btn-ghost" href="#Home">
						Accueil
					</a>
				</li>
				<li>
					<a className="btn btn-sm btn-ghost" href="#About">
						À propos
					</a>
				</li>
				<li>
					<a className="btn btn-sm btn-ghost" href="#Experiences">
						Mes experiences
					</a>
				</li>
				<li>
					<a className="btn btn-sm btn-ghost" href="#Projects">
						Mes projets
					</a>
				</li>
			</ul>
		</header>
	);
};

export default Navbar;
