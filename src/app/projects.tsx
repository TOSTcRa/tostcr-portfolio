"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import {getProjects} from "./lib/getProjects";
import type {Project} from "./lib/types";
import ProjectModal from "./projectModal";
export default function Projects() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	useEffect(() => {
		async function load() {
			const data = await getProjects();
			setProjects(data);
		}
		load();
	}, []);

	const handleShow = (item: Project) => {
		if (selectedProject?.id === item.id) return;
		setSelectedProject(item);
	};

	return (
		<div className='container text-background dark:text-white'>
			<h3 className='text-[22px] font-bold leading-7 mb-6' id='Projects'>
				Projects
			</h3>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
				{projects.map((item: Project) => (
					<div
						onClick={() => handleShow(item)}
						key={item.id}
						className='cursor-pointer flex items-center flex-col gap-3 hover:shadow-[0_0_30px_rgba(63,63,63,0.2)] rounded-4xl p-4 transition-shadow duration-300 ease-in-out'>
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
				{selectedProject && (
					<ProjectModal
						handleCloseAction={() => setSelectedProject(null)}
						selectedProject={selectedProject}
					/>
				)}
			</div>
		</div>
	);
}
