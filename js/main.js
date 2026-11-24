/* =========================================================
   AURA Design · lógica de la web
   Para cambiar precios, oferta o lámparas, edita CONFIG y LAMPARAS.
   ========================================================= */

const CONFIG = {
  correo: "impresiones.los3deseos@gmail.com",
  etsy: "https://www.etsy.com/shop/Los3Deseos",
  oferta: { porcentaje: 20, nombre: "Black Friday", desde: "2026-11-23", hasta: "2026-12-01" },
  navidad: { pedirAntesDe: "2026-12-10" },
  festivos: ["2026-12-08", "2026-12-25", "2027-01-01", "2027-01-06"],
  fabricacion: { min: 3, max: 5 }, // días laborables
  envio: { min: 2, max: 4 },
  devolucionDias: 30,
};

// fotos: n.º de fotos en assets/fotos/<carpeta>/ — la 1 es encendida y la 2 apagada
const LAMPARAS = [
  { id: "aurora", nombre: "Aurora", precio: 49.9, medidas: "17 × 18,8 × 17 cm", etsy: "4622716539", carpeta: "aurora", fotos: 5,
    lema: t("La luz atraviesa las ondas y crea un brillo suave, como una aurora.",
            "Light passes through the waves and creates a soft glow, like an aurora."),
    descripcion: t("Una lámpara de mesa de formas orgánicas, recorrida por finas estrías que se ondulan de arriba abajo. Apagada parece una escultura, y encendida la luz atraviesa las ondas y crea un brillo suave y envolvente. Más grande que nuestras minis: queda bien en el salón, una consola o la mesita de noche.",
                   "A table lamp with organic forms, traced by fine ridges that ripple from top to bottom. Switched off it looks like a sculpture; switched on, the light passes through the waves and creates a soft, enveloping glow. One of our larger pieces, it looks great in the living room, on a console table or on a bedside table.") },
  { id: "lamas", nombre: "Lamas", precio: 44.9, medidas: "11 × 22 × 11 cm", etsy: "4618371309", carpeta: "lamas", fotos: 6,
    lema: t("La luz se cuela entre las lamas y dibuja sombras suaves.",
            "Light slips between the slats and casts soft shadows."),
    descripcion: t("Una lámpara de mesa de lamas onduladas sobre una base acanalada. Apagada parece una escultura, y encendida la luz se cuela entre las lamas y dibuja sombras suaves. Queda bien en la mesita de noche, una estantería o el salón.",
                   "A table lamp with wavy slats on a fluted base. Switched off it looks like a sculpture; switched on, the light slips between the slats and casts soft shadows. Perfect for a bedside table, a shelf or the living room.") },
  { id: "ola-doble", nombre: "Ola", precio: 44.9, medidas: "11 × 22 × 11 cm", etsy: "4622715284", carpeta: "ola-doble", fotos: 6,
    lema: t("Decenas de lamas que se ondulan en doble ola de arriba abajo.",
            "Dozens of slats rippling in a double wave from top to bottom."),
    descripcion: t("Una lámpara de mesa en forma de columna, con decenas de lamas blancas que se ondulan en doble ola y cambian de aspecto desde cada ángulo. Apagada parece una escultura, y encendida la luz se filtra entre las lamas y dibuja una trama cálida y suave. Alta y esbelta, queda bien en el salón, una consola, el escritorio o la mesita de noche.",
                   "A column-shaped table lamp with dozens of white slats that ripple in a double wave and change appearance from every angle. Switched off it looks like a sculpture; switched on, the light filters between the slats and draws a warm, soft pattern. Tall and slender, it looks great in the living room, on a console table, a desk or a bedside table.") },
  { id: "seda", nombre: "Seda", precio: 39.9, medidas: "15 × 22 × 15 cm", etsy: "4622739074", carpeta: "seda", fotos: 6,
    lema: t("Una silueta suave que se retuerce, con estrías finas como la seda.",
            "A soft, twisting silhouette with fine ridges like silk."),
    descripcion: t("Una lámpara de mesa de líneas suaves que gira sobre sí misma, con un acabado de estrías finas que recuerda a la seda, sobre una base redonda en tono madera. Apagada luce como una pieza de decoración, y encendida reparte una luz uniforme y cálida. Queda bien en el salón, el escritorio, una estantería o la mesita de noche.",
                   "A softly curved table lamp that twists around itself, with a finish of fine ridges reminiscent of silk, on a round wood-tone base. Switched off it's a decorative piece; switched on, it gives an even, warm light. Perfect for the living room, a desk, a shelf or a bedside table.") },
  { id: "opalo-mini", nombre: "Ópalo", precio: 34.9, medidas: "13,5 × 21 × 13,5 cm", etsy: "4616261694", carpeta: "opalo", fotos: 6,
    lema: t("Brilla entera, como una piedra de ópalo con luz dentro.",
            "It glows all over, like an opal stone with light inside."),
    descripcion: t("Una lámpara de mesa con forma ondulada y retorcida. Apagada luce como una pieza de decoración, y encendida brilla entera con una luz cálida y suave. Queda bien en la mesita de noche, una estantería o el salón.",
                   "A table lamp with a wavy, twisted shape. Switched off it's a decorative piece; switched on, it glows all over with a warm, soft light. Perfect for a bedside table, a shelf or the living room.") },
  { id: "marea-mini", nombre: "Marea", precio: 34.9, medidas: "13,2 × 19,6 × 13,2 cm", etsy: "4615974607", carpeta: "marea", fotos: 6,
    lema: t("Una espiral trenzada que se levanta capa a capa.",
            "A braided spiral rising layer by layer."),
    descripcion: t("Una lámpara de mesa con forma de espiral trenzada. Apagada luce como una pieza de decoración, y encendida la trama reparte una luz cálida y suave. Queda bien en la mesita de noche, una estantería o el salón.",
                   "A table lamp shaped like a braided spiral. Switched off it's a decorative piece; switched on, its pattern spreads a warm, soft light. Perfect for a bedside table, a shelf or the living room.") },
];
// En inglés, las medidas con punto decimal (18.8 en vez de 18,8)
if (EN) LAMPARAS.forEach((l) => { l.medidas = l.medidas.replace(/(\d),(\d)/g, "$1.$2"); });

const PREGUNTAS = EN ? [
  ["How do I switch it on and change the light tone?", "With the remote on the cable: switch it on and off, choose warm, neutral or cool light and turn the brightness up or down."],
  ["Does it come with a plug?", "Yes. It has a 5 V USB cable and a plug adapter, so you can connect it to the wall or to any USB port, such as your computer's."],
  ["Does it get hot?", "No. The light is a low-energy LED that gives off almost no heat, so the lamp doesn't get hot even after many hours on."],
  ["Can I leave it on all night?", "Yes. It uses very little power and doesn't heat up, so it works as a night light on your bedside table."],
  ["Is it fragile?", "It's printed in PLA, a rigid material that's tough enough for everyday use. Like any decorative piece, it's best not to drop it. It arrives checked and well packed."],
  ["How do I clean it?", "With a dry cloth or a duster. No water or cleaning products, so the finish isn't damaged."],
  ["Can I send it as a gift?", "Yes. When buying on Etsy, enter the address of the person you're giving it to and select the gift option."],
  ["What if I'm not happy with it?", `You have ${CONFIG.devolucionDias} days to return it (return shipping is at your expense). Message us on Etsy and we'll tell you how.`],
] : [
  ["¿Cómo se enciende y se cambia el tono de luz?", "Con el mando que lleva el cable: la enciendes y la apagas, eliges luz cálida, neutra o fría y subes o bajas la intensidad."],
  ["¿Viene con enchufe?", "Sí. Lleva cable USB de 5 V y adaptador de enchufe, así que puedes conectarla a la pared o a cualquier puerto USB, como el del ordenador."],
  ["¿Se calienta?", "No. La luz es LED de bajo consumo, que apenas da calor, así que la lámpara no se calienta aunque esté encendida muchas horas."],
  ["¿Puedo dejarla encendida toda la noche?", "Sí. Gasta muy poco y no se calienta, así que sirve como luz de compañía en la mesita de noche."],
  ["¿Es frágil?", "Está impresa en PLA, un material rígido y resistente para el uso diario. Como cualquier pieza de decoración, mejor que no se caiga al suelo. Te llega revisada y bien embalada."],
  ["¿Cómo se limpia?", "Con un paño seco o un plumero. Sin agua ni productos de limpieza, para no dañar el acabado."],
  ["¿Puedo enviarla como regalo?", "Sí. Al comprar en Etsy, pon la dirección de la persona a la que se la regalas y marca la opción de regalo."],
  ["¿Y si no me convence?", `Tienes ${CONFIG.devolucionDias} días para devolverla (el envío de vuelta corre de tu cuenta). Escríbenos por Etsy y te decimos cómo hacerlo.`],
];

/* ---------- utilidades ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const euros = new Intl.NumberFormat(t("es-ES", "en-IE"), { style: "currency", currency: "EUR" });
const hoyISO = () => new Date().toLocaleDateString("sv-SE");
const ofertaActiva = () => CONFIG.oferta.desde <= hoyISO() && hoyISO() <= CONFIG.oferta.hasta;
const precioOferta = (p) => Math.floor(Math.round(p * 100) * (100 - CONFIG.oferta.porcentaje) / 100) / 100;
const foto = (l, n) => `assets/fotos/${l.carpeta}/${n}.jpg`;
// fotos de estudio de la colección: assets/fotos/estudio/<nombre>-apagada.jpg y -encendida.jpg
const ESTUDIO = { "aurora": "aurora", "lamas": "lamas", "ola-doble": "ola", "seda": "seda", "opalo-mini": "opalo", "marea-mini": "marea" };
const fotoEstudio = (l, estado) => ESTUDIO[l.id] ? `assets/fotos/estudio/${ESTUDIO[l.id]}-${estado}.jpg` : foto(l, estado === "encendida" ? 1 : 2);
const enlaceEtsy = (l) => `https://www.etsy.com/${t("es/", "")}listing/${l.etsy}`;
const fechaLarga = (iso) => new Date(`${iso}T12:00`).toLocaleDateString(t("es-ES", "en-GB"), { day: "numeric", month: "long" });
const reduceMovimiento = matchMedia("(prefers-reduced-motion: reduce)").matches;

function precioHTML(l) {
  if (!ofertaActiva()) return euros.format(l.precio);
  return `<s>${euros.format(l.precio)}</s>${euros.format(precioOferta(l.precio))}`;
}

function sumarLaborables(dias) {
  const d = new Date();
  while (dias > 0) {
    d.setDate(d.getDate() + 1);
    const dia = d.getDay();
    if (dia !== 0 && dia !== 6 && !CONFIG.festivos.includes(d.toLocaleDateString("sv-SE"))) dias--;
  }
  return d.toLocaleDateString("sv-SE");
}
function entregaEstimada() {
  const desde = sumarLaborables(CONFIG.fabricacion.min + CONFIG.envio.min);
  const hasta = sumarLaborables(CONFIG.fabricacion.max + CONFIG.envio.max);
  return t(`entre el ${fechaLarga(desde)} y el ${fechaLarga(hasta)}`, `between ${fechaLarga(desde)} and ${fechaLarga(hasta)}`);
}

/* ---------- colección ---------- */
function pintarColeccion() {
  const etiqueta = ofertaActiva() ? `<span class="etiqueta">−${CONFIG.oferta.porcentaje} %</span>` : "";
  $("#rejilla").innerHTML = LAMPARAS.map((l, i) => `
    <article class="tarjeta aparece" style="transition-delay:${(i % 4) * 80}ms">
      <button class="tarjeta-foto" data-abrir="${l.id}" data-lampara="${l.id}" aria-label="${t("Ver", "View")} ${l.nombre}">
        ${etiqueta}
        ${l.distintivo ? `<span class="etiqueta etiqueta-suave">${l.distintivo}</span>` : ""}
        <img src="${fotoEstudio(l, "apagada")}" alt="${t(`Lámpara ${l.nombre} apagada`, `${l.nombre} lamp switched off`)}" loading="lazy" />
        <img class="encendida" src="${fotoEstudio(l, "encendida")}" alt="" aria-hidden="true" loading="lazy" />
        <span class="interruptor">${t("encender", "switch on")}</span>
      </button>
      <div class="tarjeta-info">
        <div><h3>${l.nombre}</h3><span class="tarjeta-medidas">${l.medidas}</span></div>
        <span class="precio">${precioHTML(l)}</span>
      </div>
      <div class="tarjeta-acciones">
        <button data-abrir="${l.id}">${t("Ver detalles", "View details")}</button>
        <a href="${enlaceEtsy(l)}" target="_blank" rel="noopener">${t("Comprar", "Buy")} →</a>
      </div>
    </article>`).join("");
}

/* ---------- abanico: franjas de las seis lámparas; la que señalas se ensancha ---------- */
function pintarDestacadas() {
  $("#destacadas").innerHTML = LAMPARAS.map((l, i) => `
    <article class="hoja${i === 0 ? " activa" : ""}" tabindex="0" aria-label="${l.nombre}">
      <img src="assets/fotos/abanico/${ESTUDIO[l.id]}.jpg" alt="${t(`Lámpara ${l.nombre} encendida`, `${l.nombre} lamp switched on`)}" loading="lazy" />
      <span class="hoja-nombre-corto" aria-hidden="true">${l.nombre}</span>
      <div class="hoja-texto">
        <h3>${l.nombre}</h3>
        <div class="hoja-pie">
          <span class="precio">${precioHTML(l)}</span>
          <button data-abrir="${l.id}">${t("Descúbrela", "Discover")}</button>
        </div>
      </div>
    </article>`).join("");

  const hojas = $$("#destacadas .hoja");
  const activar = (h) => hojas.forEach((x) => x.classList.toggle("activa", x === h));
  hojas.forEach((h) => {
    h.addEventListener("mouseenter", () => activar(h));
    h.addEventListener("focusin", () => activar(h));
    h.addEventListener("click", () => activar(h)); // en el móvil se abre al tocar
  });
}

/* ---------- vitrina: se encienden una a una al bajar ---------- */
// [lámpara, foto en assets/fotos/vitrina/]
const VITRINA = [
  ["lamas", "lamas.jpg"],
  ["ola-doble", "ola-doble.jpg"],
  ["seda", "seda.jpg"],
  ["opalo-mini", "opalo.jpg"],
  ["marea-mini", "marea.jpg"],
];

function pintarVitrina() {
  const etiqueta = ofertaActiva() ? `<span class="etiqueta">−${CONFIG.oferta.porcentaje} %</span>` : "";
  $("#vitrina-fila").innerHTML = VITRINA.map(([id, archivo]) => {
    const l = LAMPARAS.find((x) => x.id === id);
    return `
      <article class="foco">
        <button class="foco-abrir" data-abrir="${l.id}" aria-label="${t("Ver", "View")} ${l.nombre}"></button>
        ${etiqueta}
        <img src="assets/fotos/vitrina/${archivo}" alt="${t(`Lámpara ${l.nombre} encendida`, `${l.nombre} lamp switched on`)}" loading="lazy" />        <div class="foco-info">
          <div><h3>${l.nombre}</h3><span class="foco-precio">${precioHTML(l)}</span></div>
          <a class="foco-comprar" href="${enlaceEtsy(l)}" target="_blank" rel="noopener">${t("Comprar", "Buy")}</a>
        </div>
      </article>`;
  }).join("");
}

function iniciarVitrina() {
  const panel = $(".vitrina-panel");
  const focos = $$(".foco");
  if (reduceMovimiento) { focos.forEach((f) => f.style.setProperty("--luz", 1)); return; }
  const n = focos.length;
  const actualizar = () => {
    const r = panel.getBoundingClientRect();
    // 0 cuando el panel asoma por abajo; 1 cuando ya está bien dentro de la pantalla
    const p = (innerHeight * 0.85 - r.top) / (r.height * 0.5 + innerHeight * 0.35);
    // Cada lámpara se enciende poco a poco en su tramo, una detrás de otra (los tramos se solapan un poco)
    focos.forEach((f, i) => {
      const inicio = i / (n + 1), tramo = 2 / (n + 1);
      const luz = Math.min(1, Math.max(0, (p - inicio) / tramo));
      f.style.setProperty("--luz", luz.toFixed(3));
    });
  };
  addEventListener("scroll", () => requestAnimationFrame(actualizar), { passive: true });
  addEventListener("resize", actualizar);
  actualizar();
}

function pintarPreguntas() {
  $("#acordeon").innerHTML = PREGUNTAS.map(([p, r], i) => `
    <details class="aparece">
      <summary><span class="numero">${String(i + 1).padStart(2, "0")}</span><span>${p}</span></summary>
      <p class="respuesta">${r}</p>
    </details>`).join("");
}

/* ---------- ficha de producto ---------- */
function abrirFicha(id) {
  const l = LAMPARAS.find((x) => x.id === id);
  if (!l) return;
  const ficha = $("#ficha");
  const principal = $("#ficha-foto");
  // si la foto no es vertical, se muestra entera en vez de recortada
  principal.onload = () => principal.classList.toggle("entera", principal.naturalWidth / principal.naturalHeight > 0.9);
  const ponerFoto = (n) => {
    principal.src = foto(l, n);
    principal.alt = t(`Lámpara ${l.nombre}, foto ${n}`, `${l.nombre} lamp, photo ${n}`);
    $$("#ficha-miniaturas button").forEach((b) => b.setAttribute("aria-current", b.dataset.n == n));
  };
  $("#ficha-nombre").textContent = l.nombre;
  $("#ficha-distintivo").textContent = l.distintivo ? `${l.distintivo} · ${t("hecha por encargo", "made to order")}` : t("Hecha por encargo", "Made to order");
  $("#ficha-precio").innerHTML = precioHTML(l);
  $("#ficha-descripcion").textContent = l.descripcion;
  $("#ficha-medidas").textContent = l.medidas;
  $("#ficha-entrega").textContent = t(`Gratis en España, te llega ${entregaEstimada()}`, `Free within Spain — arrives ${entregaEstimada()}`);
  $("#ficha-comprar").href = enlaceEtsy(l);
  $("#ficha-miniaturas").innerHTML = Array.from({ length: l.fotos }, (_, i) => `
    <button data-n="${i + 1}" aria-label="${t("Foto", "Photo")} ${i + 1}"><img src="${foto(l, i + 1)}" alt="" loading="lazy" /></button>`).join("");
  $$("#ficha-miniaturas button").forEach((b) => b.addEventListener("click", () => ponerFoto(b.dataset.n)));
  ponerFoto(1);
  ficha.showModal();
  ficha.scrollTop = 0;
}

function iniciarFicha() {
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-abrir]");
    if (b) abrirFicha(b.dataset.abrir);
  });
  const ficha = $("#ficha");
  $("#ficha-cerrar").addEventListener("click", () => ficha.close());
  ficha.addEventListener("click", (e) => { if (e.target === ficha) ficha.close(); });
}

/* ---------- cabecera y menú ---------- */
function iniciarCabecera() {
  const cab = $("#cabecera");
  const hero = $(".hero");
  // Negra arriba del todo; crema en cuanto empiezas a bajar.
  const actualizar = () => cab.classList.toggle("solida", scrollY > 40);
  addEventListener("scroll", actualizar, { passive: true });
  actualizar();

  const btn = $("#hamburguesa");
  const menu = $("#menu");
  const cerrar = () => { menu.classList.remove("abierto"); cab.classList.remove("menu-abierto"); btn.setAttribute("aria-expanded", "false"); };
  btn.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    cab.classList.toggle("menu-abierto", abierto);
    btn.setAttribute("aria-expanded", abierto);
  });
  $$("#menu a").forEach((a) => a.addEventListener("click", cerrar));
}

/* ---------- de día a noche (scroll) ---------- */
function iniciarAnochecer() {
  const sec = $("#anochecer");
  const estado = $("#anochecer-estado");
  const suave = (t) => t * t * (3 - 2 * t);
  const actualizar = () => {
    const r = sec.getBoundingClientRect();
    const recorrido = r.height - innerHeight;
    const bruto = Math.min(1, Math.max(0, -r.top / recorrido));
    const p = suave(Math.min(1, Math.max(0, (bruto - 0.15) / 0.6)));
    sec.style.setProperty("--p", p.toFixed(3));
    estado.textContent = p > 0.5 ? t("encendida", "on") : t("apagada", "off");
  };
  if (reduceMovimiento) { sec.style.setProperty("--p", 1); sec.style.height = "auto"; estado.textContent = t("encendida", "on"); return; }
  addEventListener("scroll", () => requestAnimationFrame(actualizar), { passive: true });
  actualizar();
}

/* ---------- pestañas de historia ---------- */
function iniciarPestanas() {
  const tabs = $$('[role="tab"]');
  const activar = (t) => {
    tabs.forEach((x) => {
      const sel = x === t;
      x.setAttribute("aria-selected", sel);
      x.tabIndex = sel ? 0 : -1;
      $("#" + x.getAttribute("aria-controls")).hidden = !sel;
    });
  };
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => activar(t));
    t.addEventListener("keydown", (e) => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!d) return;
      const sig = tabs[(i + d + tabs.length) % tabs.length];
      activar(sig); sig.focus();
    });
  });
}

/* ---------- tonos de luz ---------- */
function iniciarTonos() {
  const figura = $("#tonos-foto");
  const botones = $$(".tonos-botones button");
  botones.forEach((b, i) => {
    const elegir = () => {
      botones.forEach((x) => { x.setAttribute("aria-checked", x === b); x.tabIndex = x === b ? 0 : -1; });
      figura.dataset.tono = b.dataset.tono;
    };
    b.addEventListener("click", elegir);
    b.addEventListener("keydown", (e) => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!d) return;
      const sig = botones[(i + d + botones.length) % botones.length];
      sig.click(); sig.focus();
    });
  });
}

/* ---------- apariciones y encendido en móvil ---------- */
function iniciarApariciones() {
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$(".aparece").forEach((el) => obs.observe(el));

  // En pantallas táctiles no hay hover: la lámpara se enciende al pasar por el centro.
  if (matchMedia("(hover: none)").matches) {
    const luz = new IntersectionObserver((entradas) => {
      entradas.forEach((en) => en.target.classList.toggle("encendida", en.isIntersecting));
    }, { rootMargin: "-35% 0px -35% 0px" });
    $$(".tarjeta").forEach((t) => luz.observe(t));
  }
}

/* ---------- arranque ---------- */
pintarColeccion();
pintarVitrina();
pintarDestacadas();
pintarPreguntas();
iniciarFicha();
iniciarCabecera();
iniciarAnochecer();
iniciarVitrina();
iniciarPestanas();
iniciarTonos();
iniciarApariciones();
$("#entrega").textContent = entregaEstimada();
$("#pie-entrega").textContent = t(`Si la pides hoy, llega ${entregaEstimada()}`, `Order today and it will arrive ${entregaEstimada()}`);
$("#anio").textContent = new Date().getFullYear();
