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
  { id: "arbol-de-navidad", nombre: "Árbol de Navidad", precio: 34.9, medidas: "12 × 27,5 × 12 cm", etsy: "4615962377", carpeta: "arbol", fotos: 17, distintivo: "Navidad",
    lema: "Un árbol en espiral con su estrella en la punta.",
    descripcion: "Una lámpara con forma de árbol de Navidad en espiral, rematada con una estrella. Apagada decora como un adorno más, y encendida da una luz cálida y suave. Perfecta para el salón, la entrada o como regalo." },
  { id: "aurora", nombre: "Aurora", precio: 49.9, medidas: "17 × 18,8 × 17 cm", etsy: "4622716539", carpeta: "aurora", fotos: 12,
    lema: "La luz atraviesa las ondas y crea un brillo suave, como una aurora.",
    descripcion: "Una lámpara de mesa de formas orgánicas, recorrida por finas estrías que se ondulan de arriba abajo. Apagada parece una escultura, y encendida la luz atraviesa las ondas y crea un brillo suave y envolvente. Más grande que nuestras minis: queda bien en el salón, una consola o la mesita de noche." },
  { id: "lamas", nombre: "Lamas", precio: 44.9, medidas: "11 × 22 × 11 cm", etsy: "4618371309", carpeta: "lamas", fotos: 19,
    lema: "La luz se cuela entre las lamas y dibuja sombras suaves.",
    descripcion: "Una lámpara de mesa de lamas onduladas sobre una base acanalada. Apagada parece una escultura, y encendida la luz se cuela entre las lamas y dibuja sombras suaves. Queda bien en la mesita de noche, una estantería o el salón." },
  { id: "ola-doble", nombre: "Ola", precio: 44.9, medidas: "11 × 22 × 11 cm", etsy: "4622715284", carpeta: "ola-doble", fotos: 14,
    lema: "Decenas de lamas que se ondulan en doble ola de arriba abajo.",
    descripcion: "Una lámpara de mesa en forma de columna, con decenas de lamas blancas que se ondulan en doble ola y cambian de aspecto desde cada ángulo. Apagada parece una escultura, y encendida la luz se filtra entre las lamas y dibuja una trama cálida y suave. Alta y esbelta, queda bien en el salón, una consola, el escritorio o la mesita de noche." },
  { id: "seda", nombre: "Seda", precio: 39.9, medidas: "15 × 22 × 15 cm", etsy: "4622739074", carpeta: "seda", fotos: 12,
    lema: "Una silueta suave que se retuerce, con estrías finas como la seda.",
    descripcion: "Una lámpara de mesa de líneas suaves que gira sobre sí misma, con un acabado de estrías finas que recuerda a la seda, sobre una base redonda en tono madera. Apagada luce como una pieza de decoración, y encendida reparte una luz uniforme y cálida. Queda bien en el salón, el escritorio, una estantería o la mesita de noche." },
  { id: "opalo-mini", nombre: "Ópalo", precio: 34.9, medidas: "13,5 × 21 × 13,5 cm", etsy: "4616261694", carpeta: "opalo", fotos: 15,
    lema: "Brilla entera, como una piedra de ópalo con luz dentro.",
    descripcion: "Una lámpara de mesa con forma ondulada y retorcida. Apagada luce como una pieza de decoración, y encendida brilla entera con una luz cálida y suave. Queda bien en la mesita de noche, una estantería o el salón." },
  { id: "marea-mini", nombre: "Marea", precio: 34.9, medidas: "13,2 × 19,6 × 13,2 cm", etsy: "4615974607", carpeta: "marea", fotos: 13,
    lema: "Una espiral trenzada que se levanta capa a capa.",
    descripcion: "Una lámpara de mesa con forma de espiral trenzada. Apagada luce como una pieza de decoración, y encendida la trama reparte una luz cálida y suave. Queda bien en la mesita de noche, una estantería o el salón." },
];

const DESTACADAS = ["aurora", "ola-doble"];

const PREGUNTAS = [
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
const euros = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" });
const hoyISO = () => new Date().toLocaleDateString("sv-SE");
const ofertaActiva = () => CONFIG.oferta.desde <= hoyISO() && hoyISO() <= CONFIG.oferta.hasta;
const precioOferta = (p) => Math.floor(Math.round(p * 100) * (100 - CONFIG.oferta.porcentaje) / 100) / 100;
const foto = (l, n) => `assets/fotos/${l.carpeta}/${n}.jpg`;
const enlaceEtsy = (l) => `https://www.etsy.com/es/listing/${l.etsy}`;
const fechaLarga = (iso) => new Date(`${iso}T12:00`).toLocaleDateString("es-ES", { day: "numeric", month: "long" });
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
  return `entre el ${fechaLarga(desde)} y el ${fechaLarga(hasta)}`;
}

/* ---------- colección ---------- */
function pintarColeccion() {
  const etiqueta = ofertaActiva() ? `<span class="etiqueta">−${CONFIG.oferta.porcentaje} %</span>` : "";
  $("#rejilla").innerHTML = LAMPARAS.map((l, i) => `
    <article class="tarjeta aparece" style="transition-delay:${(i % 4) * 80}ms">
      <button class="tarjeta-foto" data-abrir="${l.id}" aria-label="Ver ${l.nombre}">
        ${etiqueta}
        ${l.distintivo ? `<span class="etiqueta etiqueta-suave">${l.distintivo}</span>` : ""}
        <img src="${foto(l, 2)}" alt="Lámpara ${l.nombre} apagada" loading="lazy" />
        <img class="encendida" src="${foto(l, 1)}" alt="" aria-hidden="true" loading="lazy" />
        <span class="interruptor">encender</span>
      </button>
      <div class="tarjeta-info">
        <div><h3>${l.nombre}</h3><span class="tarjeta-medidas">${l.medidas}</span></div>
        <span class="precio">${precioHTML(l)}</span>
      </div>
      <div class="tarjeta-acciones">
        <button data-abrir="${l.id}">Ver detalles</button>
        <a href="${enlaceEtsy(l)}" target="_blank" rel="noopener">Comprar →</a>
      </div>
    </article>`).join("");
}

function pintarDestacadas() {
  $("#destacadas").innerHTML = DESTACADAS.map((id) => {
    const l = LAMPARAS.find((x) => x.id === id);
    return `
      <article class="grande aparece">
        <img src="${foto(l, 1)}" alt="Lámpara ${l.nombre} encendida" loading="lazy" />
        <div class="grande-texto">
          <span class="etiqueta" style="position:static;align-self:flex-start">Hecha por encargo</span>
          <h3>${l.nombre}</h3>
          <p>${l.lema}</p>
          <div class="grande-pie">
            <span class="precio">${precioHTML(l)}</span>
            <button data-abrir="${l.id}">Descubrir</button>
            <a class="enlace-flecha enlace-claro" href="${enlaceEtsy(l)}" target="_blank" rel="noopener">Comprar <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </article>`;
  }).join("");
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
        <button class="foco-abrir" data-abrir="${l.id}" aria-label="Ver ${l.nombre}"></button>
        ${etiqueta}
        <img src="assets/fotos/vitrina/${archivo}" alt="Lámpara ${l.nombre} encendida" loading="lazy" />        <div class="foco-info">
          <div><h3>${l.nombre}</h3><span class="foco-precio">${precioHTML(l)}</span></div>
          <a class="foco-comprar" href="${enlaceEtsy(l)}" target="_blank" rel="noopener">Comprar</a>
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
  const ponerFoto = (n) => {
    principal.src = foto(l, n);
    principal.alt = `Lámpara ${l.nombre}, foto ${n}`;
    $$("#ficha-miniaturas button").forEach((b) => b.setAttribute("aria-current", b.dataset.n == n));
  };
  $("#ficha-nombre").textContent = l.nombre;
  $("#ficha-distintivo").textContent = l.distintivo ? `${l.distintivo} · hecha por encargo` : "Hecha por encargo";
  $("#ficha-precio").innerHTML = precioHTML(l);
  $("#ficha-descripcion").textContent = l.descripcion;
  $("#ficha-medidas").textContent = l.medidas;
  $("#ficha-entrega").textContent = `Gratis, te llega ${entregaEstimada()}`;
  $("#ficha-comprar").href = enlaceEtsy(l);
  $("#ficha-miniaturas").innerHTML = Array.from({ length: l.fotos }, (_, i) => `
    <button data-n="${i + 1}" aria-label="Foto ${i + 1}"><img src="${foto(l, i + 1)}" alt="" loading="lazy" /></button>`).join("");
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
    estado.textContent = p > 0.5 ? "encendida" : "apagada";
  };
  if (reduceMovimiento) { sec.style.setProperty("--p", 1); sec.style.height = "auto"; estado.textContent = "encendida"; return; }
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
  const rango = $("#intensidad");
  const brillo = () => figura.style.setProperty("--brillo", rango.value / 100);
  rango.addEventListener("input", brillo);
  brillo();
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
$("#pie-entrega").textContent = `Si la pides hoy, llega ${entregaEstimada()}`;
$("#anio").textContent = new Date().getFullYear();
