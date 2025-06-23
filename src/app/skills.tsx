export default function Skills() {
	const skills = [
		"HTML",
		"CSS",
		"JavaScript",
		"React",
		"NextJS",
		"Node.js",
		"Express.js",
		"MongoDB",
		"Supabase",
		"Svelte",
		"WordPress",
		"TailwindCSS",
		"Laravel",
		"Blender",
		"Maya",
	];
	return (
		<div className='container py-5 text-background dark:text-white' id='Skills'>
			<h3 className='text-[22px] font-bold leading-7'>Skills</h3>
			<ul className='flex gap-3 text-sm overflow-x-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-gray-300 scrollbar-h-2 scrollbar-hover:scrollbar-thumb-gray-400 py-3'>
				{skills.map((skill, index) => (
					<li
						key={index}
						className='py-1.5 px-4 rounded-4xl bg-gray-200 hover:bg-gray-300 dark:bg-[#2E3033] dark:hover:bg-[#494D50] transition-colors duration-300 ease-in-out'>
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
}
