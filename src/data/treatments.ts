import type { Language } from "../config/i18n.js";
import type { TreatmentDetail } from "../types/treatments.js";

export const treatmentDetails: TreatmentDetail[] = [
  {
    benefits: [
      "Diagnóstico estético para elegir entre resina o cerámica.",
      "Plan según forma, color, proporción y expectativas del paciente.",
      "Opciones de acabado plano o estratificado según el caso."
    ],
    duration: "La valoración define el material, el número de dientes y las fases necesarias. Algunas opciones se realizan en 2 horas y otras requieren laboratorio.",
    expectedResults: [
      "Sonrisa más armónica y luminosa.",
      "Mejor proporción entre dientes, labios y rostro.",
      "Resultado personalizado según el material elegido."
    ],
    eyebrow: "Diseño estético personalizado",
    faqs: [
      {
        answer: "Trabajamos diseños en resina y en cerámica. En resina puede ser microdiseño, diseño plano o diseño estratificado. En cerámica puede ser plano o estratificado.",
        question: "¿Qué tipos de diseño manejan?"
      },
      {
        answer: "Depende del resultado que buscas, el estado de tus dientes, el tiempo disponible y la recomendación clínica durante la valoración.",
        question: "¿Cómo elijo entre resina y cerámica?"
      },
      {
        answer: "No siempre. Primero revisamos color, forma, bordes, mordida y expectativas para indicar una opción que se vea estética y natural.",
        question: "¿Todos necesitan el mismo diseño?"
      }
    ],
    heroImage: "/assets/results/case-1-after.jpg",
    icon: "sparkles",
    process: [
      {
        description: "Revisamos tu sonrisa, tono dental, bordes, proporciones y objetivo estético.",
        title: "Valoración"
      },
      {
        description: "Elegimos material, acabado y alcance del tratamiento: microdiseño, resina o cerámica.",
        title: "Plan de diseño"
      },
      {
        description: "Realizamos el procedimiento en clínica o coordinamos el proceso con laboratorio si es cerámica.",
        title: "Transformación"
      }
    ],
    seoDescription: "Diseños de sonrisa en Medellín en resina y cerámica: microdiseño, diseño plano y diseño estratificado en Dental Expertos.",
    seoKeywords: "diseño de sonrisa medellin, diseño en resina medellin, diseño en ceramica medellin, microdiseño dental",
    slug: "diseno-de-sonrisa",
    summary: "Diseños de sonrisa en resina y cerámica, pensados para transformar forma, color y armonía dental de manera personalizada.",
    title: "Diseño de Sonrisa",
    whatsappText: "Hola Dental Expertos, quiero una valoración para diseño de sonrisa."
  },
  {
    benefits: [
      "Se realiza en resina.",
      "Trabaja los bordes de los 6 dientes anteriores.",
      "Incluye 3 sesiones previas de aclaramiento dental."
    ],
    duration: "Después de las 3 sesiones de aclaramiento, el microdiseño se realiza aproximadamente en 2 horas.",
    expectedResults: [
      "Bordes más definidos y armónicos.",
      "Sonrisa más limpia y luminosa.",
      "Cambio sutil sin cubrir toda la superficie del diente."
    ],
    eyebrow: "Resina | cambio sutil",
    faqs: [
      {
        answer: "El microdiseño se enfoca en los bordes de los 6 dientes anteriores, ideal para mejorar pequeños detalles de forma y longitud.",
        question: "¿Qué dientes se trabajan?"
      },
      {
        answer: "Sí. Antes del procedimiento se realizan 3 sesiones de aclaramiento dental para lograr una base de color más estética.",
        question: "¿Incluye aclaramiento?"
      },
      {
        answer: "No. Es una alternativa más conservadora porque no cubre toda la superficie dental, sino principalmente los bordes.",
        question: "¿Es igual a un diseño completo?"
      }
    ],
    heroImage: "/assets/results/case-4-after.jpg",
    icon: "wand-sparkles",
    process: [
      {
        description: "Preparamos el color de la sonrisa con 3 sesiones de aclaramiento dental.",
        title: "Aclaramiento"
      },
      {
        description: "Definimos la forma de los bordes en los 6 dientes anteriores.",
        title: "Diseño de bordes"
      },
      {
        description: "Aplicamos resina, pulimos y ajustamos los detalles finales en una cita de aproximadamente 2 horas.",
        title: "Acabado"
      }
    ],
    seoDescription: "Microdiseño dental en resina en Medellín con aclaramiento previo y trabajo en bordes de los dientes anteriores.",
    seoKeywords: "microdiseño dental medellin, microdiseño en resina, aclaramiento dental medellin",
    slug: "microdiseno-en-resina",
    summary: "Una opción en resina para perfeccionar los bordes de los 6 dientes anteriores con aclaramiento previo.",
    title: "Microdiseño en Resina",
    whatsappText: "Hola Dental Expertos, quiero información sobre microdiseño en resina."
  },
  {
    benefits: [
      "Cubre la superficie del diente con el color elegido por el paciente.",
      "Puede realizarse como diseño plano o diseño estratificado.",
      "Se realiza aproximadamente en 2 horas."
    ],
    duration: "El diseño en resina se realiza aproximadamente en 2 horas, según el número de dientes y el acabado elegido.",
    expectedResults: [
      "Cambio visible de color y forma.",
      "Sonrisa más uniforme.",
      "Resultado estético en una cita corta."
    ],
    eyebrow: "Resina | plano o estratificado",
    faqs: [
      {
        answer: "En este diseño se cubre la superficie del diente con el color elegido por el paciente para mejorar forma, tono y armonía.",
        question: "¿Qué se hace en el diente?"
      },
      {
        answer: "Sí. Según el caso se puede hacer diseño plano o estratificado, buscando el acabado que mejor se adapte a la sonrisa.",
        question: "¿Tiene variantes?"
      },
      {
        answer: "Usualmente se realiza en aproximadamente 2 horas, aunque puede variar según el número de dientes a tratar.",
        question: "¿Cuánto tarda?"
      }
    ],
    heroImage: "/assets/results/case-3-after.jpg",
    icon: "layers",
    process: [
      {
        description: "Elegimos el color y el tipo de acabado: plano o estratificado.",
        title: "Selección estética"
      },
      {
        description: "Cubrimos la superficie del diente con resina según el diseño acordado.",
        title: "Aplicación"
      },
      {
        description: "Pulimos, ajustamos forma y revisamos la armonía final de la sonrisa.",
        title: "Pulido final"
      }
    ],
    seoDescription: "Diseño de sonrisa en resina en Medellín: diseño plano o estratificado con cambio de color y forma dental.",
    seoKeywords: "diseño en resina medellin, diseño plano en resina, diseño estratificado en resina",
    slug: "diseno-en-resina",
    summary: "Diseño en resina para cubrir la superficie dental con el color elegido y un acabado plano o estratificado.",
    title: "Diseño en Resina",
    whatsappText: "Hola Dental Expertos, quiero información sobre diseño de sonrisa en resina."
  },
  {
    benefits: [
      "Se realiza con escaneo digital.",
      "El caso se envía al laboratorio para fabricar las piezas.",
      "Incluye varias pruebas hasta lograr el resultado perfecto."
    ],
    duration: "Usualmente requiere aproximadamente 8 días, porque incluye escaneo, laboratorio y pruebas clínicas.",
    expectedResults: [
      "Acabado de alta estética.",
      "Diseño plano o estratificado según el caso.",
      "Resultado preciso con proceso de laboratorio."
    ],
    eyebrow: "Cerámica | laboratorio",
    faqs: [
      {
        answer: "Primero se realiza un escaneo, luego el caso se envía al laboratorio y se hacen pruebas hasta que el resultado quede perfecto.",
        question: "¿Cómo es el proceso?"
      },
      {
        answer: "Sí. En cerámica puede hacerse diseño plano o diseño estratificado, según la estética que se busque.",
        question: "¿También tiene variantes?"
      },
      {
        answer: "Usualmente toma alrededor de 8 días por el trabajo de laboratorio y las pruebas necesarias.",
        question: "¿Por qué tarda más?"
      }
    ],
    heroImage: "/assets/results/case-2-after.jpg",
    icon: "gem",
    process: [
      {
        description: "Realizamos el escaneo de la sonrisa para planear las piezas con precisión.",
        title: "Escaneo"
      },
      {
        description: "Enviamos el diseño al laboratorio para elaborar la cerámica.",
        title: "Laboratorio"
      },
      {
        description: "Probamos, ajustamos y finalizamos cuando el diseño se vea y se sienta perfecto.",
        title: "Pruebas"
      }
    ],
    seoDescription: "Diseño de sonrisa en cerámica en Medellín con escaneo digital, laboratorio y pruebas estéticas.",
    seoKeywords: "diseño en ceramica medellin, carillas ceramicas medellin, diseño de sonrisa ceramica",
    slug: "diseno-en-ceramica",
    summary: "Diseño en cerámica con escaneo, laboratorio y pruebas para lograr un resultado estético de alta precisión.",
    title: "Diseño en Cerámica",
    whatsappText: "Hola Dental Expertos, quiero información sobre diseño de sonrisa en cerámica."
  }
];

const englishTreatmentDetails: TreatmentDetail[] = [
  {
    benefits: [
      "Aesthetic diagnosis to choose between composite resin or ceramic.",
      "A plan based on shape, shade, proportions and patient expectations.",
      "Flat or layered finish options depending on the case."
    ],
    duration: "The assessment defines the material, number of teeth and required phases. Some options are completed in 2 hours and others require lab work.",
    expectedResults: [
      "A more harmonious and luminous smile.",
      "Better proportion between teeth, lips and face.",
      "A personalized result according to the selected material."
    ],
    eyebrow: "Personalized aesthetic design",
    faqs: [
      {
        answer: "We offer composite resin and ceramic smile designs. Composite can be micro design, flat design or layered design. Ceramic can be flat or layered.",
        question: "What types of design do you offer?"
      },
      {
        answer: "It depends on the result you want, your dental condition, available time and the clinical recommendation during assessment.",
        question: "How do I choose between resin and ceramic?"
      },
      {
        answer: "Not always. We first review shade, shape, edges, bite and expectations to recommend an aesthetic and natural option.",
        question: "Does everyone need the same design?"
      }
    ],
    heroImage: "/assets/results/case-1-after.jpg",
    icon: "sparkles",
    process: [
      {
        description: "We review your smile, tooth shade, edges, proportions and aesthetic goal.",
        title: "Assessment"
      },
      {
        description: "We choose the material, finish and treatment scope: micro design, resin or ceramic.",
        title: "Design plan"
      },
      {
        description: "We complete the procedure in clinic or coordinate the lab process when ceramic is selected.",
        title: "Transformation"
      }
    ],
    seoDescription: "Smile design in Medellin with composite resin and ceramic options: micro design, flat design and layered design at Dental Expertos.",
    seoKeywords: "smile design medellin, composite smile design medellin, ceramic veneers medellin, dental micro design",
    slug: "diseno-de-sonrisa",
    summary: "Composite resin and ceramic smile designs created to transform dental shape, shade and harmony in a personalized way.",
    title: "Smile Design",
    whatsappText: "Hello Dental Expertos, I would like an assessment for smile design."
  },
  {
    benefits: [
      "Made with composite resin.",
      "Focuses on the edges of the 6 anterior teeth.",
      "Includes 3 previous dental whitening sessions."
    ],
    duration: "After the 3 whitening sessions, the micro design is completed in approximately 2 hours.",
    expectedResults: [
      "More defined and harmonious edges.",
      "A cleaner and brighter smile.",
      "A subtle change without covering the entire tooth surface."
    ],
    eyebrow: "Resin | subtle change",
    faqs: [
      {
        answer: "Micro design focuses on the edges of the 6 anterior teeth, ideal for improving small details in shape and length.",
        question: "Which teeth are treated?"
      },
      {
        answer: "Yes. Before the procedure, 3 dental whitening sessions are completed to create a better aesthetic shade base.",
        question: "Does it include whitening?"
      },
      {
        answer: "No. It is a more conservative alternative because it does not cover the entire dental surface, mainly the edges.",
        question: "Is it the same as a full design?"
      }
    ],
    heroImage: "/assets/results/case-4-after.jpg",
    icon: "wand-sparkles",
    process: [
      {
        description: "We prepare the smile shade with 3 dental whitening sessions.",
        title: "Whitening"
      },
      {
        description: "We define the edge shape on the 6 anterior teeth.",
        title: "Edge design"
      },
      {
        description: "We apply resin, polish and adjust final details in an appointment of approximately 2 hours.",
        title: "Finish"
      }
    ],
    seoDescription: "Composite resin dental micro design in Medellin with previous whitening and edge work on anterior teeth.",
    seoKeywords: "dental micro design medellin, composite micro design, dental whitening medellin",
    slug: "microdiseno-en-resina",
    summary: "A composite resin option to refine the edges of the 6 anterior teeth with previous whitening.",
    title: "Composite Micro Design",
    whatsappText: "Hello Dental Expertos, I would like information about composite micro design."
  },
  {
    benefits: [
      "Covers the tooth surface with the shade selected by the patient.",
      "Can be completed as a flat or layered design.",
      "Completed in approximately 2 hours."
    ],
    duration: "Composite resin smile design is completed in approximately 2 hours, depending on the number of teeth and finish selected.",
    expectedResults: [
      "Visible change in shade and shape.",
      "A more uniform smile.",
      "An aesthetic result in a short appointment."
    ],
    eyebrow: "Resin | flat or layered",
    faqs: [
      {
        answer: "The tooth surface is covered with the shade selected by the patient to improve shape, tone and harmony.",
        question: "What is done to the tooth?"
      },
      {
        answer: "Yes. Depending on the case, it can be a flat or layered design, seeking the finish that best fits the smile.",
        question: "Does it have variants?"
      },
      {
        answer: "It is usually completed in approximately 2 hours, although this may vary depending on the number of teeth treated.",
        question: "How long does it take?"
      }
    ],
    heroImage: "/assets/results/case-3-after.jpg",
    icon: "layers",
    process: [
      {
        description: "We choose the shade and type of finish: flat or layered.",
        title: "Aesthetic selection"
      },
      {
        description: "We cover the tooth surface with resin according to the agreed design.",
        title: "Application"
      },
      {
        description: "We polish, adjust shape and review final smile harmony.",
        title: "Final polish"
      }
    ],
    seoDescription: "Composite resin smile design in Medellin: flat or layered design to change dental shade and shape.",
    seoKeywords: "composite resin smile design medellin, flat resin design, layered resin design",
    slug: "diseno-en-resina",
    summary: "Composite resin design to cover the dental surface with the selected shade and a flat or layered finish.",
    title: "Composite Resin Design",
    whatsappText: "Hello Dental Expertos, I would like information about composite resin smile design."
  },
  {
    benefits: [
      "Starts with a digital scan.",
      "The case is sent to the lab to create the pieces.",
      "Includes several try-ins until the result is perfect."
    ],
    duration: "It usually requires approximately 8 days because it includes scanning, lab work and clinical try-ins.",
    expectedResults: [
      "High-aesthetic finish.",
      "Flat or layered design depending on the case.",
      "Precise result with a lab-based process."
    ],
    eyebrow: "Ceramic | lab process",
    faqs: [
      {
        answer: "First we complete a scan, then the case is sent to the lab and try-ins are done until the result is perfect.",
        question: "What is the process like?"
      },
      {
        answer: "Yes. Ceramic can be completed as a flat or layered design, depending on the aesthetic goal.",
        question: "Does it also have variants?"
      },
      {
        answer: "It usually takes around 8 days because of the lab work and required try-ins.",
        question: "Why does it take longer?"
      }
    ],
    heroImage: "/assets/results/case-2-after.jpg",
    icon: "gem",
    process: [
      {
        description: "We scan the smile to plan the pieces with precision.",
        title: "Scanning"
      },
      {
        description: "We send the design to the lab so the ceramic pieces can be created.",
        title: "Laboratory"
      },
      {
        description: "We try in, adjust and finish when the design looks and feels perfect.",
        title: "Try-ins"
      }
    ],
    seoDescription: "Ceramic smile design in Medellin with digital scanning, lab work and aesthetic try-ins.",
    seoKeywords: "ceramic smile design medellin, ceramic veneers medellin, ceramic dental design",
    slug: "diseno-en-ceramica",
    summary: "Ceramic design with scanning, laboratory work and try-ins for a high-precision aesthetic result.",
    title: "Ceramic Smile Design",
    whatsappText: "Hello Dental Expertos, I would like information about ceramic smile design."
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
