<h1 align="center">
  Spotify Remote
</h1>

<p align="center">
    <a style="text-decoration: none" href="https://nextjs.org/" alt="Next.js">
        <img src="https://img.shields.io/badge/framework-Next.js-61dbfb" />
    </a>
    <a style="text-decoration: none" href="https://www.typescriptlang.org/" alt="TypeScript">
        <img src="https://img.shields.io/badge/language-TypeScript-3178c6" />
    </a>
    <a style="text-decoration: none" href="https://tailwindcss.com/" alt="Tailwind CSS">
        <img src="https://img.shields.io/badge/styling-Tailwind_CSS-38bdf8" />
    </a>
    <a style="text-decoration: none" href="https://recoiljs.org/" alt="Recoil">
        <img src="https://img.shields.io/badge/state_management-Recoil-3578e5" />
    </a>
    <a style="text-decoration: none" href="https://eslint.org/" alt="Eslint">
        <img src="https://img.shields.io/badge/linter-ESLint-4a31c3" />
    </a>
    <a style="text-decoration: none" href="https://prettier.io/" alt="Prettier">
        <img src="https://img.shields.io/badge/code_style-Prettier-ff69b4" />
    </a>
</p>


Wanted to learn Next.js for some time, I followed their official tutorial, watched one or two more, and then practiced by creating this **_Spotify Remote_**, which let's you authenticate via Spotify OAuth, and watch and control your Spotify playlists.

**Note:** Since the Spotify API is not a dedicated player, and only allows remote control, an active device (e.g. the Spotify app on your phone or browser) needs to be open for the app to work.


## 🚀 Getting started

If you want to play around with the code yourself - feel free to do so 🧑🏻‍💻. First clone the project using
```shell script
git clone https://github.com/florianbuehler/spotify-remote.git
```
(or alternatively using SSH and `git@github.com:florianbuehler/spotify-remote.git`) and then navigate into the root folder of the project and run
```shell script
npm install
```
to install the required packages into the `node_modules` folder.


## 🔧 Development

Start the development server with hot reload configured with
```shell script
npm run dev
```
and then navigate to `http://localhost:3000` in your browser to view the latest changes.

To help ensuring some basic formatting and code quality standards, the project has prettier and eslint configured. That's why you can simply use
```shell script
npm run eslint
```
to see if the code matches the standards and run
```shell script
npm run fix-eslint
```
to let eslint fix it automatically where possible.


## 💫 Deployment

Build an optimized and production ready version of the project with
```shell script
npm run build
```
The production build is located in the *./.next* directory and can be served by running
```shell script
npm run start
```