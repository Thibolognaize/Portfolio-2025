import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function App() {
  	return (
    	<>
			<div className="p-5 md:px-[15%]">
				<Navbar/>
				<Home/>
			</div>
			<About/>
		</>
  	)
}