# ProyectoIntegrador2

## Descripcion del negocio

Sitio institucional odontológico desarrollado con renderizado del lado del servidor para presentar información clave de la clínica y apoyar la captación de clientes.

## Mision y Vision

Desarrollar una página web institucional para un consultorio odontológico que permita presentar de manera clara y atractiva los servicios, el equipo profesional y la información relevante de la clínica. Además, se busca implementar un sistema de agendamiento en línea que facilite a los usuarios la gestión de citas, mejorando la experiencia del cliente y optimizando la organización interna del consultorio.

Convertir la página web en una plataforma estable, funcional y escalable que apoye el crecimiento del consultorio odontológico a largo plazo. Se espera que evolucione hacia un sistema más completo que incluya gestión de pacientes, administración de citas y herramientas digitales que fortalezcan la presencia en línea y la captación de nuevos clientes.

## Analisis de mercado

## Investigacion de mercado

El desarrollo del presente proyecto se basa en el análisis del comportamiento del sector odontológico y el crecimiento del turismo médico en Colombia, enfocandonos en la ciudad de Medellín.

En los últimos años, Colombia se ha posicionado como un destino atractivo para pacientes internacionales debido a la calidad de sus servicios de salud y a los costos competitivos en comparación con países de Norteamérica. En particular, Medellín ha ganado reconocimiento como un centro importante para el turismo médico, incluyendo tratamientos odontológicos.

Adicionalmente, se ha identificado una tendencia creciente en el uso de plataformas digitales para la búsqueda de servicios de salud, donde los usuarios priorizan la facilidad de acceso a la información, la posibilidad de agendar citas en línea y la confianza que transmite la presencia digital del consultorio.

Este contexto respalda la necesidad de desarrollar una página web institucional que no solo brinde información clara sobre los servicios ofrecidos, sino que también integre funcionalidades como el agendamiento en línea, mejorando así la experiencia del usuario y la captación de clientes internacionales.


## Segmentacion de mercado

El enfoque principal está en pacientes internacionales provenientes de Norteamérica y Centroamérica que visitan Medellín por turismo, negocios o tratamientos médicos. La ubicación del consultorio en la ciudad permite aprovechar el flujo constante de visitantes extranjeros.

## Clientes Objetivo

Los clientes objetivo del consultorio odontológico son principalmente pacientes internacionales que visitan la ciudad de Medellín y buscan servicios odontológicos de alta calidad a precios competitivos.

## Perfil del cliente objetivo
- Turistas provenientes de Norteamérica y Centroamérica
- Personas entre 25 y 65 años
- Nivel socioeconómico medio y alto
- Pacientes que buscan tratamientos odontológicos estéticos o especializados
- Usuarios que valoran la calidad del servicio, la experiencia profesional y la confianza

## Necesidades principales
- Acceso a información clara y confiable sobre tratamientos
- Facilidad para agendar citas en línea
- Atención rápida durante su estadía en la ciudad
- Seguridad y respaldo profesional en los procedimientos
- Comportamiento del cliente

## Comportamiento del cliente

Los clientes objetivo suelen realizar búsquedas en internet antes de tomar decisiones, comparando diferentes opciones disponibles. Además, valoran altamente una presencia digital profesional, opiniones de otros pacientes y la facilidad de contacto con el consultorio. Ademas de preferir consultorios que cuenteen con una pagina web por cuestiones de sensacion de confianza y seguridad, por lo que la pagina web es vital para acaparar mas clientes que se estan dirigiendo a otros consultorios que ya vienen utilizando su propia pagina web.


## Descripción del Producto / Servicio

El producto consiste en una página web institucional desarrollada para un consultorio odontológico ubicado en Medellín, cuyo objetivo es presentar de manera clara y profesional la información del consultorio, sus servicios y su equipo de trabajo.

La plataforma está construida utilizando tecnologías como Express, TypeScript, EJS y Tailwind CSS, permitiendo un renderizado del lado del servidor (SSR) que mejora el rendimiento y la optimización para motores de búsqueda (SEO).

Entre sus principales funcionalidades se incluyen:

- Visualización de servicios odontológicos ofrecidos
- Información del equipo profesional
- Sección de contacto y ubicación
- Estructura optimizada para posicionamiento en buscadores
- Base para la implementación de un sistema de agendamiento en línea

Este producto busca resolver la necesidad de contar con una presencia digital moderna, confiable y accesible, permitiendo a los pacientes conocer el consultorio y sus servicios antes de tomar una decisión.

## Propuesta de Valor

La propuesta de valor del proyecto se centra en ofrecer una plataforma web optimizada para la captación de pacientes internacionales, brindando una experiencia digital clara, confiable y fácil de usar.

Los principales beneficios para el cliente son:

- Acceso rápido a información relevante sobre tratamientos y servicios
- Facilidad para agendar citas en línea (en futuras iteraciones)
- Generación de confianza mediante una presencia digital profesional
- Optimización para motores de búsqueda (SEO), facilitando que el consultorio sea encontrado por nuevos pacientes
- Experiencia enfocada en usuarios internacionales que buscan servicios odontológicos durante su estadía

En este sentido, la solución no solo informa, sino que también actúa como un canal de captación de clientes, mejorando la visibilidad del consultorio y facilitando la toma de decisiones por parte de los pacientes.

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
│   │   ├── MediaController.ts
│   │   ├── StaffController.ts
│   │   └── TreatmentController.ts
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
│   │   ├── media/
│   │   │   ├── before-after.ejs
│   │   │   └── facilities.ejs
│   │   ├── partials/
│   │   │   ├── footer.ejs
│   │   │   ├── header.ejs
│   │   │   └── seo-meta.ejs
│   │   ├── staff/
│   │   │   └── index.ejs
│   │   └── treatments/
│   │       └── index.ejs
│   └── index.ts
├── .gitignore
├── copilot-instructions.md
├── package-lock.json
├── package.json
├── README.md
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
