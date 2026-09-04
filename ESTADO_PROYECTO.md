# Estado del Proyecto — SEG Ingeniería Landing

> Archivo de memoria para retomar el desarrollo en cualquier momento.
> Última actualización: septiembre 2026

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
| `/` | `app/page.js` | HeroSlider, Pilares, SobreYIndicadores, Novedades | ✅ |
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
| `/admin` | `app/admin/page.js` | Panel de administración (protegido) | ✅ |

---

## Backend y panel de administración

El proyecto **sí tiene backend** (esto no estaba reflejado en versiones previas de este documento). Es un backend minimalista sin base de datos real, pensado para un host con disco persistente (no serverless puro tipo Vercel Functions).

### Auth admin
Token estático (`ADMIN_TOKEN` en `.env.local`) comparado en `app/api/auth/route.js`, enviado como header `x-admin-token` desde `app/admin/page.js`. No hay sesiones ni usuarios — un solo secreto compartido para todo el equipo.

### Panel `/admin` (`app/admin/page.js`, 289 líneas)
Login con el token, luego pestañas para gestionar **indicadores**, **novedades** y **notas**: alta/edición/borrado y subida de archivos (imágenes/PDFs) para cada uno vía `fetch` a las API routes correspondientes.

### API routes (`app/api/`)
| Ruta | Qué hace |
|---|---|
| `auth/route.js` | Valida el `x-admin-token` |
| `indicadores/route.js` | CRUD de indicadores energéticos (JSON) |
| `novedades/route.js` | CRUD de novedades (JSON) |
| `notas/route.js` | CRUD de notas (JSON) |
| `consulting/route.js` | Datos de SEG Consulting |
| `upload/route.js` | Recibe archivos subidos desde el admin |
| `archivos/[...path]/route.js` | Sirve los archivos subidos |
| `contacto/route.js` | Envía el formulario de contacto por mail |
| `suscripcion/route.js` | Alta de suscripción a indicadores por mail |

### "Base de datos": JSON planos
`data/indicadores.json`, `data/notas.json`, `data/novedades.json`. En el primer uso se copian al storage persistente vía `lib/storage.js::getDataFile()`. Las API routes leen/escriben esos archivos directamente — no hay ORM ni DB real. Cualquier feature nueva de "contenido editable" debería seguir el mismo patrón salvo que se decida migrar a una DB real.

### Storage de archivos subidos
`lib/storage.js::getUploadDir()` — usa `RAILWAY_VOLUME_MOUNT_PATH` / `VOLUME_MOUNT_PATH` si están seteados (volumen persistente), si no cae a `./local-storage/uploads`. Se sirve de vuelta vía `app/api/archivos/[...path]/route.js`.

### Email
`lib/sendMail.js` usa Microsoft Graph API (OAuth2 client_credentials contra un tenant Azure) en vez de un proveedor tipo Resend/Sendgrid. Variables en `.env.local`: `AZURE_TENANT_ID`, `AZURE_CLIENT_ID`, `AZURE_CLIENT_SECRET`, `MAIL_FROM`, `MAIL_TO`. Se usa para el formulario de contacto (`/api/contacto`) y la suscripción a indicadores (`/api/suscripcion`).

---

## Componentes globales

| Archivo | Tipo | Descripción |
|---|---|---|
| `components/Header.js` | Client (`"use client"`) | Sticky, menú desktop con dropdowns, menú mobile con accordion |
| `components/Footer.js` | Server | 6 columnas: Unidades de Negocio, Institucional, Artículos, Contacto, Oficina UY, Oficina CL |
| `components/HeroSlider.js` | Client | Slider animado del home |
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

Los formularios en `/contacto` (contacto + suscripción indicadores) **ya tienen backend real**: pegan a `app/api/contacto/route.js` y `app/api/suscripcion/route.js`, que envían mail vía Microsoft Graph API (`lib/sendMail.js`). Ver sección "Backend y panel de administración" arriba.

---

## Bugs corregidos (historial)

| Bug | Causa | Fix aplicado |
|---|---|---|
| Anclas quedaban tapadas por header + nav | Sin `scroll-margin-top` | `scroll-mt-[140px]` en todas las secciones con `id` |
| Anclas desalineadas en móvil | Barra roja se partía en 2 líneas → header más alto | Texto corto en móvil: `<span class="sm:hidden">` |
| `movilidad-electrica/page.js` vacío | Error ENOSPC (disco lleno) al editar | Archivo reescrito completo desde cero |

---

## Pendientes / próximos pasos sugeridos

- [ ] **Traducciones EN** — agregar textos en inglés a las páginas interiores (infraestructura lista)
- [ ] **Prensa con contenido real** — `/prensa` tiene datos placeholder; indicadores y novedades ya se gestionan desde `/admin`
- [ ] **Imágenes reales** — revisar placeholders de imagen (`bg-gray-200`) pendientes y reemplazarlos con fotos reales del cliente
- [ ] **SEO** — revisar `metadata` en cada `page.js` y agregar `og:image` para compartir en redes
- [ ] **Auth admin más robusta** — hoy es un único token compartido sin sesiones ni usuarios; evaluar si alcanza a mediano plazo

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
