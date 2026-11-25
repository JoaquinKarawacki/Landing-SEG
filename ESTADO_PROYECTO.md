# Estado del Proyecto — SEG Ingeniería Landing

> Archivo de memoria para retomar el desarrollo en cualquier momento.
> Última actualización: noviembre 2026 (seguridad de la API y anti-spam en formularios)

---

## Stack técnico

| Herramienta | Versión |
|---|---|
| Next.js | 16.2.6 (App Router) |
| React | 19.2.4 |
| Tailwind CSS | v4 |
| TypeScript | ❌ No usa |
| React Compiler | ✅ activado (`reactCompiler: true` en `next.config.mjs`) |
| Font | Red Hat Display via `next/font/google` |

**Deploy:** el proyecto ya está en producción en `https://www.segingenieria.com` (redirect forzado a HTTPS + security headers en `next.config.mjs`), sobre un host con filesystem persistente tipo Railway (`RAILWAY_VOLUME_MOUNT_PATH`).

---

## Páginas implementadas

| Ruta | Archivo | Secciones | Estado |
|---|---|---|---|
| `/` | `app/page.js` | VideoInstitucional, Pilares, SobreYIndicadores, Novedades | ✅ |
| `/eficiencia-energetica` | `app/eficiencia-energetica/page.js` | PropuestaValor, AreasEstudio, Metodologia, ISO50001, GestionRemota | ✅ |
| `/energias-renovables` | `app/energias-renovables/page.js` | Uruguay, Impacto, Eólica, Solar, Biomasa, PCH, MapaDesarrollos, ConoczaMas | ✅ |
| `/movilidad-electrica` | `app/movilidad-electrica/page.js` | Reconocimientos, Especializacion, Infraestructura, MercadoB2B, Camara | ✅ |
| `/seg-consulting` | `app/seg-consulting/page.js` | PropuestaValor, Uruguay, Argentina, Internacional, Clientes, CTA | ✅ |
| `/seg-heliotec` | `app/seg-heliotec/page.js` | Descripcion, HeliotecAlemania, Servicios, CTA | ✅ |
| `/contacto` | `app/contacto/page.js` | Formulario, Indicadores (suscripción), TrabajaSEG | ✅ |
| `/institucional` | `app/institucional/page.js` | Trayectoria, CapitalHumano, Formacion, TrabajaSEG | ✅ |
| `/indicadores` | `app/indicadores/page.js` | Artículos (5 publicaciones), Suscripcion, CTA | ✅ |
| `/novedades` | `app/novedades/page.js` | Artículos (5 novedades), Destacados, CTA | ✅ |
| `/prensa` | `app/prensa/page.js` | Materiales, SobreSEG, ContactoPrensa, CTA | ✅ |
| `/notas` | `app/notas/page.js` | Listado de notas (contenido editable desde admin) | ✅ |
| `/indicadores/[slug]` | `app/indicadores/[slug]/page.js` | Página individual por reporte de indicador energético | ✅ |
| `/admin` | `app/admin/page.js` + `app/admin/layout.js` | Panel de administración (protegido, `noindex`) | ✅ |

---

## Backend y panel de administración

El proyecto **sí tiene backend**. Es un backend minimalista sin base de datos real, pensado para un host con disco persistente (no serverless puro tipo Vercel Functions).

### Librerías del backend (`lib/`)
| Archivo | Qué contiene |
|---|---|
| `lib/storage.js` | Rutas del storage persistente (`getStorageRoot`, `getUploadDir`, `getDataFile`) |
| `lib/jsonStore.js` | `leerJSON`, `guardarJSON` (escritura atómica: temporal + rename) y `actualizarJSON` (leer-modificar-guardar sin `await` en el medio, para que dos requests no se pisen) |
| `lib/seguridad.js` | `validarToken` (comparación en tiempo constante), `escapeHtml`, `esEmailValido`, rate limit por IP en memoria (`excedeLimite`), anti-spam (`detectarSpam`) y topes de largo (`campoDemasiadoLargo`) |
| `lib/sendMail.js` | Envío de mails vía Microsoft Graph API |
| `lib/indicadores.js` | `ordenarPorFecha` (fechas `dd/mm/aaaa`) |

**Regla:** toda API route nueva que lea/escriba JSON debe usar `lib/jsonStore.js`, y toda la que requiera admin debe usar `validarToken` de `lib/seguridad.js`. Todo dato del usuario que vaya a un mail HTML pasa por `escapeHtml`.

### Auth admin
Token estático (`ADMIN_TOKEN` en `.env.local`), enviado como header `x-admin-token` desde `app/admin/page.js` y validado con `validarToken()` (tiempo constante). `/api/auth` tiene límite de 10 intentos cada 15 min por IP. No hay sesiones ni usuarios — un solo secreto compartido para todo el equipo.

> Ojo: en `.env.local` la línea está como `ADMIN_TOKEN =...` (con espacio antes del `=`). Next la lee bien, pero un `grep '^ADMIN_TOKEN='` no la encuentra.

### Panel `/admin` (`app/admin/page.js`, ~370 líneas)
Login con el token, luego pestañas para gestionar **indicadores**, **novedades**, **notas** y **suscriptores** (listado, borrado y export CSV): alta/borrado y subida de archivos (imágenes/PDFs) vía `fetch` a las API routes. Si una subida es rechazada (formato, tamaño, red), el motivo se muestra en rojo debajo del campo.

`app/admin/layout.js` define el título del panel y `robots: noindex, nofollow` (la página es `"use client"` y no puede exportar `metadata`). El footer mantiene un link a `/admin` a propósito.

### API routes (`app/api/`)
| Ruta | Qué hace | Protección |
|---|---|---|
| `auth/route.js` | Valida el `x-admin-token` | Rate limit 10 / 15 min |
| `indicadores/route.js` | GET público; POST/DELETE de indicadores (máx. 12) | Token en POST/DELETE |
| `novedades/route.js` | GET público; POST/DELETE de novedades (máx. 12) | Token en POST/DELETE |
| `notas/route.js` | GET público; POST/DELETE de notas (máx. 6) | Token en POST/DELETE |
| `upload/route.js` | Recibe archivos del admin: solo `.pdf/.jpg/.jpeg/.png/.webp`, máx. 15 MB, nombre con prefijo timestamp (no pisa archivos) | Token |
| `archivos/[...path]/route.js` | Sirve **solo** archivos de `uploads/` con extensión permitida; cualquier otra ruta (p. ej. `data/*.json`) o intento de `../` → 404 | Pública (solo uploads) |
| `contacto/route.js` | Formulario de contacto → mail a `MAIL_CONTACTO` | Anti-spam + rate limit 5 / 10 min |
| `consulting/route.js` | Formulario de SEG Consulting → mail a `MAIL_TO_CONSULTING` | Anti-spam + rate limit 5 / 10 min |
| `suscripcion/route.js` | POST: guarda suscriptor (dedupe por email) + aviso interno + bienvenida. GET/DELETE: listado para el admin | POST: anti-spam + rate limit 3 / 10 min. GET/DELETE: token |

### "Base de datos": JSON planos
`data/indicadores.json`, `data/notas.json`, `data/novedades.json`, `data/suscriptores.json`. En el primer uso se copian al storage persistente vía `lib/storage.js::getDataFile()` y se leen/escriben con `lib/jsonStore.js` — no hay ORM ni DB real. Cualquier feature nueva de "contenido editable" debería seguir el mismo patrón salvo que se decida migrar a una DB real.

⚠️ `suscriptores.json` tiene datos personales (nombre, email, empresa, teléfono). Vive en `<storage>/data/` y **no** debe ser accesible por ninguna ruta pública.

### Storage de archivos subidos
`lib/storage.js::getUploadDir()` — usa `RAILWAY_VOLUME_MOUNT_PATH` / `VOLUME_MOUNT_PATH` si están seteados (volumen persistente), si no cae a `./local-storage/uploads`. Se sirve de vuelta vía `app/api/archivos/uploads/<archivo>`. `local-storage/` está en `.gitignore`.

### Email
`lib/sendMail.js` usa Microsoft Graph API (OAuth2 client_credentials contra un tenant Azure) en vez de un proveedor tipo Resend/Sendgrid. Variables: `AZURE_TENANT_ID`, `AZURE_CLIENT_ID`, `AZURE_CLIENT_SECRET`, `MAIL_FROM`, y destinatarios por formulario: `MAIL_CONTACTO` (default `uruguay@segingenieria.com`), `MAIL_TO_CONSULTING` (default `consulting@segingenieria.com`), `MAIL_SUSCRIPCION` (default `perez@segingenieria.com`).

---

## Componentes globales

| Archivo | Tipo | Descripción |
|---|---|---|
| `components/Header.js` | Client (`"use client"`) | Sticky, menú desktop con dropdowns, menú mobile con accordion |
| `components/Footer.js` | Server | 6 columnas: Unidades de Negocio, Institucional, Artículos, Contacto, Oficina UY, Oficina CL |
| `components/VideoInstitucional.js` | Server | Video hero full-bleed del home (`/videos/hero.mp4`) |
| `components/Pilares.js` | Server | Sección pilares del home |
| `components/SobreYIndicadores.js` | Server | Sección "Sobre SEG" + indicadores del home |
| `components/Novedades.js` | Server | Sección novedades del home |
| `contexts/IdiomaContext.js` | Client | Contexto de idioma ES/EN con localStorage |
| `app/layout.js` | Server | Shell HTML, importa Header, Footer, IdiomaProvider |

---

## Arquitectura clave

### Layout
`app/layout.js` envuelve **todas** las páginas con `<IdiomaProvider>`, `<Header>` y `<Footer>`. No es necesario importar Header/Footer en cada `page.js`.

### Patrón de página interior
Cada página interior sigue siempre este orden:
```
1. export const metadata = { title, description }
2. SeccionHero         → bg-black, breadcrumb, h1, tagline, bloque con border-l rojo
3. NavegacionInterna   → sticky top-[88px] z-40, bg-gray-100
4. SeccionA            → bg-white,    id="...", scroll-mt-[140px]
5. SeccionB            → bg-gray-50,  id="...", scroll-mt-[140px]
6. SeccionC            → bg-white,    id="...", scroll-mt-[140px]
7. SeccionRoja         → bg-[#ca3517] (1-2 por página, énfasis)
8. SeccionCTA          → bg-black, texto centrado, botón rojo
```

### Anclas y scroll
- La nav interna usa `sticky top-[88px] z-40` (88px = altura del header)
- Todas las secciones con `id` tienen `scroll-mt-[140px]` (header 88px + nav ~52px)
- En móvil la barra roja usa texto corto para no romper en 2 líneas (fix de altura consistente)

---

## Paleta de colores (estricta)

| Color | Hex | Uso |
|---|---|---|
| Rojo SEG | `#ca3517` | Acción, énfasis, fondos de sección roja |
| Rojo hover | `#a82d12` | Hover de botones rojos sólidos |
| Negro | `#000000` | Hero, CTA, nav |
| Casi negro | `#1a1a1a` | Footer |
| Grises Tailwind | `gray-50 / 100 / 200 / 400 / 600 / 900` | Fondos, bordes, texto |

**❌ Prohibido:** `sky-*`, `blue-*`, `green-*`, `amber-*`, `purple-*`

---

## Footer — estado de links

| Columna | Ítem | Ruta |
|---|---|---|
| Unidades de Negocio | Eficiencia Energética | `/eficiencia-energetica` |
| | Energías Renovables | `/energias-renovables` |
| | Movilidad Eléctrica | `/movilidad-electrica` |
| | SEG Consulting | `/seg-consulting` |
| | SEG Heliotec | `/seg-heliotec` |
| Institucional | Trayectoria | `/institucional#trayectoria` |
| | Capital Humano | `/institucional#capital-humano` |
| Artículos | Indicadores Energéticos | `/indicadores` |
| | Novedades | `/novedades` |
| | Prensa | `/prensa` |
| Contacto | Suscripción Indicadores | `/contacto#indicadores` |
| | Trabaja en SEG | `/institucional#trabaja` |
| | LinkedIn | `https://uy.linkedin.com/company/seg-ingenieria` |
| | X (Twitter) | `https://x.com/SEGIngenieria` |

---

## Idiomas (i18n)

Hay un contexto de idioma implementado en `contexts/IdiomaContext.js` que:
- Guarda la preferencia en `localStorage` (clave: `"seg-idioma"`)
- Provee `{ idioma, setIdioma }` via `useIdioma()` hook
- Wrappea toda la app desde `app/layout.js`

**Estado actual:** el Header tiene las traducciones ES/EN para el menú de navegación. El contenido de las páginas interiores está **solo en español** — se puede ir traduciendo página a página consumiendo `useIdioma()`.

Para agregar traducción a una página:
```js
import { useIdioma } from "@/contexts/IdiomaContext";
// componente debe ser "use client" o pasar idioma como prop
const { idioma } = useIdioma();
```

---

## Formularios

Hay tres formularios públicos, todos con backend real (mail vía Microsoft Graph):

| Formulario | Componente | API |
|---|---|---|
| Contacto (`/contacto`) | `components/FormularioContacto.js` | `/api/contacto` |
| Suscripción a indicadores (`/contacto#indicadores`) | `components/FormularioSuscripcion.js` | `/api/suscripcion` |
| SEG Consulting (`/seg-consulting`) | `app/seg-consulting/FormularioConsulting.js` | `/api/consulting` |

### Anti-spam (noviembre 2026)
Se agregó porque llegaban mails de bots con texto aleatorio (ej. nombre `bWzQRdGXPPZgMcQNeF`, gmails con puntos intercalados). Capas:

1. **Campo trampa (honeypot)** — `components/AntiSpam.js` (`<CampoTrampa>` + hook `useAntiSpam`): input `referencia_extra` fuera de pantalla, `tabIndex=-1`. Se envía como `_hp`; si viene lleno → bot.
2. **Tiempo de llenado** — el formulario envía `_ms` (ms desde que se montó). Si falta o es < 3 s → bot. Esto también frena a los bots que le pegan directo a la API sin pasar por la página.
3. **Texto aleatorio** — palabras de 8+ letras con 3+ saltos minúscula→MAYÚSCULA (`esPalabraAleatoria` en `lib/seguridad.js`). Probado sin falsos positivos con nombres reales (McDonald's, LinkedIn, O'Neill, João, etc.).
4. **Demasiados links** — más de 2 URLs en el texto → bot.
5. **Rate limit por IP** — en memoria (una sola instancia en Railway; se resetea en cada deploy). Lee la IP de `x-forwarded-for`. Al superarlo responde 429 con mensaje para el usuario.
6. **Topes de largo** — mensaje 5000 caracteres, resto 200 → 400.

Cuando se detecta un bot la API **responde `{ ok: true }` sin mandar mail ni guardar nada** (para no darle pistas) y loguea `[contacto|consulting|suscripcion] envío descartado como spam (<motivo>) ip=...` — buscar esa línea en los logs de Railway para ver cuánto se frena.

**Al agregar un formulario nuevo:** usar `useAntiSpam()` + `<CampoTrampa inputRef={trampa} />`, mandar `...datosAntiSpam()` en el body, y en la API aplicar `excedeLimite`, `campoDemasiadoLargo`, `detectarSpam` y `escapeHtml`.

**Si el spam vuelve:** siguiente nivel sugerido = Cloudflare Turnstile (captcha gratuito casi invisible; requiere cuenta y 2 claves en Railway).

---

## Bugs corregidos (historial)

| Bug | Causa | Fix aplicado |
|---|---|---|
| Anclas quedaban tapadas por header + nav | Sin `scroll-margin-top` | `scroll-mt-[140px]` en todas las secciones con `id` |
| Anclas desalineadas en móvil | Barra roja se partía en 2 líneas → header más alto | Texto corto en móvil: `<span class="sm:hidden">` |
| `movilidad-electrica/page.js` vacío | Error ENOSPC (disco lleno) al editar | Archivo reescrito completo desde cero |
| **Fuga de datos:** `/api/archivos/data/suscriptores.json` devolvía la lista de suscriptores sin auth (y se podía salir del storage con `../`) | `archivos/[...path]` hacía `join(storageRoot, ...segments)` sin restringir carpeta | Solo sirve `uploads/` + chequeo `resolve`/`startsWith` + whitelist de extensiones (nov 2026) |
| Mails de spam de bots en contacto | Sin honeypot, rate limit ni validación de contenido | Anti-spam en las 3 APIs de formularios (ver "Formularios") (nov 2026) |
| HTML inyectable en mails de contacto/consulting | Datos del usuario interpolados sin escapar | `escapeHtml` en todos los campos (nov 2026) |
| Upload aceptaba cualquier archivo como `octet-stream`, sin límite de tamaño, y pisaba archivos con el mismo nombre | Validación débil en `upload/route.js` | Whitelist de extensiones, máx. 15 MB, prefijo timestamp (nov 2026) |
| El admin no mostraba nada si una subida fallaba | `subir()` devolvía `null` sin el error | Muestra el motivo debajo del campo (nov 2026) |
| `/admin` con el título del home e indexable | Client component sin `metadata` | `app/admin/layout.js` con título + `noindex` (nov 2026) |

---

## Pendientes / próximos pasos sugeridos

- [ ] **Traducciones EN** — agregar textos en inglés a las páginas interiores (infraestructura lista)
- [ ] **Prensa con contenido real** — `/prensa` tiene datos placeholder; indicadores y novedades ya se gestionan desde `/admin`
- [ ] **Imágenes reales** — revisar placeholders de imagen (`bg-gray-200`) pendientes y reemplazarlos con fotos reales del cliente
- [ ] **SEO** — revisar `metadata` en cada `page.js` y agregar `og:image` para compartir en redes
- [ ] **Auth admin más robusta** — hoy es un único token compartido sin sesiones ni usuarios (ya tiene comparación en tiempo constante y rate limit); evaluar si alcanza a mediano plazo. No hay forma de cambiar el token sin redeploy.
- [ ] **Limpieza** — `components/HeroSlider.js` (473 líneas) ya no se usa desde que el home pasó al video; `seg_slider_home_5_3 (1).html` en la raíz parece un mockup suelto (sin trackear en git)
- [ ] **Campo `Imagen` vs `imagen`** — novedades guarda la imagen como `Imagen` (mayúscula) e indicadores como `imagen`; `NovedadesGrid` contempla ambos pero `Novedades.js` solo `Imagen`. Unificar
- [ ] **Monitorear spam** — revisar en los logs de Railway las líneas `envío descartado como spam`; si sigue entrando, pasar a Cloudflare Turnstile

---

## Convenciones de nombres

| Tipo | Formato | Ejemplo |
|---|---|---|
| Componentes | `PascalCase` en español | `SeccionHero`, `CardNovedad` |
| Constantes de datos | `UPPER_SNAKE_CASE` | `ITEMS_MENU`, `TIPOS_ENERGIA` |
| Variables / funciones | `camelCase` en español | `menuAbierto`, `irADiapositiva` |
| Íconos | SVG inline, `fill="currentColor"`, `aria-hidden="true"` | — |
| Botones | Siempre `rounded-full` | — |

---

## Guía de estilos completa

Ver `GUIA_ESTILOS.md` en la raíz del proyecto. Documenta:
- Paleta completa y colores prohibidos
- Escala tipográfica
- Patrones de sección (§4), páginas interiores (§5), cards (§6), botones (§7), íconos (§8)
- Checklist de nuevas páginas (§13)
