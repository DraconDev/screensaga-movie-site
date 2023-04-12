import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		// Expose environment variables to the client-side React code
		"process.env": process.env,
	},
	build: {
		target: "esnext", // Or "esnext"
	},
});
