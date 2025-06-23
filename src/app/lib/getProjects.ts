import {supabase} from "./supabase";

export async function getProjects() {
	const {data, error} = await supabase.from("projects").select("*");

	console.log("DATA:", data);
	console.log("ERROR:", error);

	if (error) {
		console.error(error);
		return [];
	}

	return data;
}
