// ---------------------------------------------------------------------------
// Todo el copy y los datos de la web viven aqui.
//
// Fuentes reales usadas para rellenar este archivo (ver src/info/, que esta en
// .gitignore por contener datos personales — nunca subir esos PDFs/Excel a un
// repo ni a la web):
//  - "dossier informativo inversor privado.pdf" -> howItWorks, hero, footer
//    (modelo de negocio, cifras de rentabilidad orientativas, proceso). Es el
//    mismo PDF que ahora se sirve en /dossier-alquila-con-nosotros.pdf.
//  - "ERMITA 17", "BEREGER" y "MAQUINISTA" ACN ANALISIS INMUEBLES BASE
//    (xlsx/pdf) -> properties. 3 operaciones reales de Rent to Rent
//    (Ermita 17 en Hospitalet de Llobregat; Berenguer 25 y Maquinista 25,
//    ambas en Barceloneta, Barcelona). NO se ha usado el nombre/telefono de
//    contacto que aparece en esos documentos (dato personal, no publicable).
//  - "CONTR PRESTAMO INVERSOR (MOD 600).pdf" -> confirma la estructura de
//    interes fijo del 25% que aparece tambien en los 3 Excel/PDF de arriba.
//    NO se ha usado ningun dato personal de ese contrato (nombres, DNI,
//    IBAN, telefono): esos datos no deben publicarse nunca en la web.
//
// "heroMetrics" son los rangos orientativos reales del dossier (no un
// historico auditado). "properties.metrics" reflejan el estado ACTUAL de la
// cartera: las 3 operaciones reales de properties.properties (Ermita 17,
// Berenguer 25, Maquinista 25), con su ingreso bruto y coste anualizados. No
// es un historico de varios anios (solo hay 3 operaciones hasta la fecha) —
// ampliar cuando existan mas operaciones o un historico mensual/anual real.
//
// "properties.properties" tiene 3 casos reales (tag "Caso real"). Las
// DIRECCIONES MOSTRADAS SON ALTERNATIVAS (calle cercana u otro barrio) por
// confidencialidad con los propietarios; las reales estan en src/info/ y no
// deben aparecer en la web (ni en ids, rutas de fotos o textos). Equivalencia
// interna: caso-1 = Ermita 17 (Hospitalet), caso-2 = Berenguer 25 y
// caso-3 = Maquinista 25 (ambas Barceloneta). El caso-1 usa fotos reales del
// inmueble (servidas desde /public/properties/caso-1/ — habitaciones, cocina,
// baño, lavadero y vistas); solo hay foto de 2 de las 4 habitaciones, añadir el
// resto cuando se tengan. caso-2 y caso-3 siguen con stock de Unsplash —
// sustituir por fotos reales de cada inmueble cuando se tengan.
// ---------------------------------------------------------------------------

export const APPLY_URL = "#agendar"; // [PENDIENTE] enlace a Calendly / TypeForm de los fundadores
export const DOSSIER_URL = "/dossier-alquila-con-nosotros.pdf"; // dossier real (src/info/), servido desde /public

export const nav = {
  brand: "Alquila con nosotros",
  links: [
    { label: "Propiedades", href: "#propiedades" },
    { label: "Como invertimos", href: "#como-invertimos" },
    { label: "Contacto", href: "#contacto" },
  ],
  cta: { label: "Agendar reunión", href: APPLY_URL },
};

export const hero = {
  title: "Invierte en\ninmobiliario.",
  titleAccent: "Sin comprar un inmueble.",
  subtitle: "Accede a operaciones inmobiliarias seleccionadas.\nNosotros nos encargamos del resto.",
};

// Metricas que rotan una a una en el hero. "value" es lo grande y "label" el texto de apoyo.
// Fuente: dossier informativo inversor privado (rangos orientativos, no una media auditada).
export const heroMetrics = [
  {
    icon: "trending-up",
    value: "+15",
    unit: "% anual",
    label: "Rentabilidad orientativa por operación (Rent to Rent)",
  },
  {
    icon: "wallet",
    value: "5.000",
    unit: "€ mínimo",
    label: "Entrada mínima por operación",
  },
  {
    icon: "calendar-clock",
    value: "1–2",
    unit: "años",
    label: "Plazo prioritario de las operaciones",
  },
  {
    icon: "badge-percent",
    value: "25",
    unit: "% anual",
    label: "Rendimiento anual en nuestras operaciones de Rent to Rent",
  },
];

export const heroActions = {
  primary: { label: "Agendar reunión con los fundadores", href: APPLY_URL },
  secondary: { label: "Descargar dossier de inversión", href: DOSSIER_URL },
};

// Track record ACTUAL, no proyección: las 3 operaciones reales de properties
// (mostradas por barrio, con direcciones aproximadas por confidencialidad), con
// su ingreso bruto y coste anualizados a partir de las cifras mensuales de cada una:
//   Collblanc: 2.080 €/mes ingreso habitaciones · 977,55 €/mes renta propietario -> 24,96 k€ / 11,73 k€ al año
//   Poblenou:  2.080 €/mes ingreso habitaciones · 977,55 €/mes renta propietario -> 24,96 k€ / 11,73 k€ al año
//   El Born:   2.990 €/mes ingreso habitaciones · 1.442,00 €/mes renta propietario -> 35,88 k€ / 17,30 k€ al año
const CARTERA_ACTUAL = [
  { nombre: "Collblanc", ingresoBrutoAnualK: 24.96, costeAnualK: 11.73 },
  { nombre: "Poblenou", ingresoBrutoAnualK: 24.96, costeAnualK: 11.73 },
  { nombre: "El Born", ingresoBrutoAnualK: 35.88, costeAnualK: 17.3 },
];

export const properties = {
  kicker: "Propiedades",
  subtitle: "Busca por ciudad y descubre el rendimiento real de cada operación de Rent to Rent.",
  cities: ["Barcelona", "Málaga", "Murcia"],
  metrics: [
    {
      value: CARTERA_ACTUAL.length,
      prefix: "",
      suffix: "",
      label: "Propiedades gestionadas actualmente",
    },
    {
      value: Math.round(CARTERA_ACTUAL.reduce((sum, p) => sum + p.ingresoBrutoAnualK, 0) * 1000),
      prefix: "",
      suffix: " €/año",
      label: "Ingreso bruto anual gestionado",
    },
    {
      value: 25,
      prefix: "",
      suffix: "% anual",
      label: "Rendimiento pactado con los inversores en las 3 operaciones",
    },
  ],
  metricsDisclaimer:
    "Cifras actuales de nuestras 3 operaciones reales de Rent to Rent (Collblanc, Poblenou y El Born), estimadas por nuestro equipo a partir de la renta pactada y la ocupación esperada; no son un histórico auditado por un tercero.",
  // Cifras proyectadas por nuestro propio equipo a partir de cada operación real,
  // no auditadas por un tercero — pueden variar según la ocupación final.
  disclaimer:
    "Operaciones reales gestionadas por Alquila con nosotros (ACN). Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y la ocupación esperada; pueden variar según la ocupación real. Por confidencialidad con los propietarios, las direcciones mostradas son aproximadas (calle cercana o de otro barrio). El primer caso incluye fotos reales del inmueble; los otros dos usan fotos de referencia (stock) pendientes de sustituir por fotos reales.",
  properties: [
    {
      id: "caso-1",
      tag: "Caso real",
      address: "Carrer de Collblanc 42",
      location: "Collblanc, L'Hospitalet de Llobregat",
      city: "Barcelona",
      coordinates: "41.3752° N, 2.1175° E",
      lat: 41.3752,
      lng: 2.1175,
      image: "/properties/caso-1/habitacion-1.jpg",
      images: [
        "/properties/caso-1/habitacion-1.jpg",
        "/properties/caso-1/habitacion-2.jpg",
        "/properties/caso-1/cocina-1.jpg",
        "/properties/caso-1/cocina-2.jpg",
        "/properties/caso-1/cocina-3.jpg",
        "/properties/caso-1/bano-1.jpg",
        "/properties/caso-1/bano-2.jpg",
        "/properties/caso-1/lavadero.jpg",
        "/properties/caso-1/vistas.jpg",
      ],
      themeColor: "256 70% 30%",
      beds: 4,
      baths: 1,
      sqm: 70,
      yieldLabel: "Rendimiento anual",
      yieldValue: "25%",
      descriptionBullets: [
        "70 m² en 3ª planta exterior con ascensor",
        "4 habitaciones amuebladas para alquiler por habitaciones",
        "Financiada 100% por el inversor, rendimiento pactado sobre el capital",
      ],
      managementBullets: [
        "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
        "El propietario cobra su renta fija: 977,55 €/mes",
      ],
      market: {
        title: "El barrio — Collblanc, L'Hospitalet de Llobregat",
        bullets: [
          "Municipio colindante con Barcelona, muy buena conexión de metro",
          "Fuerte demanda de alquiler por habitaciones (profesionales y estudiantes)",
        ],
      },
      financials: [
        { label: "Capital invertido (financiado por el inversor)", value: "6.080 €" },
        { label: "Rendimiento anual", value: "25%" },
        { label: "Renta pagada al propietario", value: "977,55 €/mes" },
        { label: "Ingreso medio estimado por habitaciones", value: "2.080 €/mes" },
        { label: "Rentabilidad neta mensual estimada", value: "822,45 €/mes" },
        { label: "Rentabilidad neta anual estimada", value: "9.869,40 €/año" },
        { label: "Payback estimado del capital", value: "3 meses" },
      ],
    },
    {
      id: "caso-2",
      tag: "Caso real",
      address: "Carrer de Pujades 110",
      location: "Poblenou, Barcelona",
      city: "Barcelona",
      coordinates: "41.3993° N, 2.1965° E",
      lat: 41.3993,
      lng: 2.1965,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      themeColor: "230 65% 32%",
      beds: 4,
      baths: 1,
      sqm: 90,
      yieldLabel: "Rendimiento anual",
      yieldValue: "25%",
      descriptionBullets: [
        "90 m² en 1ª planta exterior",
        "4 habitaciones amuebladas para alquiler por habitaciones",
        "Financiada 100% por el inversor, rendimiento pactado sobre el capital",
      ],
      managementBullets: [
        "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
        "El propietario cobra su renta fija: 977,55 €/mes",
      ],
      market: {
        title: "El barrio — Poblenou, Barcelona",
        bullets: [
          "Barrio en plena transformación, cerca de la playa y del distrito tecnológico 22@",
          "Fuerte demanda de profesionales, estudiantes y alquiler de temporada",
        ],
      },
      financials: [
        { label: "Capital invertido (financiado por el inversor)", value: "6.050 €" },
        { label: "Rendimiento anual", value: "25%" },
        { label: "Renta pagada al propietario", value: "977,55 €/mes" },
        { label: "Ingreso medio estimado por habitaciones", value: "2.080 €/mes" },
        { label: "Rentabilidad neta mensual estimada", value: "852,45 €/mes" },
        { label: "Rentabilidad neta anual estimada", value: "10.229,40 €/año" },
        { label: "Payback estimado del capital", value: "3 meses" },
      ],
    },
    {
      id: "caso-3",
      tag: "Caso real",
      address: "Carrer del Comerç 30",
      location: "El Born, Barcelona",
      city: "Barcelona",
      coordinates: "41.3855° N, 2.1834° E",
      lat: 41.3855,
      lng: 2.1834,
      image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
      themeColor: "280 55% 30%",
      beds: 5,
      baths: 2,
      sqm: 120,
      yieldLabel: "Rendimiento anual",
      yieldValue: "25%",
      descriptionBullets: [
        "120 m² en 1ª planta exterior",
        "5 habitaciones y 2 baños, amueblado para alquiler por habitaciones",
        "Financiada 100% por el inversor, rendimiento pactado sobre el capital",
      ],
      managementBullets: [
        "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
        "El propietario cobra su renta fija: 1.442 €/mes",
      ],
      market: {
        title: "El barrio — El Born, Barcelona",
        bullets: [
          "Casco antiguo muy céntrico, a pocos minutos de la playa y del metro",
          "Fuerte demanda turística y de alquiler de temporada",
        ],
      },
      financials: [
        { label: "Capital invertido (financiado por el inversor)", value: "6.250 €" },
        { label: "Rendimiento anual", value: "25%" },
        { label: "Renta pagada al propietario", value: "1.442 €/mes" },
        { label: "Ingreso medio estimado por habitaciones", value: "2.990 €/mes" },
        { label: "Rentabilidad neta mensual estimada", value: "1.098 €/mes" },
        { label: "Rentabilidad neta anual estimada", value: "13.176 €/año" },
        { label: "Payback estimado del capital", value: "3 meses" },
      ],
    },
  ],
};

export const howItWorks = {
  kicker: "Cómo funciona",
  title: "Invierte en 3 pasos, sin comprar ni gestionar",
  intro:
    "Entradas cada vez más altas dejan la inversión inmobiliaria al alcance de unos pocos. Alquila con nosotros abre otro camino: aportas capital desde 5.000 € a una operación ya identificada por nuestro equipo.",
  steps: [
    {
      number: "01",
      title: "Entras en una operación concreta",
      bullets: [
        "Desde 5.000 € en Rent to Rent (gestión por habitaciones)",
        "Desde 20.000–30.000 € en un Flip (reforma y venta)",
        "Capital, plazo y rentabilidad ya estructurados antes de presentártelo",
      ],
    },
    {
      number: "02",
      title: "Firmamos y formalizamos",
      bullets: [
        "Contrato de préstamo con importe, plazo y rentabilidad pactada",
        "Liquidación ante Hacienda mediante el Modelo 600 cuando corresponde",
        "Nos encargamos de reforma, amueblamiento y gestión diaria",
      ],
    },
    {
      number: "03",
      title: "Recibes tu retorno pactado",
      bullets: [
        "Interés fijo pactado (por ejemplo, 25%) sobre el capital aportado",
        "Reinviertes en la siguiente operación",
        "Sigues construyendo patrimonio sin gestionar tú el día a día",
      ],
    },
  ],
};

// Las stats de esta sección reutilizan las mismas cifras que heroMetrics (dossier
// informativo inversor privado) para no mostrar números distintos a los del hero.
export const investorZone = {
  title: "Zona de Inversores",
  subtitle: "Un espacio exclusivo para quienes ya invierten con nosotros — o quieren empezar.",
  card: {
    intro: "Comparte análisis de mercado y oportunidades de inversión antes de salir al público, y crece junto a otros inversores.",
    checklist: [
      { id: 1, text: "Rentabilidad gestionada por expertos, mes a mes" },
      { id: 2, text: "Comunidad privada de inversores" },
      { id: 3, text: "Análisis de mercado y oportunidades off-market" },
      { id: 4, text: "Acceso a operaciones antes de salir al público general" },
    ],
    // [PENDIENTE] vídeo real de presentación de la zona de inversores — de momento el
    // modal muestra "Vídeo próximamente" si video.url queda vacío.
    video: {
      url: "",
    },
  },
  stats: [
    { value: 25, suffix: "%", label: "Rendimiento anual pactado" },
    { value: 5000, suffix: " € mínimo", label: "Entrada mínima por operación" },
  ],
  cta: {
    label: "Solicitar acceso al grupo",
    caption: "Comunidad de WhatsApp",
    whatsappMessage: "Hola, quiero solicitar acceso a la comunidad privada de inversores de Alquila con nosotros.",
    disclaimer: "Condiciones sujetas al contrato firmado en cada operación.",
  },
};

export const contactSection = {
  kicker: "Hablemos",
  title: "Hablemos de tu próxima operación",
  subtitle: "¿Invertir, ofrecer tu propiedad o solo tienes dudas? Escríbenos y te respondemos en menos de 48h.",
  formTitle: "Cuéntanos qué buscas 👋",
  emailIntro: "Escríbenos directamente a",
  email: "hola@alquilaconnosotros.com", // [PENDIENTE] mismo email que footer.contact.email — sustituir por el real
  whatsappNumber: "34695893635",
  interests: [
    "Quiero invertir en Rent to Rent",
    "Quiero invertir en un Flip",
    "Tengo una propiedad para alquilar",
    "Quiero el dossier de inversión",
    "Otra consulta",
  ],
  submitLabel: "Enviar por WhatsApp",
  successMessage: "¡Te hemos abierto WhatsApp con tu mensaje listo para enviar! Si no se abrió, escríbenos directamente por email.",
};

export const footer = {
  tagline:
    "Aportas capital a operaciones concretas de Rent to Rent y Flips. Nosotros nos ocupamos de la parte operativa, con contrato firmado en cada operación.",
  columns: [
    {
      title: "Navegación",
      links: [
        { label: "Propiedades", href: "#propiedades" },
        { label: "Cómo invertimos", href: "#como-invertimos" },
        { label: "Contacto", href: "#contacto" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Agendar reunión", href: APPLY_URL },
        { label: "Descargar dossier de inversión", href: DOSSIER_URL },
      ],
    },
  ],
  contact: {
    title: "Contacto",
    email: "hola@alquilaconnosotros.com", // [PENDIENTE] sustituir por el email real
  },
  // [PENDIENTE] revisar disclaimer con un asesor legal antes de publicar la web.
  disclaimer:
    "Alquila con nosotros no es una entidad regulada por la CNMV ni presta servicios de inversión sujetos a supervisión financiera. La información de este sitio tiene fines informativos y no constituye una oferta, recomendación ni asesoramiento de inversión. Toda operación conlleva riesgo, incluida la posible pérdida parcial o total del capital aportado, y las rentabilidades pasadas no garantizan resultados futuros. Antes de invertir, revisa la documentación de cada operación y consulta con un asesor independiente si lo necesitas.",
  copyright: `© ${new Date().getFullYear()} Alquila con nosotros. Todos los derechos reservados.`,
};
