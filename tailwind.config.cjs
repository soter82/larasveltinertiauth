module.exports = {
    content: [
        "./resources/js/Pages/**/*.{html,js,svelte,ts}",
        "./resources/js/Components/**/*.{html,js,svelte,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
