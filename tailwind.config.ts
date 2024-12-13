import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            filter: {
                'invert': 'invert(1)',
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                'white-transparent': "rgba(255, 255, 255, 0.95)",
            },
        },
    },
    variants: {
        extend: {
            filter: ['responsive', 'hover'],
        },
    },
    plugins: [
        function ({ addUtilities }: { addUtilities: Function }) {
            const newUtilities = {
                '.filter-invert': {
                    filter: 'invert(1)',
                },
            };
            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};
export default config;
