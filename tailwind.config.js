/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			colors: {
				"primary-bg": "var(--primary-bg)",
				"secondary-bg": "var(--secondary-bg)",
				"light-blue-color": "var(--light-blue-color)",
				"danger-color": "var(--danger-color)",
				"primary-color": "var(--primary-color)",
				"white-color": "var(--white-color)",
				"green-color": "var(--green-color)",
				"yellow-color": "var(--yellow-color)",
				"gray-color": "var(--gray-color)",
				"light-gray-color": "var(--light-gray-color)",
			},
		},
	},
	plugins: [require("daisyui")],
};

