/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                'transition': 'transition 1s ease-in-out infinite',
            },
            keyframes: {
                transition: {
                    '0%': { opacity: 0.3, transform: 'scale(0.8)' },
                    '50%': { opacity: 1, transform: 'scale(1)' },
                    '100%': { opacity: 0.3, transform: 'scale(0.8)' },

                }
            }
        },
    },
    plugins: [],
};

