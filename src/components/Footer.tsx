import { Bot, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
		<footer className="footer footer-horizontal footer-center p-10">
			<aside>
				<a
					className="flex items-center font-bold text-3xl md:text-xl gap-0.5"
					href="#">
					<Bot className="w-10 h-10" />
				</a>
				<p className="font-bold">
					<span>Thibault</span>
					<span className="text-accent">FEAT</span>
				</p>
				<p>
					Copyright © {new Date().getFullYear()} - All right reserved
				</p>
			</aside>
			<nav>
				<div className="grid grid-flow-col gap-4">
					<a
						href="https://www.linkedin.com/in/thibault-feat/"
						target="_blank">
						<Linkedin className="w-6 h-6 text-current" />
					</a>
					<a href="https://github.com/Thibolognaize" target="_blank">
						<Github className="w-6 h-6 text-current" />
					</a>
				</div>
			</nav>
		</footer>
  );
}

export default Footer