import type { Language } from "../config/i18n.js";
import type { TreatmentDetail } from "../types/treatments.js";

export const treatmentDetails: TreatmentDetail[] = [
  {
    benefits: [
      "Armonia entre dientes, labios y rostro.",
      "Plan estetico personalizado antes de iniciar.",
      "Resultados naturales, luminosos y proporcionados."
    ],
    duration: "Valoracion inicial de 45 a 60 minutos. El plan completo puede tomar de 2 a 4 citas segun el caso.",
    expectedResults: [
      "Sonrisa mas equilibrada y expresiva.",
      "Mejor forma, color y proporcion dental.",
      "Mayor seguridad al sonreir y hablar."
    ],
    eyebrow: "Estetica dental personalizada",
    faqs: [
      {
        answer: "No siempre. El diseno puede combinar limpieza, blanqueamiento, resinas, carillas u otros procedimientos segun el diagnostico.",
        question: "¿Siempre necesito carillas?"
      },
      {
        answer: "El equipo evalua color, forma, mordida, encia y armonia facial antes de recomendar un plan.",
        question: "¿Como saben que diseno me queda bien?"
      },
      {
        answer: "Depende del material elegido, tus habitos y los controles periodicos. La valoracion define la opcion mas conveniente.",
        question: "¿Cuanto dura el resultado?"
      }
    ],
    heroImage: "/assets/results/case-1-after.jpg",
    icon: "sparkles",
    process: [
      {
        description: "Revisamos tus objetivos, fotografias, estado dental, encia y mordida.",
        title: "Valoracion estetica"
      },
      {
        description: "Definimos proporciones, color y tratamientos necesarios para lograr una sonrisa armonica.",
        title: "Plan de sonrisa"
      },
      {
        description: "Realizamos el tratamiento por fases, cuidando funcion, naturalidad y confort.",
        title: "Transformacion"
      }
    ],
    seoDescription: "Diseño de sonrisa en Medellín con valoración estética, plan personalizado y resultados naturales en Dental Expertos Guayabal.",
    seoKeywords: "diseño de sonrisa medellin, valoracion diseño de sonrisa, clinica odontologica estetica guayabal",
    slug: "diseno-de-sonrisa",
    summary: "Un plan estetico integral para crear una sonrisa armonica, natural y coherente con tu rostro.",
    title: "Diseño de Sonrisa",
    whatsappText: "Hola Dental Expertos, quiero una valoracion para diseño de sonrisa."
  },
  {
    benefits: [
      "Mejora rapida de forma, color y textura dental.",
      "Acabado natural segun tu rostro y tono de sonrisa.",
      "Opcion ideal para fracturas, manchas o dientes desgastados."
    ],
    duration: "Entre 2 y 3 citas despues de la valoracion, segun el material y la complejidad del caso.",
    expectedResults: [
      "Dientes con forma mas uniforme.",
      "Color mas claro y estable.",
      "Sonrisa estetica sin perder naturalidad."
    ],
    eyebrow: "Carillas esteticas",
    faqs: [
      {
        answer: "No en todos los casos. La indicacion depende de tus dientes, mordida, color y expectativas.",
        question: "¿Las carillas son para todos?"
      },
      {
        answer: "Las carillas en resina y ceramica tienen indicaciones distintas. La doctora te orienta segun durabilidad, presupuesto y resultado esperado.",
        question: "¿Resina o ceramica?"
      },
      {
        answer: "Con buenos habitos y controles, pueden conservarse muy bien. Evitar morder objetos duros ayuda mucho.",
        question: "¿Requieren cuidados especiales?"
      }
    ],
    heroImage: "/assets/results/case-3-after.jpg",
    icon: "gem",
    process: [
      {
        description: "Evaluamos color, forma, mordida y espacio disponible para un resultado estable.",
        title: "Diagnostico"
      },
      {
        description: "Definimos material, tono, forma y numero de dientes a tratar.",
        title: "Diseño"
      },
      {
        description: "Aplicamos o cementamos las carillas y hacemos ajustes finos de brillo, forma y mordida.",
        title: "Colocacion"
      }
    ],
    seoDescription: "Carillas dentales en Medellín para mejorar color, forma y armonía de la sonrisa con acabado natural en Dental Expertos.",
    seoKeywords: "carillas dentales medellin, carillas en resina medellin, estetica dental guayabal",
    slug: "carillas",
    summary: "Carillas para transformar color, forma y proporcion dental con una apariencia elegante y natural.",
    title: "Carillas Dentales",
    whatsappText: "Hola Dental Expertos, quiero informacion sobre carillas dentales."
  },
  {
    benefits: [
      "Alineacion dental con opciones discretas.",
      "Mejora estetica y funcional de la mordida.",
      "Plan de seguimiento segun tu evolucion."
    ],
    duration: "La valoracion toma cerca de 45 minutos. El tratamiento completo puede variar de 8 a 24 meses segun el caso.",
    expectedResults: [
      "Dientes mejor alineados.",
      "Sonrisa mas ordenada y funcional.",
      "Mejor distribucion de fuerzas al morder."
    ],
    eyebrow: "Alineacion discreta",
    faqs: [
      {
        answer: "Depende del diagnostico. En valoracion se revisa si aplican brackets esteticos, alineadores u otra alternativa.",
        question: "¿Puedo usar una opcion invisible?"
      },
      {
        answer: "El tiempo depende de apiñamiento, mordida, edad, controles y respuesta biologica.",
        question: "¿Cuanto tarda la ortodoncia?"
      },
      {
        answer: "Si. La ortodoncia estetica busca alinear sin descuidar funcion y estabilidad.",
        question: "¿Tambien mejora la mordida?"
      }
    ],
    heroImage: "/assets/results/case-2-after.jpg",
    icon: "align-center",
    process: [
      {
        description: "Analizamos alineacion, mordida, espacio, fotografias y necesidades esteticas.",
        title: "Estudio inicial"
      },
      {
        description: "Definimos el sistema ideal y la secuencia de movimientos.",
        title: "Plan ortodontico"
      },
      {
        description: "Realizamos controles para ajustar fuerzas y revisar avances.",
        title: "Seguimiento"
      }
    ],
    seoDescription: "Ortodoncia estética en Medellín con opciones discretas para alinear tu sonrisa en Dental Expertos Guayabal.",
    seoKeywords: "ortodoncia estetica medellin, brackets esteticos medellin, alineacion dental guayabal",
    slug: "ortodoncia-estetica",
    summary: "Opciones discretas para alinear tus dientes cuidando estetica, funcion y comodidad.",
    title: "Ortodoncia Estética",
    whatsappText: "Hola Dental Expertos, quiero informacion sobre ortodoncia estetica."
  },
  {
    benefits: [
      "Sonrisa mas luminosa en poco tiempo.",
      "Procedimiento profesional y controlado.",
      "Ideal antes de eventos o como parte de un diseño de sonrisa."
    ],
    duration: "Una valoracion previa y una sesion clinica segun sensibilidad, tono inicial y objetivo estetico.",
    expectedResults: [
      "Color dental mas claro.",
      "Apariencia mas fresca y juvenil.",
      "Mejor base estetica para otros tratamientos."
    ],
    eyebrow: "Aclaramiento profesional",
    faqs: [
      {
        answer: "Puede presentarse sensibilidad temporal. Por eso se evalua tu caso antes de iniciar.",
        question: "¿Produce sensibilidad?"
      },
      {
        answer: "Depende del color inicial, habitos y respuesta dental. La valoracion permite estimar expectativas realistas.",
        question: "¿Cuantos tonos puedo aclarar?"
      },
      {
        answer: "Si existen caries, inflamacion o restauraciones antiguas, puede ser necesario tratarlas primero.",
        question: "¿Puedo hacerlo de inmediato?"
      }
    ],
    heroImage: "/assets/results/case-4-after.jpg",
    icon: "lightbulb",
    process: [
      {
        description: "Revisamos salud dental, sensibilidad y tono actual.",
        title: "Valoracion"
      },
      {
        description: "Protegemos tejidos y aplicamos el protocolo indicado para tu caso.",
        title: "Sesion clinica"
      },
      {
        description: "Te entregamos recomendaciones para cuidar el resultado.",
        title: "Mantenimiento"
      }
    ],
    seoDescription: "Blanqueamiento dental profesional en Medellín para una sonrisa más luminosa y cuidada en Dental Expertos.",
    seoKeywords: "blanqueamiento dental medellin, aclaramiento dental profesional, sonrisa blanca medellin",
    slug: "blanqueamiento",
    summary: "Un tratamiento profesional para aclarar tu sonrisa de forma controlada y estetica.",
    title: "Blanqueamiento Dental",
    whatsappText: "Hola Dental Expertos, quiero informacion sobre blanqueamiento dental."
  },
  {
    benefits: [
      "Reposicion dental con apariencia natural.",
      "Mejora de funcion, sonrisa y seguridad.",
      "Plan integral desde diagnostico hasta restauracion final."
    ],
    duration: "La valoracion toma cerca de 60 minutos. El proceso completo depende de diagnostico, cicatrizacion y restauracion.",
    expectedResults: [
      "Diente fijo con apariencia natural.",
      "Mejor capacidad para masticar.",
      "Sonrisa mas completa y estable."
    ],
    eyebrow: "Implantes y rehabilitacion",
    faqs: [
      {
        answer: "Primero se revisa hueso, encia, salud general y expectativas. No todos los casos se resuelven igual.",
        question: "¿Como se si soy candidato?"
      },
      {
        answer: "El equipo te explica fases, anestesia y cuidados para que el proceso sea lo mas comodo posible.",
        question: "¿El procedimiento duele?"
      },
      {
        answer: "Depende de cicatrizacion, necesidad de injertos y tipo de restauracion. Se define en la valoracion.",
        question: "¿Cuanto tarda el tratamiento?"
      }
    ],
    heroImage: "/img/about/nosotros.png",
    icon: "shield-check",
    process: [
      {
        description: "Evaluamos hueso, encia, mordida y expectativas esteticas.",
        title: "Diagnostico integral"
      },
      {
        description: "Definimos tiempos quirurgicos, restauracion y cuidados.",
        title: "Plan clinico"
      },
      {
        description: "Colocamos la restauracion final buscando funcion y naturalidad.",
        title: "Rehabilitacion"
      }
    ],
    seoDescription: "Implantes estéticos en Medellín con diagnóstico integral, rehabilitación y restauraciones naturales en Dental Expertos.",
    seoKeywords: "implantes dentales medellin, implantes esteticos medellin, rehabilitacion oral guayabal",
    slug: "implantes-esteticos",
    summary: "Soluciones para recuperar dientes perdidos con estabilidad, funcion y estetica natural.",
    title: "Implantes Estéticos",
    whatsappText: "Hola Dental Expertos, quiero informacion sobre implantes esteticos."
  }
];

const englishTreatmentDetails: TreatmentDetail[] = [
  {
    benefits: [
      "Harmony between teeth, lips and face.",
      "Personalized aesthetic plan before starting.",
      "Natural, luminous and proportionate results."
    ],
    duration: "Initial assessment of 45 to 60 minutes. The complete plan may take 2 to 4 appointments depending on the case.",
    expectedResults: [
      "A more balanced and expressive smile.",
      "Improved dental shape, color and proportions.",
      "More confidence when smiling and speaking."
    ],
    eyebrow: "Personalized cosmetic dentistry",
    faqs: [
      {
        answer: "Not always. Smile design can combine cleaning, whitening, bonding, veneers or other procedures depending on the diagnosis.",
        question: "Do I always need veneers?"
      },
      {
        answer: "The team evaluates color, shape, bite, gums and facial harmony before recommending a plan.",
        question: "How do you know which design suits me?"
      },
      {
        answer: "It depends on the selected material, your habits and regular checkups. The assessment defines the best option.",
        question: "How long does the result last?"
      }
    ],
    heroImage: "/assets/results/case-1-after.jpg",
    icon: "sparkles",
    process: [
      {
        description: "We review your goals, photographs, dental condition, gums and bite.",
        title: "Aesthetic assessment"
      },
      {
        description: "We define proportions, color and the treatments needed to achieve a harmonious smile.",
        title: "Smile plan"
      },
      {
        description: "We complete treatment in phases, caring for function, naturalness and comfort.",
        title: "Transformation"
      }
    ],
    seoDescription: "Smile design in Medellin with aesthetic assessment, personalized planning and natural results at Dental Expertos Guayabal.",
    seoKeywords: "smile design medellin, smile design consultation, aesthetic dental clinic guayabal",
    slug: "diseno-de-sonrisa",
    summary: "A comprehensive aesthetic plan to create a harmonious, natural smile that fits your face.",
    title: "Smile Design",
    whatsappText: "Hello Dental Expertos, I would like an assessment for smile design."
  },
  {
    benefits: [
      "Fast improvement in dental shape, color and texture.",
      "Natural finish according to your face and smile tone.",
      "Ideal for fractures, stains or worn teeth."
    ],
    duration: "Between 2 and 3 appointments after the assessment, depending on the material and complexity of the case.",
    expectedResults: [
      "Teeth with a more uniform shape.",
      "A brighter and more stable color.",
      "An aesthetic smile without losing naturalness."
    ],
    eyebrow: "Aesthetic veneers",
    faqs: [
      {
        answer: "Not in every case. The indication depends on your teeth, bite, color and expectations.",
        question: "Are veneers for everyone?"
      },
      {
        answer: "Composite and ceramic veneers have different indications. Your dentist will guide you according to durability, budget and expected result.",
        question: "Composite or ceramic?"
      },
      {
        answer: "With good habits and checkups, they can remain in excellent condition. Avoiding hard objects helps a lot.",
        question: "Do they require special care?"
      }
    ],
    heroImage: "/assets/results/case-3-after.jpg",
    icon: "gem",
    process: [
      {
        description: "We evaluate color, shape, bite and available space for a stable result.",
        title: "Diagnosis"
      },
      {
        description: "We define material, shade, shape and number of teeth to treat.",
        title: "Design"
      },
      {
        description: "We apply or bond the veneers and make fine adjustments to shine, shape and bite.",
        title: "Placement"
      }
    ],
    seoDescription: "Dental veneers in Medellin to improve color, shape and smile harmony with a natural finish at Dental Expertos.",
    seoKeywords: "dental veneers medellin, composite veneers medellin, cosmetic dentistry guayabal",
    slug: "carillas",
    summary: "Veneers to transform dental color, shape and proportion with an elegant, natural appearance.",
    title: "Dental Veneers",
    whatsappText: "Hello Dental Expertos, I would like information about dental veneers."
  },
  {
    benefits: [
      "Dental alignment with discreet options.",
      "Aesthetic and functional bite improvement.",
      "Follow-up plan according to your progress."
    ],
    duration: "The assessment takes about 45 minutes. Complete treatment can vary from 8 to 24 months depending on the case.",
    expectedResults: [
      "Better aligned teeth.",
      "A more organized and functional smile.",
      "Better force distribution when biting."
    ],
    eyebrow: "Discreet alignment",
    faqs: [
      {
        answer: "It depends on the diagnosis. During the assessment we review whether aesthetic braces, aligners or another alternative applies.",
        question: "Can I use an invisible option?"
      },
      {
        answer: "Timing depends on crowding, bite, age, checkups and biological response.",
        question: "How long does orthodontic treatment take?"
      },
      {
        answer: "Yes. Aesthetic orthodontics seeks alignment while caring for function and stability.",
        question: "Does it also improve my bite?"
      }
    ],
    heroImage: "/assets/results/case-2-after.jpg",
    icon: "align-center",
    process: [
      {
        description: "We analyze alignment, bite, space, photographs and aesthetic needs.",
        title: "Initial study"
      },
      {
        description: "We define the ideal system and movement sequence.",
        title: "Orthodontic plan"
      },
      {
        description: "We complete checkups to adjust forces and review progress.",
        title: "Follow-up"
      }
    ],
    seoDescription: "Aesthetic orthodontics in Medellin with discreet options to align your smile at Dental Expertos Guayabal.",
    seoKeywords: "aesthetic orthodontics medellin, aesthetic braces medellin, dental alignment guayabal",
    slug: "ortodoncia-estetica",
    summary: "Discreet options to align your teeth while caring for aesthetics, function and comfort.",
    title: "Aesthetic Orthodontics",
    whatsappText: "Hello Dental Expertos, I would like information about aesthetic orthodontics."
  },
  {
    benefits: [
      "A brighter smile in little time.",
      "Professional and controlled procedure.",
      "Ideal before events or as part of a smile design."
    ],
    duration: "A prior assessment and one clinical session depending on sensitivity, initial shade and aesthetic goal.",
    expectedResults: [
      "A lighter dental shade.",
      "A fresher, more youthful appearance.",
      "A better aesthetic base for other treatments."
    ],
    eyebrow: "Professional whitening",
    faqs: [
      {
        answer: "Temporary sensitivity may occur. That is why we evaluate your case before starting.",
        question: "Does it cause sensitivity?"
      },
      {
        answer: "It depends on your initial shade, habits and dental response. The assessment helps set realistic expectations.",
        question: "How many shades can I whiten?"
      },
      {
        answer: "If there are cavities, inflammation or old restorations, they may need to be treated first.",
        question: "Can I do it right away?"
      }
    ],
    heroImage: "/assets/results/case-4-after.jpg",
    icon: "lightbulb",
    process: [
      {
        description: "We review dental health, sensitivity and current shade.",
        title: "Assessment"
      },
      {
        description: "We protect tissues and apply the protocol indicated for your case.",
        title: "Clinical session"
      },
      {
        description: "We give you recommendations to care for the result.",
        title: "Maintenance"
      }
    ],
    seoDescription: "Professional dental whitening in Medellin for a brighter, well-cared-for smile at Dental Expertos.",
    seoKeywords: "dental whitening medellin, professional teeth whitening, white smile medellin",
    slug: "blanqueamiento",
    summary: "A professional treatment to brighten your smile in a controlled and aesthetic way.",
    title: "Dental Whitening",
    whatsappText: "Hello Dental Expertos, I would like information about dental whitening."
  },
  {
    benefits: [
      "Tooth replacement with a natural appearance.",
      "Improved function, smile and confidence.",
      "Comprehensive plan from diagnosis to final restoration."
    ],
    duration: "The assessment takes about 60 minutes. The full process depends on diagnosis, healing and restoration.",
    expectedResults: [
      "A fixed tooth with a natural appearance.",
      "Improved chewing ability.",
      "A more complete and stable smile."
    ],
    eyebrow: "Implants and rehabilitation",
    faqs: [
      {
        answer: "First we review bone, gums, general health and expectations. Not every case is solved the same way.",
        question: "How do I know if I am a candidate?"
      },
      {
        answer: "The team explains phases, anesthesia and care so the process feels as comfortable as possible.",
        question: "Does the procedure hurt?"
      },
      {
        answer: "It depends on healing, grafting needs and the type of restoration. This is defined during the assessment.",
        question: "How long does treatment take?"
      }
    ],
    heroImage: "/img/about/nosotros.png",
    icon: "shield-check",
    process: [
      {
        description: "We evaluate bone, gums, bite and aesthetic expectations.",
        title: "Comprehensive diagnosis"
      },
      {
        description: "We define surgical timing, restoration and care.",
        title: "Clinical plan"
      },
      {
        description: "We place the final restoration seeking function and naturalness.",
        title: "Rehabilitation"
      }
    ],
    seoDescription: "Aesthetic dental implants in Medellin with comprehensive diagnosis, rehabilitation and natural restorations at Dental Expertos.",
    seoKeywords: "dental implants medellin, aesthetic implants medellin, oral rehabilitation guayabal",
    slug: "implantes-esteticos",
    summary: "Solutions to replace missing teeth with stability, function and natural aesthetics.",
    title: "Aesthetic Implants",
    whatsappText: "Hello Dental Expertos, I would like information about aesthetic implants."
  }
];

const treatmentDetailsByLanguage: Record<Language, TreatmentDetail[]> = {
  en: englishTreatmentDetails,
  es: treatmentDetails
};

export function getTreatmentDetails(language: Language = "es"): TreatmentDetail[] {
  return treatmentDetailsByLanguage[language];
}

export function findTreatmentBySlug(slug: string, language: Language = "es"): TreatmentDetail | undefined {
  return getTreatmentDetails(language).find((treatment) => treatment.slug === slug);
}
