import type { Request, Response } from "express";

export type Language = "es" | "en";

export const defaultLanguage: Language = "es";
export const supportedLanguages: Language[] = ["es", "en"];

type TranslationKey =
  | "brand.tagline"
  | "nav.home"
  | "nav.about"
  | "nav.treatments"
  | "nav.results"
  | "nav.staff"
  | "nav.contact"
  | "nav.cta"
  | "nav.toggle"
  | "footer.quickLinks"
  | "footer.about"
  | "footer.treatments"
  | "footer.staff"
  | "footer.contact"
  | "footer.contactTitle"
  | "footer.schedule"
  | "footer.weekdays"
  | "footer.saturdays"
  | "footer.closed"
  | "footer.privacy"
  | "footer.terms"
  | "footer.rights"
  | "whatsapp.text";

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    "brand.tagline": "Dental Clinic",
    "footer.about": "About Us",
    "footer.closed": "Closed",
    "footer.contact": "Contact",
    "footer.contactTitle": "Contact",
    "footer.privacy": "Privacy",
    "footer.quickLinks": "Quick Links",
    "footer.rights": "2026 Dental Expertos. All rights reserved.",
    "footer.saturdays": "Saturdays",
    "footer.schedule": "Hours",
    "footer.staff": "Our Team",
    "footer.terms": "Terms",
    "footer.treatments": "Treatments",
    "footer.weekdays": "Monday - Friday",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Book appointment",
    "nav.home": "Home",
    "nav.results": "Results",
    "nav.staff": "Team",
    "nav.toggle": "Toggle menu",
    "nav.treatments": "Treatments",
    "whatsapp.text": "Hello Dental Expertos, I would like to book an appointment"
  } as Record<TranslationKey, string>,
  es: {
    "brand.tagline": "Clínica Odontológica",
    "footer.about": "Sobre Nosotros",
    "footer.closed": "Cerrado",
    "footer.contact": "Contacto",
    "footer.contactTitle": "Contacto",
    "footer.privacy": "Privacidad",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.rights": "2026 Dental Expertos. Todos los derechos reservados.",
    "footer.saturdays": "Sábados",
    "footer.schedule": "Horarios",
    "footer.staff": "Nuestro Equipo",
    "footer.terms": "Términos",
    "footer.treatments": "Tratamientos",
    "footer.weekdays": "Lunes - Viernes",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.cta": "Agenda tu cita",
    "nav.home": "Inicio",
    "nav.results": "Resultados",
    "nav.staff": "Equipo",
    "nav.toggle": "Alternar menú",
    "nav.treatments": "Tratamientos",
    "whatsapp.text": "Hola Dental Expertos, quiero agendar una cita"
  } as Record<TranslationKey, string>
};

export function getLanguageFromRequest(request: Request): Language {
  const firstSegment = request.path.split("/").filter(Boolean)[0];
  return firstSegment === "en" ? "en" : defaultLanguage;
}

export function localizePath(path: string, language: Language): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const pathWithoutLanguage = normalizedPath.replace(/^\/en(?=\/|$)/, "") || "/";

  if (language === defaultLanguage) {
    return pathWithoutLanguage;
  }

  return pathWithoutLanguage === "/" ? `/${language}` : `/${language}${pathWithoutLanguage}`;
}

export function alternateLanguagePath(currentPath: string, language: Language): string {
  return localizePath(currentPath, language === "en" ? "es" : "en");
}

export function translate(language: Language, key: TranslationKey): string {
  return translations[language][key] ?? translations[defaultLanguage][key];
}

export function attachI18nLocals(request: Request, response: Response): void {
  const language = getLanguageFromRequest(request);

  response.locals.language = language;
  response.locals.languagePrefix = language === "en" ? "/en" : "";
  response.locals.isEnglish = language === "en";
  response.locals.localizedPath = (path: string): string => localizePath(path, language);
  response.locals.alternateLanguageUrl = alternateLanguagePath(request.path, language);
  response.locals.t = (key: TranslationKey): string => translate(language, key);
  response.locals.whatsappUrl = (message?: string): string => {
    const text = message ?? translate(language, "whatsapp.text");
    return `https://wa.me/573008938020?text=${encodeURIComponent(text)}`;
  };
}
