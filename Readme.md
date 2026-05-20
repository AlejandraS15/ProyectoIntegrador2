# ProyectoIntegrador2
## Business Description
Institutional dental website developed with server-side rendering to present key clinic information and support client acquisition.
## Tech Stack
- Express
- TypeScript (ESM)
- EJS
- express-ejs-layouts
- Tailwind CSS
## Main Scripts
- `npm run dev`: starts the SSR server in development mode
- `npm run dev:css`: compiles Tailwind in watch mode to `public/css/styles.css`
- `npm run build`: compiles TypeScript, copies views and static files, and generates the necessary assets for `dist`
- `npm run start`: runs the application in production mode
## Installation and Setup
1. Install dependencies:
```bash
npm install
```
2. Run Tailwind in development:
```bash
npm run dev:css
```
3. Start the server:
```bash
npm run dev
```
## Production Build
```bash
npm run build
npm run start
```
## Folder Structure
```txt
ProyectoIntegrador2
├── dist/
├── node_modules/
├── public/
│   ├── css/
│   │   └── styles.css
│   └── img/
├── scripts/
│   └── copy-static.mjs
├── src/
│   ├── assets/
│   │   └── css/
│   │       └── input.css
│   ├── config/
│   │   └── seo.ts
│   ├── controllers/
│   │   ├── AboutController.ts
│   │   ├── ContactController.ts
│   │   ├── HomeController.ts
│   │   ├── StaffController.ts
│   │   └── TreatmentController.ts
│   ├── app.ts
│   ├── index.ts
│   ├── routes/
│   │   └── index.ts
│   ├── types/
│   │   └── index.ts
│   ├── views/
│   │   ├── about/
│   │   │   └── index.ejs
│   │   ├── contact/
│   │   │   └── index.ejs
│   │   ├── home/
│   │   │   └── index.ejs
│   │   ├── layouts/
│   │   │   └── app.ejs
│   │   ├── partials/
│   │   │   ├── footer.ejs
│   │   │   ├── header.ejs
│   │   │   └── seo-meta.ejs
│   │   ├── staff/
│   │   │   └── index.ejs
│   │   └── treatments/
│   │       └── index.ejs
├── api/
│   └── index.ts
├── .gitignore
├── copilot-instructions.md
├── package-lock.json
├── package.json
├── README.md
├── vercel.json
├── tailwind.config.cjs
└── tsconfig.json
```
## Architecture Decision
A simple and flat architecture was chosen to facilitate maintainability and incremental growth through small commits. Since this is an institutional site without complex business logic at this stage, clarity was prioritized over over-engineering.
Core structural principles:
- a single routes file
- one controller per section
- views separated by content domain
- reusable partials for layout and SEO
## Current Scope
At this initial stage the project includes:
- base SSR structure with Express
- general layout with EJS
- main public routes
- basic SEO metadata
- minimal views per section
Not yet included:
- database
- online reservations
- admin panel
- persistent forms
- complex business logic
## Project Note
This project corresponds to an SEO-oriented institutional dental page aimed at client acquisition. Its purpose is to present relevant clinic information, its treatments, professional team and spaces, with a clean and maintainable technical foundation to keep growing.
