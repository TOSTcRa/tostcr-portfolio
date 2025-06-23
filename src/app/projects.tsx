"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import {getProjects} from "./lib/getProjects";
export default function Projects() {
	// const projects = [
	// 	{
	// 		name: "Portfolio Website",
	// 		img: "/projects/project-1.png",
	// 		description:
	// 			"Responsive porfolio website with admin panel and a function to manage website pictures in the admin panel",
	// 	},
	// 	{
	// 		name: "Task manager",
	// 		img: "/projects/project-2.png",
	// 		description:
	// 			"A task manager website made with typescript and tailwindcss, has functions to add, remove or manage items between columns",
	// 	},
	// 	{
	// 		name: "Whitepace",
	// 		img: "/projects/project-3.png",
	// 		description:
	// 			"A SaaS landing page from the figma community made with SvelteKIT",
	// 	},
	// 	{
	// 		name: "Product From",
	// 		img: "/projects/project-4.png",
	// 		description:
	// 			"Website made on laravel and php, has functionality of managing the products added to the table",
	// 	},
	// ];

	interface Project {
		id: number;
		name: string;
		img: string;
		description: string;
	}

	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		async function load() {
			const data = await getProjects();
			setProjects(data);
			console.log(data);
		}
		load();
	}, []);

	return (
		<div className='container text-background dark:text-white'>
			<h3 className='text-[22px] font-bold leading-7 mb-6' id='Projects'>
				Projects
			</h3>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
				{projects.map((item: Project) => (
					<div
						key={item.id}
						className='flex items-center flex-col gap-3 hover:shadow-[0_0_30px_rgba(63,63,63,0.2)] rounded-4xl p-4 transition-shadow duration-300 ease-in-out'>
						<Image
							src={item.img}
							alt={item.img.slice(0, 9)}
							className='max-w-[250px] rounded-2xl'
							width={300}
							height={300}
						/>
						<div className='max-w-[250px] flex flex-col items-center text-center md:items-start md:text-start'>
							<h4>{item.name}</h4>
							<p className='text-sm leading-5.5 text-gray-600 dark:text-gray-400'>
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
