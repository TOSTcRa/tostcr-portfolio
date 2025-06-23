"use client";
import {useForm} from "react-hook-form";

type FormData = {
	name: string;
	email: string;
	message: string;
};

export default function Contact() {
	const {register, handleSubmit, reset} = useForm<FormData>();

	const onSubmit = async (data: FormData) => {
		await fetch("/api/send-mail", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(data),
		});
		reset();
		alert("Message sent!");
	};

	return (
		<div
			className='container flex flex-col items-center lg:items-start text-background dark:text-white'
			id='Contact'>
			<h3 className='py-5 font-bold text-[22px] leading-7'>Contact</h3>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col items-center lg:items-start'>
				<label className='mb-2 hidden sm:block'>Name</label>
				<input
					{...register("name")}
					type='text'
					placeholder='Your Name'
					required
					className='mb-3 border-1 border-[#42474D] p-4 rounded-xl text-gray-600 dark:text-[#A3ABB2]'
				/>
				<label className='mb-2 hidden sm:block'>Email</label>
				<input
					type='email'
					placeholder='Your email'
					required
					{...register("email")}
					className='mb-3 border-1 border-[#42474D] p-4 rounded-xl text-gray-600 dark:text-[#A3ABB2]'
				/>
				<label className='mb-2 hidden sm:block'>Message</label>
				<textarea
					required
					{...register("message")}
					className='mb-4 border-1 border-[#42474D] p-4 rounded-xl text-gray-600 dark:text-[#A3ABB2]'
					placeholder='Your message'></textarea>
				<button
					type='submit'
					className='cursor-pointer mb-5 font-bold text-[#121417] rounded-4xl py-2.5 px-6 bg-[#B8CCE0]'>
					{" "}
					Send
				</button>
			</form>
		</div>
	);
}
