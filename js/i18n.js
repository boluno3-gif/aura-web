/* =========================================================
   AURA Design · idiomas (español por defecto, inglés opcional)
   - El HTML está escrito en español.
   - Si el visitante elige EN, este archivo cambia los textos fijos
     de la página buscando cada frase en español y poniendo su traducción.
   - Los textos que pinta main.js usan t("español", "inglés").
   Para cambiar una traducción, edita TEXTOS o ATRIBUTOS.
   ========================================================= */

// También se puede forzar con el enlace: index.html?lang=en o ?lang=es
const pedido = new URLSearchParams(location.search).get("lang");
if (pedido === "es" || pedido === "en") localStorage.setItem("idioma", pedido);
const IDIOMA = localStorage.getItem("idioma") === "en" ? "en" : "es";
const EN = IDIOMA === "en";
const t = (es, en) => (EN ? en : es);

const FLECHA = '<span aria-hidden="true">→</span>';

// [español, inglés] — el contenido exacto de cada elemento
const TEXTOS = [
  // Cabecera y menú
  ["Colección", "Collection"],
  ["Nosotros", "About us"],
  ["El taller", "The workshop"],
  ["Preguntas", "FAQ"],
  ["Contacto", "Contact"],
  ["Tienda en Etsy", "Etsy shop"],

  // Portada
  ["Hechas a mano en Málaga", "Handmade in Málaga"],
  ["Luz con forma<br />para cada <em>rincón</em>", "Sculpted light<br />for every <em>corner</em>"],
  ["Lámparas de mesa fabricadas por encargo. Una a una, capa a capa<br />Con luz LED regulable en tres tonos",
   "Table lamps made to order. One by one, layer by layer<br />With dimmable LED light in three tones"],
  [`Ver la colección ${FLECHA}`, `See the collection ${FLECHA}`],
  [`mira cómo nace cada lámpara ${FLECHA}`, `see how each lamp is made ${FLECHA}`],

  // Destacadas
  ["Destacadas", "Featured"],
  [`Ver todas ${FLECHA}`, `View all ${FLECHA}`],

  // De día a noche
  ["De día a noche", "From day to night"],
  ["Cuando cae la tarde…", "When evening falls…"],
  ["…tu casa se <em>ilumina</em>", "…your home <em>lights up</em>"],
  [`Explora la colección ${FLECHA}`, `Explore the collection ${FLECHA}`],

  // Colección
  ["La colección", "The collection"],
  ["Seis esculturas que dan <em>luz</em>", "Six sculptures that <em>glow</em>"],
  ["Apagadas son esculturas.<br />Encendidas, la luz se cuela entre las capas y dibuja sombras suaves por toda la habitación.",
   "Switched off, they are sculptures.<br />Switched on, light slips between the layers and casts soft shadows across the room."],

  // Nuestra historia
  ["Nuestra historia", "Our story"],
  ["Así nace un <em>aura</em>", "How an <em>aura</em> is born"],
  ["La idea", "The idea"],
  ["La impresión", "The making"],
  ["Por encargo", "Made to order"],
  ["La luz", "The light"],
  ["Una lámpara que también es <em>escultura</em>", "A lamp that is also a <em>sculpture</em>"],
  ["Queríamos piezas que tuvieran sentido de día, cuando están apagadas, y que de noche cambiaran por completo. Por eso cada diseño juega con lamas, estrías y espirales que la luz atraviesa.",
   "We wanted pieces that work by day, switched off, and transform completely at night. That's why each design plays with slats, ridges and spirals for the light to pass through."],
  ["Seis diseños · nombres del mar, la seda y la luz", "Six designs · names of the sea, silk and light"],
  ["Capa a capa, en <em>Málaga</em>", "Layer by layer, in <em>Málaga</em>"],
  ["Cada lámpara se imprime en 3D en nuestro taller, capa sobre capa, hasta levantar formas que serían imposibles de hacer a mano. Después la montamos, la probamos y la revisamos antes de embalarla.",
   "Each lamp is 3D printed in our workshop, layer upon layer, creating shapes that would be impossible to make by hand. Then we assemble it, test it and inspect it before packing it."],
  ["Impresión 3D · montaje a mano", "3D printing · hand assembly"],
  ["Se hace cuando la <em>pides</em>", "Made when you <em>order</em> it"],
  ["No guardamos almacenes llenos. Tu lámpara empieza a imprimirse cuando haces el pedido: tardamos de 3 a 5 días laborables en hacerla y de 2 a 4 en que te llegue, con envío gratis en España.",
   "We don't keep warehouses full of stock. Your lamp starts printing when you place your order: it takes us 3 to 5 working days to make it and 2 to 4 days to reach you, with free shipping within Spain."],
  ["Tres tonos, un <em>mando</em>", "Three tones, one <em>remote</em>"],
  ["Luz LED regulable: cálida (3000 K), neutra (4000 K) o fría (6400 K), y la intensidad que quieras. Apenas da calor, así que puedes dejarla encendida toda la noche. Se conecta por USB de 5 V, con adaptador de enchufe incluido.",
   "Dimmable LED light: warm (3000 K), neutral (4000 K) or cool (6400 K), at any brightness you like. It gives off almost no heat, so you can leave it on all night. It connects via 5 V USB, with a plug adapter included."],
  ["PLA · LED regulable · USB 5 V", "PLA · Dimmable LED · 5 V USB"],
  ["“La luz es el primer material con el que diseñamos.”", "“Light is the first material we design with.”"],
  [`Cómo trabajamos ${FLECHA}`, `How we work ${FLECHA}`],

  // Elige tu luz
  ["Elige tu luz", "Choose your light"],
  ["Una lámpara, <em>tres</em> ambientes", "One lamp, <em>three</em> moods"],
  ["Con el mando del cable enciendes, apagas, cambias el tono y subes o bajas la intensidad. Pruébalo:",
   "With the remote on the cable you switch it on and off, change the tone and turn the brightness up or down. Try it:"],
  ['<i style="--c:#ffb565"></i>Cálida <small>3000 K</small>', '<i style="--c:#ffb565"></i>Warm <small>3000 K</small>'],
  ['<i style="--c:#fff1d6"></i>Neutra <small>4000 K</small>', '<i style="--c:#fff1d6"></i>Neutral <small>4000 K</small>'],
  ['<i style="--c:#d8ecff"></i>Fría <small>6400 K</small>', '<i style="--c:#d8ecff"></i>Cool <small>6400 K</small>'],

  // El taller
  ["Lámparas 3D, hechas en <em>Málaga</em>", "3D lamps, made in <em>Málaga</em>"],
  ["Diseñamos e imprimimos cada lámpara en 3D en PLA, un plástico de origen vegetal que se fabrica a partir de recursos renovables como el almidón de maíz o la caña de azúcar, en lugar de petróleo. Es rígido, ligero y resistente para el uso diario, no es tóxico y, al final de su vida, se puede compostar en plantas industriales.",
   "We design and 3D print every lamp in PLA, a plant-based plastic made from renewable resources such as corn starch or sugarcane, rather than petroleum. It's rigid, lightweight and durable enough for everyday use, non-toxic and, at the end of its life, it can be composted in industrial facilities."],
  [`Ver lámparas de mesa ${FLECHA}`, `See table lamps ${FLECHA}`],
  [`Escríbenos ${FLECHA}`, `Get in touch ${FLECHA}`],
  ["Lo <em>diseñamos</em>", "We <em>design</em> it"],
  ["Dibujamos cada forma pensando en cómo se verá apagada y en cómo la atravesará la luz.",
   "We draw each shape thinking about how it will look switched off and how the light will pass through it."],
  ["Lo <em>imprimimos</em>", "We <em>print</em> it"],
  ["Al recibir tu pedido, la impresora levanta tu lámpara capa a capa. De 3 a 5 días laborables.",
   "Once we receive your order, the printer builds your lamp layer by layer. 3 to 5 working days."],
  ["Lo <em>montamos</em>", "We <em>assemble</em> it"],
  ["Le ponemos la luz LED y la montamos a mano, pieza a pieza. Después la revisamos con calma y la embalamos con mimo para que llegue perfecta.",
   "We fit the LED light and assemble it by hand, piece by piece. Then we inspect it carefully and pack it with care so it arrives in perfect condition."],
  ["Te la <em>enviamos</em>", "We <em>ship</em> it"],
  ['Envío gratis en España en 2 a 4 días. Si la pides hoy, te llega <strong id="entrega">en unos días</strong>.',
   'Free shipping within Spain in 2 to 4 days. Order today and it will arrive <strong id="entrega">in a few days</strong>.'],
  ["Nada sale de la impresora hasta que alguien lo pide.<br />Así cada pieza se hace con calma y para una casa concreta, la tuya.",
   "Nothing leaves the printer until someone orders it.<br />That way, each piece is made slowly and carefully, for one home in particular: yours."],

  // Preguntas
  ["Preguntas frecuentes", "Frequently asked questions"],
  ["Todo lo que nos <em>preguntáis</em>", "Your questions, <em>answered</em>"],
  ['¿No encuentras tu respuesta? Escríbenos a <a href="mailto:impresiones.los3deseos@gmail.com">impresiones.los3deseos@gmail.com</a>.',
   'Can\'t find what you\'re looking for? Email us at <a href="mailto:impresiones.los3deseos@gmail.com">impresiones.los3deseos@gmail.com</a>.'],

  // Cierre
  ["Hecho por encargo en Málaga", "Made to order in Málaga"],
  ["¿Te llevas una a <em>casa</em>?", "Ready to take one <em>home</em>?"],
  ["Compra tu lámpara en nuestra tienda de Etsy o escríbenos para cualquier duda, regalo o idea.",
   "Buy your lamp from our Etsy shop, or get in touch with any question, gift request or idea."],
  [`Comprar en Etsy ${FLECHA}`, `Buy on Etsy ${FLECHA}`],
  ["Hecho en Málaga", "Made in Málaga"],
  ["Envío gratis en España", "Free shipping within Spain"],
  ["LED en 3 tonos", "3-tone LED light"],
  ["30 días de devolución", "30-day returns"],

  // Pie
  ["Pide un deseo. Enciéndelo.<br />Lámparas impresas en 3D en Málaga.", "Make a wish. Light it up.<br />3D-printed lamps in Málaga."],
  ["Explorar", "Explore"],
  ["Compras", "Shopping"],
  ["Málaga, España", "Málaga, Spain"],
  ["Impreso en 3D · Por encargo · Málaga", "3D printed · Made to order · Málaga"],

  // Ficha de producto
  ["Hecho por encargo", "Made to order"],
  ["Medidas", "Dimensions"],
  ["Luz", "Light"],
  ["Entrega", "Delivery"],
  ["PLA impreso en 3D", "3D-printed PLA"],
  ["LED regulable: cálida, neutra o fría", "Dimmable LED: warm, neutral or cool"],
  ["USB 5 V con adaptador de enchufe", "5 V USB with plug adapter"],
];

// Textos de atributos (alt, aria-label…): [español, inglés]
const ATRIBUTOS = [
  ["AURA Design. Inicio", "AURA Design. Home"],
  ["Principal", "Main"],
  ["Abrir menú", "Open menu"],
  ["Una mano se acerca a una lámpara escultórica encendida", "A hand reaches towards a lit sculptural lamp"],
  ["Lámparas destacadas", "Featured lamps"],
  ["Lámpara Aurora sobre un mueble de madera, de día apagada y de noche encendida", "Aurora lamp on a wooden cabinet, switched off by day and on at night"],
  ["Nuestra historia", "Our story"],
  ["Lámpara Lamas apagada", "Lamas lamp switched off"],
  ["Detalle de las lamas impresas en 3D de la lámpara Ola", "Detail of the 3D-printed slats of the Ola lamp"],
  ["Lámpara Marea apagada", "Marea lamp switched off"],
  ["Lámpara Seda encendida", "Seda lamp switched on"],
  ["Tono de luz", "Light tone"],
  ["Lámpara Lamas encendida", "Lamas lamp switched on"],
  ["Las seis lámparas", "The six lamps"],
  ["Cerrar", "Close"],
];

function traducirPagina() {
  document.documentElement.lang = IDIOMA;
  if (!EN) return;

  document.title = "AURA Design · 3D-printed lamps from Málaga";
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = "Designer table lamps, 3D printed to order in Málaga. Dimmable LED light in three tones: warm, neutral or cool. Free shipping in Spain.";

  // Se comparan los textos "normalizados" (como los escribe el navegador y sin espacios de más)
  const plantilla = document.createElement("template");
  const normal = (html) => { plantilla.innerHTML = html; return plantilla.innerHTML.replace(/\s+/g, " ").trim(); };
  const mapa = new Map(TEXTOS.map(([es, en]) => [normal(es), en]));
  document.body.querySelectorAll("*").forEach((el) => {
    if (el.tagName === "SCRIPT" || !el.isConnected) return;
    const en = mapa.get(el.innerHTML.replace(/\s+/g, " ").trim());
    if (en !== undefined) el.innerHTML = en;
  });

  const attrs = new Map(ATRIBUTOS);
  document.body.querySelectorAll("[alt], [aria-label]").forEach((el) => {
    ["alt", "aria-label"].forEach((a) => {
      const en = attrs.get(el.getAttribute(a));
      if (en) el.setAttribute(a, en);
    });
  });
}

function iniciarSelectorIdioma() {
  document.querySelectorAll("[data-idioma]").forEach((b) => {
    b.setAttribute("aria-pressed", b.dataset.idioma === IDIOMA);
    b.addEventListener("click", () => {
      if (b.dataset.idioma === IDIOMA) return;
      localStorage.setItem("idioma", b.dataset.idioma);
      location.reload();
    });
  });
}

traducirPagina();
iniciarSelectorIdioma();
