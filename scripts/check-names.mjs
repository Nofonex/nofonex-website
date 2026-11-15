// Fails the build when retired product names come back on the site.
// BeamFoWo was renamed to BeFoWo (conventions/NAMING.md in Nofonex/nofonex-ecosystem, 2026-10-12).
// The only allowed mention is the redirect in next.config.mjs, which is not scanned.
import { readdirSync, readFileSync, statSync } from "node:fs"
import { join, extname } from "node:path"

const ROOTS = ["app", "components", "lib", "public"]
const TEXT_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".json", ".md", ".mdx", ".txt", ".html", ".svg", ".xml", ".css"])
const RETIRED = [/beamfowo/i]

const hits = []

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry)
    const stats = statSync(path)
    if (stats.isDirectory()) {
      walk(path)
      continue
    }
    // File names count too (e.g. public/beamfowo-logo.png)
    if (RETIRED.some((re) => re.test(entry))) hits.push(`${path} (file name)`)
    if (!TEXT_EXTENSIONS.has(extname(entry).toLowerCase())) continue
    readFileSync(path, "utf8")
      .split("\n")
      .forEach((line, i) => {
        if (RETIRED.some((re) => re.test(line))) hits.push(`${path}:${i + 1}: ${line.trim()}`)
      })
  }
}

for (const root of ROOTS) {
  try {
    walk(root)
  } catch (error) {
    if (error.code !== "ENOENT") throw error
  }
}

if (hits.length > 0) {
  console.error("Retired product name found (use BeFoWo, not BeamFoWo):")
  for (const hit of hits) console.error(`  ${hit}`)
  process.exit(1)
}
console.log("check:names passed")
