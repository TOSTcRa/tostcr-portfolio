"use client";
import {useState, useEffect} from "react";

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		setMounted(true);
		const stored = localStorage.getItem("theme");
		if (stored === "dark") {
			document.documentElement.classList.add("dark");
			setIsDark(true);
		}
	}, []);

	const toggleTheme = () => {
		const html = document.documentElement;
		if (html.classList.contains("dark")) {
			html.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setIsDark(false);
		} else {
			html.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setIsDark(true);
		}
	};

	if (!mounted) return null;

	return (
		<button
			onClick={toggleTheme}
			className='group fixed bottom-5 right-5 z-50 flex items-center bg-background text-foreground p-3 rounded-full border border-[#2a2c30] overflow-hidden'
			aria-label='Toggle Theme'>
			<span className='text-xl transition-transform duration-500 ease-in-out'>
				{isDark ? "☀️" : "🌙"}
			</span>

			<span className='whitespace-nowrap opacity-0 max-w-0 overflow-hidden transition-[opacity,max-width] duration-500 group-hover:opacity-100 group-hover:max-w-xs select-none ease-in-out'>
				{isDark ? "Light Mode" : "Dark Mode"}
			</span>
		</button>
	);
}
