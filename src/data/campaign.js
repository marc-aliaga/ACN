// ---------------------------------------------------------------------------
// Copy y datos de la página de campaña (/invierte), la landing a la que
// apuntan los anuncios. Igual que content.js: todo el texto vive aquí para
// poder mejorarlo sin tocar los componentes.
//
// Las cifras y condiciones salen del dossier informativo para inversores
// privados (el mismo PDF que se sirve en DOSSIER_URL) y de content.js. No se
// inventan datos nuevos: si cambian en el dossier o en content.js, cambiarlas
// también aquí. Mantener siempre visible el aviso de riesgo (pérdida parcial o
// total del capital) y no prometer rentabilidades garantizadas.
// ---------------------------------------------------------------------------

import { contactSection } from "./content";

export { CAMPAIGN_PATH } from "./routes";

export const campaignMeta = {
  title: "Dossier de inversión | Alquila con nosotros",
  description:
    "Descarga gratis el dossier: cómo invertir desde 5.000 € en operaciones reales de Rent to Rent y Flips, con contrato firmado y sin comprar un inmueble.",
};

// Barra fina sobre la cabecera: el aviso de riesgo siempre a la vista.
export const topBar = {
  text: "Rentabilidades orientativas, no garantizadas. Toda inversión conlleva riesgo, incluida la pérdida parcial o total del capital.",
  link: "Más información",
  href: "#transparencia",
};

export const campaignNav = {
  cta: { label: "Descargar dossier", href: "#dossier" },
};

export const campaignHero = {
  title: "Invierte en inmobiliario",
  titleAccent: "sin comprar un piso.",
  subtitle:
    "Descarga gratis el dossier y descubre cómo participar, desde 5.000 €, en operaciones inmobiliarias reales. Nosotros nos encargamos del resto.",
  actions: {
    primary: { label: "Descargar dossier", href: "#dossier" },
    secondary: { label: "Hablar por WhatsApp" },
  },
  photoAlt: "Bloques de viviendas",
  chips: ["Operaciones reales en Barcelona", "Contrato + Modelo 600"],
  features: [
    { title: "Desde 5.000 €", text: "Entrada mínima en una operación concreta." },
    { title: "Contrato firmado", text: "Importe, plazo y rentabilidad pactados por escrito." },
    { title: "Operaciones reales", text: "Gestionadas por nuestro equipo en Barcelona." },
  ],
};

export const dossierForm = {
  title: "Recibe el dossier gratis",
  subtitle: "Se abre al instante. Sin compromiso.",
  fields: { name: "Nombre", email: "Email" },
  interestsLabel: "¿Qué te interesa? (opcional)",
  // Se reutilizan las opciones del formulario de contacto para que los leads
  // lleguen a Supabase con los mismos valores.
  interestOptions: [contactSection.interests[0], contactSection.interests[1]],
  submit: "Descargar dossier",
  // [PENDIENTE] enlazar a la política de privacidad real cuando exista.
  consent: "Acepto que guarden mis datos para enviarme el dossier y contactarme sobre sus operaciones.",
  risk: "Toda inversión conlleva riesgo, incluida la posible pérdida parcial o total del capital. Las rentabilidades son orientativas, no garantizadas.",
  // Lo que se guarda en la tabla leads (message es obligatorio).
  leadMessage: "Descarga del dossier desde la página de campaña (/invierte).",
  leadInterest: "Quiero el dossier de inversión",
  success: {
    title: "¡Listo! Ya tienes el dossier",
    text: "Lo hemos abierto en una pestaña nueva. Si no se ha abierto, descárgalo aquí.",
    button: "Abrir el dossier",
    contact: "¿Tienes dudas? Escríbenos por WhatsApp",
  },
};

export const whatsapp = {
  href: `https://wa.me/${contactSection.whatsappNumber}?text=${encodeURIComponent(
    "Hola, he visto el dossier de Alquila con nosotros y me gustaría hablar sobre invertir."
  )}`,
};

export const dossierContents = {
  title: "Todo lo que necesitas para decidir con calma",
  intro:
    "Un documento claro, sin letra pequeña escondida, que explica cómo funcionan nuestras operaciones y qué recibes antes de decidir si participar.",
  // La tarjeta 3D (tilt + degradado) es la "portada" del dossier.
  tileTitle: "Tu dossier de inversión",
  card: {
    title: "Dossier de inversión",
    lines: "Rent to Rent · Flips",
    tag: "PDF",
  },
  contentsTitle: "Dentro del dossier",
  items: [
    { title: "Cómo trabajamos", text: "Cómo estructuramos cada operación y qué aportas tú como inversor." },
    { title: "Rent to Rent y Flips", text: "Capital, plazo y rentabilidad de referencia de nuestras dos líneas." },
    { title: "Comparativa rápida", text: "Las dos líneas frente a frente: entrada, plazo, rentabilidad y garantía." },
    { title: "El proceso, paso a paso", text: "De la oportunidad al retorno, en seis pasos." },
    { title: "Documentación y fiscalidad", text: "Contrato firmado y Modelo 600 cuando corresponda." },
    { title: "Qué recibes antes de decidir", text: "Toda la información de la operación antes de participar." },
  ],
};

// Fuente: "Comparativa rápida" del dossier.
export const lines = {
  title: "Dos formas de participar",
  intro: "Tú aportas el capital a una operación concreta; nosotros nos ocupamos de la parte operativa.",
  cta: "Quiero el dossier",
  cards: [
    {
      id: "rent-to-rent",
      name: "Rent to Rent",
      summary: "Captamos una vivienda con potencial, la preparamos y la amueblamos para gestionarla por habitaciones.",
      price: "Desde 5.000 €",
      priceNote: "de entrada mínima, según las necesidades de cada proyecto.",
      rows: [
        { label: "Plazo", value: "Prioridad 1–2 años" },
        { label: "Rentabilidad", value: "Referencia 15–25 % anual*" },
        { label: "Pactado hoy", value: "25 % en nuestras 3 operaciones actuales*" },
        { label: "Nos ocupamos de", value: "Captación, preparación y gestión por habitaciones" },
        { label: "Garantía", value: "Según la estructura de cada operación" },
      ],
    },
    {
      id: "flip",
      name: "Flip inmobiliario",
      summary: "Identificamos un inmueble con potencial de mejora, lo reformamos y preparamos su venta.",
      price: "20.000–30.000 €",
      priceNote: "de capital orientativo, según el proyecto.",
      rows: [
        { label: "Plazo", value: "Según compra, reforma y salida" },
        { label: "Rentabilidad", value: "Referencia ≈ 10 % anual*" },
        { label: "Cálculo", value: "Específico para cada operación" },
        { label: "Nos ocupamos de", value: "Captación, reforma y venta" },
        { label: "Garantía", value: "El propio activo, documentada en la estructura jurídica acordada" },
      ],
    },
  ],
  note: "*Rangos orientativos del dossier; la rentabilidad definitiva se pacta por contrato en cada operación y no está garantizada.",
};

// Fuente: "Cómo es el proceso para el inversor" del dossier.
export const processSection = {
  title: "De la oportunidad al retorno, en seis pasos",
  steps: [
    { number: "01", title: "Identificamos la oportunidad", text: "Analizamos el inmueble y la estrategia del proyecto." },
    { number: "02", title: "Estructuramos la operación", text: "Definimos capital necesario, plazo, rentabilidad y condiciones." },
    { number: "03", title: "Te presentamos el proyecto", text: "Recibes toda la información relevante antes de decidir." },
    { number: "04", title: "Formalizamos", text: "Se firma la documentación y se realizan los trámites aplicables." },
    { number: "05", title: "Ejecutamos", text: "Nos encargamos de la gestión y la ejecución del proyecto." },
    { number: "06", title: "Recibes tu retorno", text: "Conforme a las condiciones pactadas en el contrato." },
  ],
};

export const casesSection = {
  title: "Así son las operaciones que gestionamos",
  intro: "Tres casos reales de Rent to Rent, financiados por inversores. Sin número de portal, por confidencialidad.",
  link: { label: "Ver todas las propiedades", href: "/#propiedades" },
  disclaimer:
    "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y la ocupación esperada; pueden variar según la ocupación real. No constituyen una garantía de resultados.",
};

export const transparency = {
  title: "Lo importante, por escrito",
  items: [
    {
      title: "Contrato firmado",
      text: "La inversión se formaliza con un contrato legal donde constan el importe aportado, el plazo, la rentabilidad pactada y las obligaciones de ambas partes.",
    },
    {
      title: "Modelo 600",
      text: "Cuando corresponde por la naturaleza de la operación, se presenta el Modelo 600 ante la Administración tributaria, con más formalidad y trazabilidad.",
    },
    {
      title: "Riesgo, sin letra pequeña",
      text: "Toda operación conlleva riesgo, incluida la posible pérdida parcial o total del capital aportado. Las rentabilidades pasadas no garantizan resultados futuros.",
    },
  ],
};

export const faq = {
  title: "Lo que suelen preguntarnos",
  items: [
    {
      q: "¿Necesito comprar un inmueble?",
      a: "No. Aportas capital a una operación concreta bajo unas condiciones definidas de antemano; nosotros nos ocupamos de la parte operativa: captación, reforma o amueblamiento, inquilinos y mantenimiento.",
    },
    {
      q: "¿Cuánto necesito para empezar?",
      a: "Desde 5.000 € en Rent to Rent, según las necesidades de cada proyecto. En los Flips, el capital orientativo es de unos 20.000–30.000 €.",
    },
    {
      q: "¿Qué rentabilidad puedo esperar?",
      a: "Se pacta por operación antes de entrar. Como referencia, en Rent to Rent el dossier habla de un 15 % anual como mínimo y hasta un +25 % en dos años, y en nuestras 3 operaciones actuales se ha pactado un 25 % anual. En Flips, la referencia es de alrededor del 10 % anual. No están garantizadas.",
    },
    {
      q: "¿Cómo se formaliza?",
      a: "Con un contrato de préstamo firmado donde constan el importe, el plazo, la rentabilidad pactada y las obligaciones de ambas partes. Cuando corresponde, se presenta el Modelo 600.",
    },
    {
      q: "¿Qué garantías hay?",
      a: "Depende de la estructura de cada operación y se te explica antes de participar. En los Flips, la garantía es el propio activo, documentada conforme a la estructura jurídica acordada.",
    },
    {
      q: "¿Cómo tributa?",
      a: "El tratamiento fiscal y la documentación pueden variar según la estructura concreta de cada proyecto, por lo que las condiciones se facilitan de forma específica antes de la participación. Si lo necesitas, consulta con un asesor independiente.",
    },
    {
      q: "¿Qué recibo antes de decidir?",
      a: "La descripción de la operación y la estrategia, el capital total necesario y la cantidad de entrada, el plazo estimado, la rentabilidad prevista o pactada y su forma de cálculo, la estructura, las garantías cuando existan y la documentación contractual y fiscal aplicable.",
    },
  ],
};

export const finalCta = {
  title: "¿Empezamos con el dossier?",
  subtitle: "Léelo con calma. Y si después prefieres hablarlo, te respondemos en menos de 48 h.",
  primary: { label: "Descargar dossier", href: "#dossier" },
  secondary: { label: "Hablar por WhatsApp" },
};
