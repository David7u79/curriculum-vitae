# CV Interactivo + Generador

Currículum como sitio web en vez del típico PDF estático — con temas visuales intercambiables, exportación a PDF y un generador para que cualquiera cree el suyo.

🔗 **Demo:** https://David7u79.github.io/curriculum-vitae/

## Características

- **Datos estructurados (JSON-LD/schema.org)** — perfil, experiencia y skills en formato que IA/buscadores pueden leer directamente.
- **Generador propio** (`/builder/`) — arma tu CV con formulario, vista previa en vivo y descarga en PDF, sin cuenta ni instalación.
- **Privado por diseño** — todo se guarda en `localStorage`, nada se envía a ningún servidor.
- **Múltiples temas** — clásico, moderno, minimalista, oscuro, vibrante, técnico, corporativo, tech-forward, infográfico.
- **Asistencia con IA opcional (BYOK)** — mejora textos con tu propia API key (Anthropic, Google, OpenAI-compatible); la key nunca sale del navegador.
- **Bilingüe** — versiones ES (`/`) y EN (`/en/`).

## Desarrollo

```bash
pnpm install
pnpm dev       # servidor local
pnpm build     # build de producción → dist/
pnpm preview   # sirve el build local
```

## Estructura

```
src/
  data/cv.ts          # tus datos (perfil, experiencia, proyectos...)
  pages/              # CV estático ES + builder
  pages/en/           # CV estático EN + builder
  lib/                # JSON-LD, layout del tema "tech"
  styles/              # tema base + skins por data-theme
```

Para usar tu propia info en el CV estático, edita `src/data/cv.ts`. Para generar uno sin tocar código, usa `/builder/`.

## Deploy

Se despliega a GitHub Pages vía `.github/workflows/deploy.yml` (build estático con Astro). En **Settings → Pages**, el *Source* debe estar en **"GitHub Actions"** (no "Deploy from a branch"), o GitHub intentará compilarlo con Jekyll y fallará.

## Stack

Astro + TypeScript, sin framework de UI — HTML/CSS/JS vanilla.
