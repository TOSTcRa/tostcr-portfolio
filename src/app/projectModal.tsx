"use client";
import {useEffect, useState, useRef} from "react";
import ProjectPage from "./projectPage";
import type {Project} from "./lib/types";

export default function ProjectModal({
	selectedProject,
	handleCloseAction,
}: {
	selectedProject: Project;
	handleCloseAction: () => void;
}) {
	const modalRef = useRef<HTMLDivElement>(null);
	const [showAnimation, setShowAnimation] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setShowAnimation(true), 10);
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setShowAnimation(false);
				setTimeout(() => handleCloseAction(), 300);
			}
		};
		window.addEventListener("keydown", handleKeyDown);

		const handleClickOutside = (e: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				setShowAnimation(false);
				setTimeout(() => handleCloseAction(), 300);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [handleCloseAction]);

	const closeWithAnimation = () => {
		setShowAnimation(false);
		setTimeout(() => handleCloseAction(), 300);
	};

	return (
		<div
			className={`overflow-y-auto shadow-xl dark:shadow-gray-700 dark:shadow-md scrollbar scrollbar-w-1 scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-500 lg:shadow-none fixed inset-0 z-59 flex justify-start items-start py-20 px-10 left-0 md:left-100 xl:left-100 2xl:left-170 transition-opacity duration-300 ease-in-out ${
				showAnimation
					? "bg-foreground dark:bg-background opacity-100"
					: "bg-foreground dark:bg-background opacity-0"
			}`}>
			<button
				type='button'
				className='absolute top-8 right-8 text-xl font-bold z-100 cursor-pointer'
				onClick={() => closeWithAnimation()}>
				X
			</button>
			<div
				ref={modalRef}
				className={`bg-foreground dark:bg-background z-50 transition-all duration-300 ease-in-out ${
					showAnimation
						? "-translate-x-0 opacity-100"
						: "translate-x-full opacity-0"
				}`}>
				<ProjectPage {...selectedProject} />
			</div>
		</div>
	);
}
