# Reglas del proyecto

## Objetivo
Construir un sitio institucional odontológico con Express, TypeScript, EJS y Tailwind, enfocado en SSR, SEO y código limpio.

## Arquitectura
- Usar estructura modular por dominio: home, about, contact, staff, treatments, media.
- Separar responsabilidades entre routes, controllers, services, data y views.
- No mezclar lógica de negocio con vistas.
- No colocar datos quemados directamente en los controllers.
- Las vistas deben recibir datos ya preparados.

## SOLID
- Aplicar Single Responsibility Principle en controllers y services.
- Evitar clases o archivos que hagan demasiadas cosas.
- Favorecer funciones y servicios pequeños y reutilizables.
- Mantener dependencias simples y claras.

## TypeScript
- No usar `any`.
- Tipar parámetros, retornos y estructuras de datos.
- Crear tipos o interfaces cuando un objeto se reutilice.
- Usar `type` o `interface` según convenga, priorizando claridad.

## Imports
- Separar imports externos e internos.
- Mantener una línea en blanco entre ambos grupos.
- Ordenar alfabéticamente dentro de cada grupo.
- Usar extensiones `.js` en imports internos cuando el proyecto compile a ESM.

## Controllers
- Deben ser delgados.
- Solo reciben request, llaman servicios y retornan `res.render(...)`.
- No hacer transformaciones complejas dentro del controller.
- No duplicar respuestas HTTP.
- Un método = una responsabilidad.

## Services
- Preparan datos para la vista.
- Pueden componer información de múltiples archivos `data`.
- Deben retornar objetos claros y tipados.
- Evitar dependencias innecesarias entre servicios.

## Data
- Guardar contenido estático inicial del sitio.
- Cada dominio debe tener su propio archivo de datos.
- Mantener nombres consistentes y semánticos.

## Views
- Usar EJS con layouts y partials.
- Evitar lógica compleja en plantillas.
- Reutilizar partials para head, header, footer y SEO meta.
- Mantener contenido semántico: h1, h2, sections, alt descriptivos.

## SEO
- Cada página debe tener title y meta description.
- Usar URLs limpias y semánticas.
- Incluir encabezados jerárquicos correctos.
- Incluir texto descriptivo en imágenes.
- Priorizar contenido útil y legible.

## Estilo general
- Nombres claros en inglés para archivos y código.
- Texto visible al usuario en español.
- Mantener funciones pequeñas.
- Evitar duplicación.
- Antes de crear un archivo nuevo, validar si ya existe una pieza reutilizable.

## Commits
- Hacer commits pequeños y temáticos.
- Cada commit debe dejar el proyecto funcionando.
- No mezclar estructura, estilos y contenido en un mismo commit si se pueden separar. 