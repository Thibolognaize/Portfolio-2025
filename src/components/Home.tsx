import { Mail } from "lucide-react";
import img from '../assets/img.jpg'
const Home = () => {
	return (
		<div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">

			<div className="flex flex-col ">
				<h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
					Bonjour,
					<br /> je suis{" "}
					<span className="text-accent">Thibault FEAT</span>
					<br />
					<span className="text-red-600">Ce n'est pas moi sur cette photo !</span>
				</h1>
				<p className="my-4 text-md text-center md:text-left">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Dolorem harum eos autem aut, quaerat delectus aliquam cum
					nam saepe magnam doloremque natus maiores repellat nostrum
					perferendis asperiores architecto voluptates numquam.
				</p>
				<a href="#" className="btn btn-accent md:w-fit">
					<Mail className="w-5 h-5" />
					Contactez-moi
				</a>
			</div>

			<div className="md:ml-32">
                <img src={img} alt="" className="w-96 h-96 md:min-w-60 object-cover border-8 border-accent shadow-xl"
                style={{
                    borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
                }}
                />
            </div>
		</div>
	);
};

export default Home;
