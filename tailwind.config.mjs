/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        Azul: "#033E8C",
        AzulF: "#011838",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
