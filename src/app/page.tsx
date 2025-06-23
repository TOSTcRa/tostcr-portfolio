import About from "./about";
import Contact from "./contact";
import Header from "./header";
import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";
import ThemeSwitch from "./themeSwith";

export default function Home() {
	return (
		<div className='bg-foreground dark:bg-background transition-colors duration-300 ease-in-out'>
			<Header />
			<div className='flex flex-col items-center bg-foreground dark:bg-background transition-colors duration-300 ease-in-out'>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
				<ThemeSwitch />
			</div>
		</div>
	);
}
