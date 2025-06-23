import Image from "next/image";
import {Project} from "./lib/types";

export default function ProjectPage({
	name,
	img,
	description,
	github,
	id,
}: Project) {
	return (
		<div className={`container id-${id} flex gap-10 flex-col lg:flex-row`}>
			<Image
				src={img}
				alt={name}
				width={1024}
				height={1024}
				className='rounded-3xl max-w-full h-full max-h-full'
			/>
			<div className='flex flex-col items-start justify-between'>
				<div className='flex flex-col gap-5'>
					<h4 className='font-bold text-3xl md:text-4xl lg:text-5xl'>{name}</h4>
					<p className='text-sm lg:text-lg md:text-base'>{description}</p>
				</div>
				<button
					type='button'
					className='z-51 mt-5 p-4 bg-gray-200 text-background dark:bg-white rounded-4xl cursor-pointer'>
					<a href={`${github}`} target='_blank'>
						GitHub
					</a>
				</button>
			</div>
		</div>
	);
}
