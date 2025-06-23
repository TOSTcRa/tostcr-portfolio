import type {NextConfig} from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			new URL(
				"https://kvegiiocqywzatizanwl.supabase.co/storage/v1/object/public/project-images/**"
			),
		],
	},
};

export default nextConfig;
