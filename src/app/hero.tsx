"use client";
import {Typewriter} from "react-simple-typewriter";

export default function Hero() {
	return (
		<div className='container py-10 mt-5 text-background dark:text-white'>
			<h1 className='text-5xl font-bold leading-15 '>
				<Typewriter
					words={["Hi, I'm tostcr", "I build clean & creative frontends"]}
					loop={true}
					cursor
					cursorStyle='_'
					typeSpeed={70}
					deleteSpeed={40}
					delaySpeed={5000}
				/>
			</h1>
			<span className='text-gray-400'>Also working as a 3D Designer</span>
			<p className='mt-2'>
				I&apos;m a front-end developer passionate about crafting intuitive and
				visually appealing web experiences. With a focus on clean code and
				modern design principles, I bring ideas to life, ensuring seamless
				functionality and engaging user interfaces.
			</p>
		</div>
	);
}
