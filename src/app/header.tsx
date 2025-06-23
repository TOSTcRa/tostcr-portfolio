"use client";
import Image from "next/image";
import {useState} from "react";

export default function Header() {
	const [open, setOpen] = useState(false);
	const pages = ["About", "Skills", "Projects", "Contact", "Resume"];
	return (
		<div className='border-b-1 md:border-b-black dark:md:border-b-white flex justify-center mb-10 sm:mb-0'>
			<header className='container flex items-center justify-between fixed bg-foreground dark:bg-background md:bg-none md:dark:bg-none md:static text-background dark:text-foreground z-1'>
				<div className='flex gap-4'>
					<Image
						src={"logo.svg"}
						alt=''
						width={16}
						height={16}
						className='hidden dark:block'
					/>
					<Image
						src={"logoW.svg"}
						alt=''
						width={16}
						height={16}
						className='dark:hidden block'
					/>
					<h3>tostcr</h3>
				</div>
				<div className='gap-8 items-center flex'>
					<ul className='gap-9 hidden md:flex'>
						<li>
							<a href='#about'>About</a>{" "}
						</li>
						<li>
							<a href='#skills'>Skills</a>{" "}
						</li>
						<li>
							<a href='#projects'>Projects</a>{" "}
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
					<button
						type='button'
						className='bg-gray-200 dark:bg-[#2E3033] py-2.5 px-4 rounded-4xl cursor-pointer hidden sm:block'>
						Resume
					</button>
					<div className='md:hidden'>
						<input
							id='menu__toggle'
							type='checkbox'
							className='opacity-0'
							onClick={() => setOpen(!open)}
						/>
						<label
							className={`menu__btn flex items-center top-3 right-5 sm:top-5 w-6.5 h-6.5 cursor-pointer z-2 ${
								open ? "fixed" : "absolute"
							}`}
							htmlFor='menu__toggle'>
							<span
								className={`block absolute w-full h-0.5 transition-all duration-300 ease-in-out bg-gray-500 before:block before:absolute before:w-full before:bg-gray-500 before:h-0.5 after:block after:absolute after:w-full after:h-0.5 after:bg-gray-500 before:content-[''] before:-top-2 after:content-[''] after:top-2 ${
									open
										? "before:rotate-0 before:top-0 after:top-0 after:rotate-90 rotate-45 after:-translate-y-1 before:translate-y-1 h-0 bg-transparent"
										: ""
								}`}></span>
						</label>
						<ul
							className={`transition-all duration-400 ease-in-out block fixed invisible top-0 -right-full w-[300px] h-full m-0 px-0 py-20 text-center bg-foreground dark:bg-[#121417] shadow-[1px_0_6px_rgba(0,0,0,0.2)] z-1 ${
								open ? "visible right-0" : ""
							}`}>
							{pages.map((item, index) => (
								<li key={index} onClick={() => setOpen(!open)}>
									<a
										href={`#${item}`}
										className='block py-3 px-6 text-background dark:text-white text-xl font-semibold'>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</header>
		</div>
	);
}
