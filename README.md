# Remixing the Camera

Course website repository, with a separate Astro site for each semester.
The first edition is **Spring 2027 (`s27`)**.

The syllabus, schedule dates, assignments, readings, images, and external resource links
were copied from Emerging Technologies Spring 2026 as placeholders. They still need revision.

## Structure

```text
semesters/s27/
    src/content/         # Menu, schedule, assignments, readings, and other pages
    src/layouts/         # Semester-specific layout
    src/styles/          # Semester-specific design
    public/              # PDFs, images, sketches, and other assets
    astro.config.mjs     # Semester URL prefix
course-index.html        # Course landing page with semester links
scripts/build.mjs        # Builds all semesters into one Pages deployment
.github/workflows/       # Deploys root dist/ on pushes to main
```

## Development

From the repository root:

```sh
npm ci
npm run dev
```

Open http://localhost:4321/remixing-the-camera/s27/.

```sh
npm run check
npm run build
npm run preview
```

Production preview: http://localhost:4321/remixing-the-camera/.
The combined output is `dist/index.html` and `dist/s27/`. Build output is gitignored.

## Content and assets

Edit `semesters/s27/src/content/`. Internal links use
`[Label](@assignments/week-01-a)` and keep working within that semester.
Place assets in `semesters/s27/public/`; link to them using
`/remixing-the-camera/s27/files/filename.pdf` (or `images/`, etc.).
Week files require `order`, `week`, and `date` frontmatter, with `## Content` and
`## Due` sections. The landing page uses `image` frontmatter for its hero image.
p5.js sketches use `<sketch src="sketch-name.js"></sketch>`.

## Adding a semester

1. Copy an existing semester into `semesters/s28/`, excluding `node_modules/`, `dist/`, and `.astro/`.
2. Set its package name to `s28` and its Astro base to `/remixing-the-camera/s28/`.
3. Update the title, semester label, content, and any semester-specific absolute asset URLs.
4. Add a link to `course-index.html`, then run `npm install` to register the workspace.
5. Run `npm run dev --workspace=s28` to work on it. Run root `npm run check` and `npm run build` before publishing.

Every semester owns its layout, styles, and assets, so a new design can leave older
editions intact. Dependencies are shared at the root initially; an edition can declare
its own versions if it later needs to preserve an older toolchain.

## GitHub Pages

This repository is prepared for https://taipinc.github.io/remixing-the-camera/,
with Spring 2027 at https://taipinc.github.io/remixing-the-camera/s27/.
These are planned URLs; creating the local repository does not publish the site.

After creating a GitHub repository and pushing `main`, select **GitHub Actions** as
the Pages source in repository Settings → Pages. The included workflow builds all
semesters and deploys the combined root `dist/` directory.
