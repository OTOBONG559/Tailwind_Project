npm install -D tailwindcss
npx tailwindcss init

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

@tailwind base;
@tailwind components;
@tailwind utilities;

npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
