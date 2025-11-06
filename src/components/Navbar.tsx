import { Bot } from "lucide-react";

const Navbar = () => {
	return (
		<div className="flex justify-center md:justify-between item-center p-4">
			<a
				className="flex items-center font-bold text-3xl md:text-xl gap-0.5"
				href="#">
				<Bot className="mr-2" />
				<span>Thibault</span>
				<span className="text-accent">FEAT</span>
			</a>

			<ul className="hidden md:flex space-x-4">
				<li>
					<a className="btn btn-sm btn-ghost" href="#">
						Accueil
					</a>
				</li>
				<li>
					<a className="btn btn-sm btn-ghost" href="#">
						À propos
					</a>
				</li>
				<li>
					<a className="btn btn-sm btn-ghost" href="#">
						Mes experiences
					</a>
				</li>
				<li>
					<a className="btn btn-sm btn-ghost" href="#">
						Mes projets
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
