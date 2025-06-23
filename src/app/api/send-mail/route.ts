import nodemailer from "nodemailer";
// import type {NextApiRequest, NextApiResponse} from "next";
import {NextResponse, NextRequest} from "next/server";

export async function POST(req: NextRequest) {
	if (req.method !== "POST") {
		return NextResponse.json({message: "Method not Allowed"});
	}
	const body = await req.json();
	const {name, email, message} = body;

	console.log(name, email, message);

	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.MY_EMAIL,
				pass: process.env.MY_EMAIL_PASSWORD,
			},
		});

		await transporter.sendMail({
			from: email,
			to: process.env.MY_EMAIL,
			subject: `New message from ${name}`,
			text: message,
		});

		return NextResponse.json({success: true});
	} catch (error) {
		console.error(error);
		return NextResponse.json({
			success: false,
			error: "Error sending",
			status: 500,
		});
	}
}
