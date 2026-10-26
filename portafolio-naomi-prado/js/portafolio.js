/* ============================================================
   NAOMI PRADO · DEVSIGN
   Datos de proyectos, composición del trabajo e interacciones.
   Para editar un proyecto, buscá su bloque en PROYECTOS.
   Para cambiar el orden o el tamaño, editá COMPOSICION.
   ============================================================ */

/* ------------------------------------------------------------
   PROYECTOS
   slug     carpeta en assets/img (sin slug no busca imágenes)
   cat      producto | web | academico | marca
   sealed   true si está bajo acuerdo de confidencialidad
   ------------------------------------------------------------ */
const PROYECTOS = {

  toloma: {
    slug: "toloma", cat: "marca",
    kind: "Identidad y sitio",
    name: "Sociedad Hotelera Toloma",
    short: "Una marca paraguas que ordena varias propiedades sin que ninguna pierda su carácter propio. Del logotipo a la última pantalla, todo sale del mismo sistema.",
    role: "Identidad visual, dirección de arte, diseño y maquetación del sitio.",
    problem: "El grupo tenía varias propiedades comunicándose por separado, cada una con su propio criterio visual. No existía una marca paraguas y el huésped no percibía que pertenecieran al mismo grupo.",
    did: [
      "Identidad del grupo y su bajada a cada propiedad",
      "Navegación que permite entrar por el grupo o directo a una propiedad",
      "Dirección de arte de la fotografía y del ritmo visual del sitio",
      "Maquetación completa y responsive, sin dependencias pesadas"
    ],
    result: "Una sola marca reconocible con espacio para el carácter individual de cada hotel, y un sitio que ordena la oferta completa en un solo recorrido."
  },

  deltax: {
    slug: "deltax", cat: "producto", sealed: true,
    kind: "Producto, bajo confidencialidad",
    name: "Plataforma logística DeltaX",
    short: "Tableros de citas, control de accesos, scorecards y librería de componentes para operaciones industriales de alto volumen.",
    role: "Diseñadora UX/UI de producto, trabajando con Product Owners y equipos de desarrollo.",
    problem: "Operaciones logísticas donde cientos de movimientos diarios se coordinaban por teléfono, correo y planillas. La información existía, pero nadie tenía una vista única de qué estaba pasando ahora.",
    did: [
      "Tablero de citas: agenda operativa con estados, filtros y reprogramación",
      "Módulo de control de accesos y su flujo de autorizaciones",
      "Scorecard e indicadores de desempeño por transportista",
      "Librería de componentes para dashboards, reutilizada por el resto del equipo",
      "Documentación de componentes y reglas de uso para nuevos diseñadores"
    ],
    result: "Coordinación centralizada en una sola interfaz y un lenguaje visual consistente entre módulos construidos por equipos distintos.",
    note: "Las pantallas están bajo acuerdo de confidencialidad."
  },

  yms: {
    slug: "design-system", cat: "producto",
    kind: "Sistema de diseño",
    name: "YMS Design System",
    short: "Tokens, componentes y reglas documentadas para que un equipo entero diseñe igual sin preguntar.",
    role: "Definición del sistema, librería en Figma y documentación de onboarding.",
    problem: "Cada diseñador resolvía el mismo componente a su manera y cada desarrollador lo interpretaba distinto. El costo no era estético, era tiempo perdido en revisiones y comportamiento inconsistente entre módulos.",
    did: [
      "Tokens: color con rol funcional, escala tipográfica, espaciado base 8 y radios",
      "Componentes con todos sus estados: normal, hover, foco, error, deshabilitado, vacío y cargando",
      "Librería viva en Figma, lista para consumir desde cualquier archivo del equipo",
      "Documentación pensada para onboarding: cuándo usar cada componente y cuándo no",
      "Guías de bajada a código para que lo entregado sea implementable tal cual"
    ],
    result: "Un diseñador nuevo produce pantallas consistentes desde su primera semana, sin depender de que alguien le explique las reglas."
  },

  c2b: {
    slug: "connect2bolivia", cat: "web", link: "https://connect2bolivia.com",
    kind: "Rediseño UX/UI",
    name: "Connect2Bolivia",
    short: "Rediseño completo de cuatro páginas, pensadas para convertir visitas en consultas reales.",
    role: "Investigación, arquitectura de información, interfaz, prototipo y maquetación.",
    problem: "El sitio no reflejaba la identidad del manual de marca y no guiaba al visitante. Universidades, familias y viajeros llegaban a la misma página genérica, y el formulario era largo y difícil de completar desde el celular.",
    did: [
      "Cada color del manual recibe un rol funcional dentro del sistema web",
      "Buscador de intereses en el inicio que lleva directo al programa recomendado",
      "Los ocho programas pasaron de una lista larga a un selector con pestañas y enlace propio",
      "Formulario con chips de selección rápida en lugar de campos largos, con validación en tiempo real",
      "Diseño pensado primero para celular, probado y ajustado a ese ancho"
    ],
    result: "Cuatro páginas con un recorrido claro por perfil de visitante, ocho funcionalidades interactivas sin necesidad de backend y una estructura que el cliente mantiene cambiando fotos en una carpeta."
  },

  enpp: {
    slug: "enpp", cat: "web", link: "https://enpp.pro",
    kind: "Sitio corporativo",
    name: "ENPP Holding Group",
    short: "Sitio en inglés para un holding de inversión con operaciones en Brasil, Estados Unidos y Colombia.",
    role: "Diseño UX/UI y maquetación.",
    problem: "Un holding con seis áreas de negocio muy distintas, de minería a bioeconomía, necesitaba explicarse a inversionistas sin convertirse en un catálogo indigerible.",
    did: [
      "Estructura de una sola página con anclas, para que cada área sea un enlace compartible",
      "Video de fondo por sector como recurso narrativo, no como adorno",
      "Jerarquía tipográfica que sostiene bloques largos de texto técnico",
      "Directorio y red de alianzas presentados con foco en trayectoria"
    ],
    result: "Un recorrido único que va de la visión general al detalle sectorial, con secciones que el equipo comercial puede enviar por separado."
  },

  protex: {
    slug: "protex", cat: "web", link: "https://protex.com.bo",
    kind: "Sitio corporativo, salud",
    name: "Industrias Protex",
    short: "Insumos médicos y productos tissue con plantas en Cochabamba y Santa Cruz. Cuatro páginas, catálogo con buscador en vivo y un sitio que hubo que blindar después de un ataque.",
    role: "Diseño UX/UI, maquetación y mantenimiento continuado de las cuatro páginas.",
    problem: "El grupo reúne marcas muy distintas entre sí, de línea hospitalaria a tissue de consumo, y cada una habla a un comprador diferente. El catálogo era una lista larga sin forma de filtrar, y el visitante tenía que entender la estructura interna de la empresa para encontrar su producto.",
    did: [
      "Catálogo con buscador en vivo, contadores por categoría y filtros sincronizados con la URL, para que cualquier vista sea un enlace compartible",
      "Los logos de marca en el inicio llevan directo a su vista filtrada del catálogo: Premier, Líder, Sissu, Panda y Makro",
      "Visor con zoom y control por teclado para las imágenes de certificados ISO 9001 e ISO 13485",
      "Portada resuelta en tres propuestas comparadas antes de elegir la definitiva, con fotografía de planta a ancho completo",
      "Optimización de las imágenes del sitio, de unos 64 MB a 17 MB, y la librería del carrusel servida desde el propio dominio",
      "Política de seguridad de contenidos y endurecimiento completo después de que el sitio sufriera una inyección de spam"
    ],
    result: "Un catálogo donde el comprador llega a su producto filtrando, no leyendo, y un sitio que sobrevivió a un ataque real y volvió a línea con el diseño intacto."
  },

  provtec: {
    slug: "provtec", cat: "web", link: "https://web.provtec.net",
    kind: "Sitio corporativo",
    name: "ProvTec",
    short: "Presencia digital para una empresa de provisión tecnológica.",
    role: "Diseño UX/UI y maquetación.",
    problem: "Ordenar una oferta técnica amplia en una estructura que un cliente no técnico pueda recorrer sin perderse.",
    did: [
      "Arquitectura de información por tipo de servicio",
      "Sistema visual corporativo consistente entre secciones",
      "Maquetación responsive"
    ],
    result: "Un sitio institucional claro, con la oferta ordenada por necesidad del cliente."
  },

  destinos: {
    slug: "destinos-america", cat: "web",
    kind: "Sitio corporativo, turismo de negocios",
    name: "Destinos América",
    short: "Turismo de negocios e inversión en América Latina, con un departamento de comunicación propio que tenía que vivir dentro del sitio.",
    role: "Diseño UX/UI y arquitectura de información.",
    problem: "La empresa tiene dos caras: los servicios de turismo de negocios y el Media HUB, que produce revista, podcast y shorts. Meterlas en el mismo menú plano habría dejado el contenido editorial escondido detrás de lo corporativo.",
    did: [
      "Separación clara entre la oferta de servicios y el Media HUB como espacio propio",
      "El Media HUB organiza revista, DAB Podcast y DAB Shorts bajo un mismo criterio de lectura",
      "Recorrido de registro previo para la revista, que no se lee sin cuenta",
      "Inicio, Nosotros, Servicios, Media HUB y Contacto como columna vertebral del sitio"
    ],
    result: "Un sitio que presenta la empresa y al mismo tiempo sostiene una operación editorial continua, sin que una tape a la otra."
  },

  panoso: {
    slug: "panosocossio", cat: "web", link: "https://panosocossio.com",
    kind: "Sitio corporativo, salud",
    name: "PanosoCossio",
    short: "Tecnología para clínicas y hospitales, con lenguaje visual tomado del monitoreo clínico.",
    role: "Diseño UX/UI, dirección visual y maquetación.",
    problem: "Una empresa de tecnología hospitalaria con cuatro servicios muy distintos entre sí necesitaba que un director de hospital entendiera en segundos cuál le corresponde.",
    did: [
      "Los cuatro servicios como puerta de entrada, cada uno con su recorrido",
      "Lenguaje visual clínico: panel de monitoreo e indicadores en vivo",
      "Contadores animados para disponibilidad y tiempo de respuesta",
      "Camino corto y siempre visible hacia la cotización"
    ],
    result: "Un sitio que transmite precisión técnica sin volverse frío, con un solo objetivo por página."
  },

  emapro: {
    slug: "emapro", cat: "web", link: "https://emapro.com.br",
    kind: "Sitio corporativo, Brasil",
    name: "EMAPRO",
    short: "Seis páginas en portugués para una empresa de proyectos sustentables en la frontera Brasil y Bolivia.",
    role: "Diseño UX/UI y maquetación. Sitio en portugués.",
    problem: "Había que convencer a inversionistas de que la sustentabilidad es un activo productivo y no un costo, con contenido denso y en un idioma distinto al del equipo.",
    did: [
      "Seis páginas con jerarquía clara entre pilares estratégicos y sectores",
      "Cifras animadas que sostienen el argumento de la frontera",
      "Sistema visual institucional aplicado de forma consistente",
      "Ajuste tipográfico para textos en portugués, más largos que en español"
    ],
    result: "Una narrativa de inversión legible, con áreas de actuación que funcionan como puntos de entrada independientes."
  },

  megam: {
    slug: "megam", cat: "web", link: "https://megamholding.com",
    kind: "Portada trilingüe",
    name: "MEGAM Group Holding",
    short: "Una portada que funciona en portugués, español e inglés sin romperse.",
    role: "Diseño UX/UI y maquetación multiidioma.",
    problem: "Una sola portada tenía que sostenerse en tres idiomas. Los textos cambian de largo y el diseño no puede depender de que quepan justo.",
    did: [
      "Componentes con espacio previsto para la expansión de texto entre idiomas",
      "Selector de idioma visible sin robarle protagonismo al contenido",
      "Jerarquía de portada que sostiene el mensaje aunque cambie el idioma"
    ],
    result: "Una portada sólida en los tres idiomas, sin versiones separadas que mantener por duplicado."
  },

  umss: {
    slug: "umss", cat: "academico",
    kind: "Ecosistema de siete portales",
    name: "Portales UMSS",
    short: "Siete sitios de facultades, centros e institutos de la Universidad Mayor de San Simón bajo un mismo criterio, cada uno con identidad propia.",
    role: "Diseño UX/UI y maquetación de múltiples portales universitarios.",
    problem: "Cada unidad publica contenido muy distinto, de convocatorias a investigación, pero todas comparten el mismo usuario: estudiantes y postulantes buscando una cosa concreta, rápido.",
    did: [
      "Patrón de navegación común, para que quien conoce un portal sepa moverse en los demás",
      "Plantillas de contenido para noticias, convocatorias, carreras y autoridades",
      "La identidad de cada facultad adaptada dentro del sistema compartido",
      "Estructuras pensadas para que personal no técnico actualice el contenido"
    ],
    result: "Siete portales publicados y en uso.",
    chips: ["CUIE", "CASA", "FCAPYF", "FCJYP", "ESFOR", "DICYT", "LAP"],
    sites: [
      ["CUIE", "https://cuie.umss.edu.bo"],
      ["CASA", "https://casa.umss.edu.bo"],
      ["FCAPYF", "https://fcapyf.umss.edu.bo"],
      ["FCJYP", "https://fcjyp.umss.edu.bo"],
      ["ESFOR", "http://www.esfor.umss.edu.bo"],
      ["DICYT", "https://web.dicyt.umss.edu.bo"],
      ["LAP", "https://www.lap.umss.edu.bo"]
    ]
  },

  fees: {
    slug: "fees", cat: "academico", link: "https://fees.cba.ucb.edu.bo",
    kind: "Portal académico",
    name: "FEES, UCB Cochabamba",
    short: "Portal de la Universidad Católica Boliviana, orientado a que el postulante encuentre su programa sin dar vueltas.",
    role: "Diseño UX/UI y maquetación.",
    problem: "La oferta académica estaba dispersa y el postulante tenía que saber de antemano cómo se llamaba lo que buscaba.",
    did: [
      "Oferta ordenada por interés del postulante, no por estructura interna de la institución",
      "Jerarquía clara entre programas, requisitos y contacto de admisiones",
      "Diseño consistente con la identidad institucional"
    ],
    result: "Un recorrido de admisión más corto, con la información de postulación siempre a la vista."
  },

  linkinmybio: {
    slug: "linkinmybio", cat: "producto", link: "https://linkinmybio.app",
    kind: "Producto propio",
    name: "linkinmybio.app",
    short: "Un servicio propio de páginas de bio con subdominio para cada cliente. Diseño, producto y modelo de planes.",
    role: "Diseño de producto, interfaz y definición de los planes.",
    problem: "Mis clientes necesitaban una página simple para concentrar sus enlaces, pero las opciones genéricas no permiten adaptar la marca y las hechas a medida no se sostienen por su costo.",
    did: [
      "Un subdominio propio por cliente, con su marca aplicada",
      "Plan gratuito acotado a lo esencial: logo y botones de WhatsApp, Instagram, Facebook y ubicación, sobre una portada predeterminada",
      "Plan Pro con dominio propio y varias secciones",
      "Un sistema de plantillas que permite publicar una bio nueva en poco tiempo sin rehacer el diseño"
    ],
    result: "El servicio ya está en uso con clientes reales y la primera bio se publicó en cuestión de horas."
  },

  linkinmybioDS: {
    slug: "linkinmybio-ds", cat: "producto",
    kind: "Sistema de diseño y producto",
    name: "Design System de linkinmybio",
    short: "Identidad, tokens, nueve componentes y un demo funcional con tres vistas. El sistema completo detrás del servicio, documentado hasta el modelo de datos.",
    role: "Identidad de marca, sistema de diseño, diseño de producto y documentación técnica.",
    problem: "El servicio tenía que sostener tres actores con permisos distintos: la agencia que controla qué bloques existen en la página de un cliente, el cliente que edita lo suyo, y el visitante que abre la bio desde Instagram en un celular. Un sistema cosmético no alcanzaba: las reglas de negocio tenían que estar en la estructura.",
    did: [
      "Identidad completa: logotipo, tokens de color en tema claro y oscuro, escala tipográfica, motion y reglas de voz",
      "Nueve componentes reutilizables con sus estados, más mockups de portada, página de bio, alta, editor y analíticas",
      "Selector de degradados calibrado para que el texto blanco siempre pase contraste, siguiendo el patrón de Telegram",
      "Demo funcional con carga real de archivos y extracción automática del color desde el logo del cliente",
      "Separación en tres vistas con su propio CSS, de modo que la página pública no carga nada del panel",
      "Documentación con el modelo de tres actores, la comparación de planes y un esquema de trece tablas con diagrama entidad relación"
    ],
    result: "Un sistema donde quitar un permiso elimina el bloque en vez de solo bloquearlo, y una documentación que permite a quien programe arrancar sin preguntar nada."
  },

  hospital: {
    slug: "hospital-belga", cat: "producto",
    kind: "Sistema de diseño, salud",
    name: "Sistema hospitalario",
    short: "Extracción de un sistema de diseño a partir de veinte pantallas de un sistema hospitalario ya construido.",
    role: "Auditoría de pantallas, extracción de tokens y documentación de componentes.",
    problem: "El sistema ya existía y funcionaba, pero sus veinte pantallas, de admisión y triaje a historia clínica y farmacia, se habían construido sin un sistema común. Cada módulo repetía los mismos componentes con criterios distintos.",
    did: [
      "Auditoría de las veinte pantallas para identificar los componentes que se repetían",
      "Botones, campos, tarjetas, tablas y pasos documentados con sus estados de error, requerido y modo oscuro",
      "Un panel inferior que permite seleccionar un componente y copiar su código en React, HTML o Angular",
      "Una segunda variante visual, para comparar el sistema extraído con una dirección gráfica alternativa"
    ],
    result: "Un sistema de diseño con código listo para pegar, construido desde lo que el producto ya usaba en vez de imponer una librería nueva."
  },

  blue: {
    slug: "bluecurrent", cat: "web", link: "https://bluecurrentgroup.com.br",
    kind: "Sitio corporativo",
    name: "Blue Current Group",
    short: "Holding del sector energético en Brasil. Aquí lo que se diseña es confianza, no conversión.",
    role: "Diseño UX/UI y maquetación.",
    problem: "Un holding tiene que verse sólido ante socios e inversores, pero sus unidades de negocio suelen competir entre sí por atención y terminan diluyendo la marca madre.",
    did: [
      "Dirección visual construida sobre la idea de marca: un grupo que fluye como las olas del mar",
      "Minimalismo corporativo, con el peso en la jerarquía y el aire, no en el adorno",
      "Arquitectura que ordena el holding y sus unidades sin que ninguna opaque a la otra",
      "Diseño responsive, pensado para que la lectura corporativa se sostenga en cualquier pantalla"
    ],
    result: "Una presencia digital que comunica escala y solidez, con cada unidad de negocio ubicada dentro del grupo."
  },

  marcas: {
    slug: "marcas", cat: "marca",
    kind: "Identidad visual",
    name: "Logotipos y marcas",
    short: "Identidad para PanosoCossio, Sociedad Hotelera Toloma y Conser Casa, entre otras. Del logotipo a su aplicación en producto digital.",
    role: "Diseño de logotipo, sistema visual y bajada a aplicaciones.",
    problem: "Cada marca nace con un problema distinto. Una necesita transmitir precisión clínica, otra hospitalidad, otra solidez constructiva. El sistema visual resuelve eso antes de verse bonito.",
    did: [
      "Diseño de logotipo y sus variantes de uso",
      "Paleta, tipografía y reglas de aplicación",
      "Bajada consistente de la marca a producto digital y piezas impresas"
    ],
    result: "Marcas que sostienen su carácter tanto en un letrero como en una pantalla de celular."
  },

  torotoro: {
    slug: "torotoro", cat: "marca",
    kind: "Rediseño, turismo",
    name: "Toro Toro Recreacional",
    short: "Traducir un paisaje extraordinario a una interfaz que le haga justicia.",
    role: "Rediseño de identidad e interfaz.",
    problem: "Un destino con un atractivo natural enorme, comunicado con recursos genéricos que podían pertenecer a cualquier lugar del mundo.",
    did: [
      "Dirección visual construida desde el paisaje y la geología del lugar",
      "Jerarquía que pone la experiencia por delante de la información administrativa",
      "Sistema gráfico aplicable a piezas digitales e impresas"
    ],
    result: "Una identidad que se reconoce como de ese lugar y de ningún otro."
  },

  lozada: {
    slug: "lozada", cat: "web", link: "https://lozadaexpress.com",
    kind: "Sitio de servicios",
    name: "Lozada Express",
    short: "Transporte y mudanzas. Lo único que importa es que la persona cotice rápido.",
    role: "Diseño UX/UI y maquetación.",
    problem: "El cliente llega con una necesidad urgente y concreta, y cualquier fricción entre la portada y el contacto es una cotización perdida.",
    did: [
      "Servicios explicados en lenguaje del cliente, no en jerga logística",
      "Contacto y WhatsApp accesibles desde cualquier punto del recorrido",
      "Diseño priorizando celular, que es desde donde llega la mayoría"
    ],
    result: "Un recorrido corto y directo desde el servicio hasta la solicitud de cotización."
  },

  lite: {
    slug: "lite-thinking", cat: "producto", sealed: true,
    kind: "Producto, bajo confidencialidad",
    name: "Lite Thinking",
    short: "Trabajo de producto para cliente en Colombia, bajo acuerdo de confidencialidad.",
    role: "Diseño UX/UI de producto.",
    problem: "Proyecto sujeto a acuerdo de confidencialidad.",
    did: [
      "Diseño de interfaz y flujos de producto",
      "Trabajo con equipo distribuido"
    ],
    result: "Puedo dar detalles en conversación directa.",
    note: "Conviene revisar el contrato antes de publicar cualquier detalle o captura."
  }

  /* ----------------------------------------------------------
     PLANTILLA PARA UN PROYECTO NUEVO
     Copiá este bloque arriba del cierre, quitale los /* y poné
     tus datos. Después cambiá una línea ["__libre", ...] de
     COMPOSICION por ["mi-proyecto", "c-md", "a-wide"].

  ,
  miProyecto: {
    slug: "mi-proyecto",          // carpeta en assets/img
    cat: "producto",              // producto | web | academico | marca
    // sealed: true,              // descomentá si está bajo confidencialidad
    kind: "Producto y sistemas",
    name: "Nombre del proyecto",
    short: "Dos líneas que digan de qué se trata y por qué importa.",
    role: "Qué hiciste vos exactamente.",
    problem: "Con qué llegó el cliente y qué no funcionaba.",
    did: [
      "Primera decisión de diseño",
      "Segunda decisión de diseño"
    ],
    result: "Qué cambió al final.",
    // link: "https://ejemplo.com",
    // chips: ["Figma", "Design tokens"]
  }
     ---------------------------------------------------------- */
};

/* ------------------------------------------------------------
   COMPOSICION
   Retícula de 12 columnas. Cada tarjeta declara cuántas ocupa.
   c-xl 12 (destacada, imagen y texto lado a lado)
   c-lg  8  ·  c-md 6  ·  c-sm 4
   Proporción de la lámina: a-wide 16:10  ·  a-std 4:3
   ------------------------------------------------------------ */
const COMPOSICION = [
  ["toloma",        "c-xl", ""],
  ["deltax",        "c-md", "a-wide"],
  ["yms",           "c-md", "a-wide"],
  ["c2b",           "c-md", "a-wide"],
  ["protex",        "c-md", "a-wide"],
  ["enpp",          "c-lg", "a-wide"],
  ["linkinmybioDS", "c-sm", "a-std"],
  ["marcas",        "c-md", "a-wide"],
  ["panoso",        "c-md", "a-wide"],
  ["emapro",        "c-md", "a-wide"],
  ["umss",          "c-lg", "a-wide"],
  ["fees",          "c-sm", "a-std"],
  ["destinos",      "c-md", "a-wide"],
  ["megam",         "c-md", "a-wide"],
  ["hospital",      "c-md", "a-wide"],
  ["torotoro",      "c-md", "a-wide"],
  ["lozada",        "c-md", "a-wide"],
  ["provtec",       "c-md", "a-wide"],
  ["linkinmybio",   "c-md", "a-wide"],
  ["blue",        "c-md", "a-wide"],
  ["lite",          "c-md", "a-wide"]

  /* Ranuras libres para los proyectos que vengan.
     Cuando tengas uno nuevo: copiá la PLANTILLA de arriba dentro de
     PROYECTOS, ponele su nombre, y cambiá una de estas dos líneas por
     ["mi-proyecto", "c-md", "a-wide"].
     Si querés más espacios, duplicá la línea. Si no querés que se vean
     mientras tanto, poné MOSTRAR_RANURAS en false, acá abajo. */

];

/* Las ranuras vacías se ven en el sitio. Ponelo en false antes de
   publicar si preferís que nadie más las vea. */
const MOSTRAR_RANURAS = true;

const ETIQUETA = {
  producto:  "Producto y sistemas",
  web:       "Sitio corporativo",
  academico: "Sector académico",
  marca:     "Marca e identidad"
};

/* ============================================================
   UTILIDADES
   ============================================================ */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const portada = p => p.slug ? `assets/img/${p.slug}/01.jpg` : "";

/* Quita el marcador en cuanto la imagen está lista, incluso si vino de caché. */
function ligarImagen(img) {
  if (!img) return;
  const box = img.parentElement;
  const ok = () => box.classList.remove("pending");
  const no = () => box.classList.add("pending");
  if (img.complete) { img.naturalWidth > 0 ? ok() : no(); return; }
  img.addEventListener("load", ok, { once: true });
  img.addEventListener("error", no, { once: true });
}

const flecha = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;

/* ============================================================
   TRABAJO
   ============================================================ */
function lamina(p, ratio) {
  if (p.sealed) {
    return `<div class="shot sealed ${ratio}"><span class="sealed-txt">Bajo confidencialidad</span></div>`;
  }
  return `<div class="shot pending ${ratio}" data-src="${esc(p.slug)}/01.jpg">
            <img src="${portada(p)}" alt="${esc(p.name)}" loading="lazy" decoding="async">
          </div>`;
}

/* Ranura vacía: no se puede abrir, no entra en los filtros. */
function ranura(span) {
  return `
  <div class="card ghost rise ${span}" data-cat="__libre">
    <div class="ghost-in">
      <span class="ghost-plus" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
      </span>
      <b>Espacio para un proyecto nuevo</b>
      <small>se agrega en js/portafolio.js</small>
    </div>
  </div>`;
}

function tarjeta(id, span, ratio) {
  if (id === "__libre") return MOSTRAR_RANURAS ? ranura(span) : "";
  const p = PROYECTOS[id];
  if (!p) return "";
  return `
  <button class="card rise ${span} k-${p.cat}" data-id="${id}" data-cat="${p.cat}" aria-label="Abrir el caso de ${esc(p.name)}">
    ${lamina(p, ratio)}
    <div class="card-body">
      <span class="kind">${esc(p.kind)}</span>
      <h3 class="t-h4">${esc(p.name)}</h3>
      <p>${esc(p.short)}</p>
      ${p.chips ? `<div class="chips">${p.chips.map(c => `<i>${esc(c)}</i>`).join("")}</div>` : ""}
      <div class="card-foot">
        <span>${p.sealed ? "Lo cuento en entrevista" : "Ver el caso"}</span>
        <span class="go" aria-hidden="true">${flecha}</span>
      </div>
    </div>
  </button>`;
}

const work = $("#work");
work.innerHTML = COMPOSICION.map(([id, span, ratio]) => tarjeta(id, span, ratio)).join("");
/* Las tarjetas entran en cascada corta, no todas de golpe. */
$$(".card", work).forEach((k, i) => k.style.setProperty("--rd", (i % 4) * 55 + "ms"));
$$(".shot.pending img", work).forEach(ligarImagen);

$$(".filters .pill").forEach(chip => {
  chip.addEventListener("click", () => {
    const f = chip.dataset.f;
    $$(".filters .pill").forEach(c => c.setAttribute("aria-pressed", String(c === chip)));
    $$(".card", work).forEach(k => k.classList.toggle("hide", f !== "all" && k.dataset.cat !== f));
  });
});

/* ============================================================
   PANEL DE CASO
   ============================================================ */
const sheet = $("#sheet");
const sheetBody = $("#sheet-body");
const sheetContent = $("#sheet-content");
let ultimoFoco = null;

function abrirCaso(id) {
  const p = PROYECTOS[id];
  if (!p) return;
  ultimoFoco = document.activeElement;

  sheetContent.className = "sheet-in k-" + p.cat;

  let media;
  if (p.sealed) {
    media = `<div class="shot sealed a-wide" style="border-radius:var(--r-md);margin-bottom:28px"><span class="sealed-txt">Bajo confidencialidad</span></div>`;
  } else {
    media = `
      <div class="shot pending a-wide" data-src="${esc(p.slug)}/01.jpg">
        <img src="${portada(p)}" alt="${esc(p.name)}" decoding="async">
      </div>
      <div class="gal">
        ${[2, 3, 4, 5].map(k => `
          <button type="button" data-zoom aria-label="Ampliar imagen ${k}">
            <img src="assets/img/${esc(p.slug)}/0${k}.jpg" alt="${esc(p.name)}, vista ${k}" loading="lazy">
          </button>`).join("")}
      </div>`;
  }

  sheetContent.innerHTML = `
    <span class="tagline"><i></i>${esc(ETIQUETA[p.cat] || p.cat)}</span>
    <h3 id="sheet-title">${esc(p.name)}</h3>
    <p class="sub">${esc(p.short)}</p>
    ${media}
    ${p.note ? `<div class="blk"><h4>Nota</h4><p>${esc(p.note)}</p></div>` : ""}
    <div class="blk"><h4>Mi rol</h4><p>${esc(p.role)}</p></div>
    <div class="blk"><h4>El problema</h4><p>${esc(p.problem)}</p></div>
    <div class="blk"><h4>Qué hice</h4><ul>${p.did.map(d => `<li>${esc(d)}</li>`).join("")}</ul></div>
    <div class="blk"><h4>Resultado</h4><p>${esc(p.result)}</p></div>
    ${p.sites ? `<div class="blk"><h4>Portales publicados</h4><div class="sheet-links">${
      p.sites.map(s => `<a class="pill" href="${s[1]}" target="_blank" rel="noopener">${esc(s[0])}</a>`).join("")
    }</div></div>` : ""}
    ${p.link ? `<div class="sheet-links"><a class="btn btn-1" href="${p.link}" target="_blank" rel="noopener">Visitar el sitio ${flecha}</a></div>` : ""}
  `;

  ligarImagen($(".shot.pending img", sheetContent));
  $$(".gal img", sheetContent).forEach(img => {
    const quitar = () => img.parentElement.classList.add("gone");
    if (img.complete && img.naturalWidth === 0) return quitar();
    img.addEventListener("error", quitar, { once: true });
  });

  sheetBody.scrollTop = 0;
  sheet.classList.add("open");
  requestAnimationFrame(() => sheet.classList.add("in"));
  document.body.style.overflow = "hidden";
  $(".x", sheet).focus();
}

function cerrarCaso() {
  sheet.classList.remove("in");
  const fin = () => {
    sheet.classList.remove("open");
    document.body.style.overflow = "";
    if (ultimoFoco) ultimoFoco.focus();
  };
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) fin();
  else setTimeout(fin, 260);
}

work.addEventListener("click", e => {
  const b = e.target.closest(".card");
  if (b && b.dataset.id) abrirCaso(b.dataset.id);
});
sheet.addEventListener("click", e => {
  if (e.target.closest("[data-close]")) cerrarCaso();
});

/* ============================================================
   VISOR DE IMÁGENES
   ============================================================ */
const view = $("#view");
const viewImg = $("#view-img");
const viewCap = $("#view-cap");
let lista = [], indice = 0, focoPrevio = null;

function mostrar(n) {
  if (!lista.length) return;
  indice = (n + lista.length) % lista.length;
  viewImg.src = lista[indice].src;
  viewImg.alt = lista[indice].alt || "";
  viewCap.textContent = lista.length > 1 ? `${indice + 1} de ${lista.length}` : "";
}

function abrirVisor(img) {
  lista = $$(".shot img, .gal img", sheetContent).filter(i => i.naturalWidth > 0);
  let i = lista.indexOf(img);
  if (i < 0) { lista = [img]; i = 0; }
  view.classList.toggle("lone", lista.length < 2);
  mostrar(i);
  focoPrevio = document.activeElement;
  view.classList.add("open");
  $(".v-x", view).focus();
}

function cerrarVisor() {
  view.classList.remove("open");
  viewImg.removeAttribute("src");
  if (focoPrevio) focoPrevio.focus();
}

sheetContent.addEventListener("click", e => {
  const img = e.target.closest(".gal img, .shot img");
  if (img && img.naturalWidth > 0) abrirVisor(img);
});

view.addEventListener("click", e => {
  const b = e.target.closest("[data-v]");
  if (!b) { if (e.target === view || e.target.tagName === "FIGURE") cerrarVisor(); return; }
  const k = b.dataset.v;
  if (k === "close") cerrarVisor();
  if (k === "prev") mostrar(indice - 1);
  if (k === "next") mostrar(indice + 1);
});

document.addEventListener("keydown", e => {
  if (view.classList.contains("open")) {
    if (e.key === "Escape") { e.stopPropagation(); cerrarVisor(); }
    if (e.key === "ArrowLeft") mostrar(indice - 1);
    if (e.key === "ArrowRight") mostrar(indice + 1);
    return;
  }
  if (e.key === "Escape" && sheet.classList.contains("open")) cerrarCaso();
}, true);

/* ============================================================
   TEMA
   El claro es el tema de la casa: así arranca siempre, sin mirar
   la preferencia del sistema. El oscuro queda como opción del
   botón, y se recuerda solo si la persona lo eligió a mano.
   ============================================================ */
const raiz = document.documentElement;
const btnTema = $("#theme");

raiz.setAttribute("data-theme", "light");
try {
  const guardado = localStorage.getItem("np-tema");
  if (guardado === "dark") raiz.setAttribute("data-theme", "dark");
} catch (_) { /* el navegador puede bloquear el almacenamiento */ }

btnTema.addEventListener("click", () => {
  const oscuro = raiz.getAttribute("data-theme") === "dark";
  const nuevo = oscuro ? "light" : "dark";
  raiz.setAttribute("data-theme", nuevo);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", nuevo === "dark" ? "#110E1A" : "#FBFAFD");
  btnTema.setAttribute("aria-pressed", String(nuevo === "dark"));
  try { localStorage.setItem("np-tema", nuevo); } catch (_) {}
});

/* ============================================================
   SISTEMA DE DISEÑO
   Los cinco del logo de Figma, cada uno con su trabajo.
   ============================================================ */
const TOKENS = [
  ["Violeta", "#A259FF", "Acción principal"],
  ["Azul", "#1ABCFE", "Producto y sistemas"],
  ["Verde", "#0ACF83", "Éxito y académico"],
  ["Naranja", "#F24E1E", "Marca e identidad"],
  ["Coral", "#FF7262", "Sitios corporativos"],
  ["Tinta", "#140F1F", "Texto"]
];

$("#swatches").innerHTML = TOKENS.map(t => `
  <button class="sw" data-hex="${t[1]}" aria-label="Copiar ${t[0]}, ${t[1]}">
    <i style="background:${t[1]}"></i>
    <b>${t[0]}</b>
    <span>${t[1]}</span>
    <span>${t[2]}</span>
    <em>copiado</em>
  </button>`).join("");

$("#swatches").addEventListener("click", e => {
  const b = e.target.closest(".sw");
  if (!b) return;
  if (navigator.clipboard) navigator.clipboard.writeText(b.dataset.hex).catch(() => {});
  b.classList.add("copied");
  setTimeout(() => b.classList.remove("copied"), 900);
});

const campo = $("#field"), entrada = $("#mail"), pista = $("#hint");
entrada.addEventListener("input", () => {
  const v = entrada.value.trim();
  campo.classList.remove("ok", "bad");
  if (!v) { pista.textContent = "El error se explica antes de enviar, no después."; return; }
  if (/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v)) {
    campo.classList.add("ok");
    pista.textContent = "Correo válido. El sistema confirma, no solo corrige.";
  } else {
    campo.classList.add("bad");
    pista.textContent = "Falta el arroba o el dominio. Por ejemplo: nombre@empresa.com";
  }
});

const toast = $("#toast");
let tToast;
$("#save").addEventListener("click", () => {
  toast.classList.add("up");
  clearTimeout(tToast);
  tToast = setTimeout(() => toast.classList.remove("up"), 2300);
});

/* ============================================================
   FIDELIDAD
   ============================================================ */
$$("[data-fid]").forEach(tab => {
  tab.addEventListener("click", () => {
    const f = tab.dataset.fid;
    $$("[data-fid]").forEach(t => t.setAttribute("aria-pressed", String(t === tab)));
    $$(".fid-stage svg").forEach(s => s.classList.toggle("on", s.dataset.f === f));
    $$(".fid-note .pane").forEach(s => s.classList.toggle("on", s.dataset.f === f));
  });
});

/* ============================================================
   REVELADO Y NAVEGACIÓN ACTIVA
   Sin escuchas de scroll: IntersectionObserver para todo.
   ============================================================ */
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduce) {
  $$(".rise").forEach(el => el.classList.add("seen"));
} else {
  const porVer = new Set($$(".rise"));

  /* Red de seguridad. Con un salto de ancla o un scroll muy rápido, el
     observador puede no llegar a ver un bloque que ya pasó por pantalla.
     Nada debe quedarse invisible por culpa de la animación. */
  const barrer = () => {
    if (!porVer.size) return;
    for (const el of [...porVer]) {
      if (el.getBoundingClientRect().top < window.innerHeight - 40) {
        el.classList.add("seen");
        porVer.delete(el);
        io.unobserve(el);
      }
    }
  };

  const io = new IntersectionObserver(entradas => {
    entradas.forEach(en => {
      if (!en.isIntersecting && en.boundingClientRect.top > 0) return;
      en.target.classList.add("seen");
      porVer.delete(en.target);
      io.unobserve(en.target);
    });
    barrer();
  }, { threshold: 0.06, rootMargin: "0px 0px -40px 0px" });

  porVer.forEach(el => io.observe(el));
  addEventListener("load", barrer, { once: true });
  setTimeout(barrer, 1200);
}

const enlaces = $$("#nav a");
const secciones = enlaces
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

/* Una sola pastilla que viaja entre secciones. Se mide con
   offsetLeft/offsetWidth, que no fuerza cálculo de estilo como
   getBoundingClientRect en cadena. */
const indicador = $("#nav-ind");

function moverIndicador() {
  if (!indicador) return;
  const activo = $("#nav a.on");
  if (!activo || getComputedStyle(indicador).display === "none") {
    indicador.classList.remove("viva");
    return;
  }
  indicador.style.setProperty("--x", activo.offsetLeft + "px");
  indicador.style.setProperty("--w", activo.offsetWidth + "px");
  indicador.classList.add("viva");
}

/* En el riel angosto la sección activa puede quedar fuera de vista.
   Se corrige el mínimo necesario y sin animación, para no pelear con
   el dedo de quien está desplazando la página. */
function acercarActivo() {
  const riel = $("#nav");
  const activo = $("#nav a.on");
  if (!riel || !activo || riel.scrollWidth <= riel.clientWidth + 1) return;
  const izq = activo.offsetLeft, der = izq + activo.offsetWidth;
  const vIzq = riel.scrollLeft, vDer = vIzq + riel.clientWidth;
  if (izq < vIzq + 12) riel.scrollLeft = Math.max(0, izq - 12);
  else if (der > vDer - 34) riel.scrollLeft = der - riel.clientWidth + 34;
}

if (secciones.length) {
  const ioNav = new IntersectionObserver(entradas => {
    entradas.forEach(en => {
      if (!en.isIntersecting) return;
      enlaces.forEach(a => a.classList.toggle("on", a.getAttribute("href") === `#${en.target.id}`));
      moverIndicador();
      acercarActivo();
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  secciones.forEach(s => ioNav.observe(s));

  addEventListener("load", moverIndicador, { once: true });
  /* Al cambiar el ancho la pastilla quedaría descolocada. */
  let remedir;
  addEventListener("resize", () => {
    clearTimeout(remedir);
    indicador && (indicador.style.transition = "none");
    remedir = setTimeout(() => {
      moverIndicador();
      requestAnimationFrame(() => indicador && indicador.style.removeProperty("transition"));
    }, 120);
  });
}
