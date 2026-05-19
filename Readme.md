# ProyectoIntegrador2

## Descripcion del negocio

Sitio institucional odontológico desarrollado con renderizado del lado del servidor para presentar información clave de la clínica y apoyar la captación de clientes.

## Stack Tecnológico

- Express
- TypeScript (ESM)
- EJS
- express-ejs-layouts
- Tailwind CSS

## Scripts principales

- `npm run dev`: inicia el servidor SSR en desarrollo
- `npm run dev:css`: compila Tailwind en modo watch hacia `public/css/styles.css`
- `npm run build`: compila TypeScript, copia vistas y archivos estáticos, y genera los assets necesarios para `dist`
- `npm run start`: ejecuta la aplicación en modo producción

## Instalación y ejecución

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar Tailwind en desarrollo:

```bash
npm run dev:css
```

3. Ejecutar el servidor:

```bash
npm run dev
```

## Build de producción

```bash
npm run build
npm run start
```

## Estructura de carpetas

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

## Decisión de arquitectura

Se eligió una arquitectura simple y plana para facilitar la mantenibilidad y el crecimiento incremental por commits pequeños. Dado que se trata de un sitio institucional sin lógica de negocio compleja en esta etapa, se priorizó claridad sobre sobreingeniería.

Principios base de la estructura:

- un único archivo de rutas
- un controller por sección
- vistas separadas por dominio de contenido
- partials reutilizables para layout y SEO

## Alcance actual

En esta etapa inicial el proyecto incluye:

- estructura SSR base con Express
- layout general con EJS
- rutas públicas principales
- metadata SEO básica
- vistas mínimas por sección

Aún no incluye:

- base de datos
- reservas en línea
- panel administrativo
- formularios persistentes
- lógica de negocio compleja

## Nota del proyecto

Este proyecto corresponde a una página institucional odontológica orientada a SEO y captación de clientes. Su propósito es presentar información relevante de la clínica, sus tratamientos, su equipo profesional y sus espacios, con una base técnica limpia y mantenible para seguir creciendo.
