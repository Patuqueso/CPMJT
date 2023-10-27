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
        Fondo: "#5A758C",
        FondoC: "#7ca0bf",
        FondoS: "#F08080",
        Naranja: "#ffa812",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
