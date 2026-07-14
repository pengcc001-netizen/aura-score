import fs from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const base = 'https://aura.csskey.com'
const today = new Date().toISOString().split('T')[0]

// Read aura events
const eventsData = fs.readFileSync(resolve(root, 'src', 'data', 'auraEvents.ts'), 'utf8')
const eventIds = [...eventsData.matchAll(/id: "([a-z0-9-]+)"/g)].map(m => m[1])

// Read aura types
const typesData = fs.readFileSync(resolve(root, 'src', 'data', 'auraTypes.ts'), 'utf8')
const typeSlugs = [...typesData.matchAll(/slug: "([a-z0-9-]+)"/g)].map(m => m[1])

// Read personas
const personasData = fs.readFileSync(resolve(root, 'src', 'data', 'auraPersonas.ts'), 'utf8')
const personaSlugs = [...personasData.matchAll(/slug: "([a-z0-9-]+)"/g)].map(m => m[1])

// Read blog
const blogData = fs.readFileSync(resolve(root, 'src', 'data', 'blog.ts'), 'utf8')
const blogSlugs = [...new Set([...blogData.matchAll(/slug: "([a-z0-9-]+)"/g)].map(m => m[1]))]

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
const add = (p, pri) => { xml += `  <url><loc>${base}${p}</loc><lastmod>${today}</lastmod><priority>${pri}</priority></url>\n` }

// Static pages
add('/', 1.0)
add('/events', 0.9)
add('/types', 0.8)
add('/personas', 0.8)
add('/leaderboard', 0.7)
add('/blog', 0.8)
add('/about', 0.5)
add('/privacy', 0.3)
add('/terms', 0.3)
add('/contact', 0.5)
add('/disclaimer', 0.3)

// Dynamic pages
for (const id of eventIds) add(`/events/${id}`, 0.9)
for (const slug of typeSlugs) add(`/types/${slug}`, 0.7)
for (const slug of personaSlugs) add(`/personas/${slug}`, 0.7)
for (const slug of blogSlugs) add(`/blog/${slug}`, 0.8)

xml += '</urlset>\n'

fs.writeFileSync(resolve(root, 'public', 'sitemap.xml'), xml, 'utf8')
try { fs.writeFileSync(resolve(root, 'dist', 'sitemap.xml'), xml, 'utf8') } catch {}
console.log(`Sitemap: ${6 + typeSlugs.length + personaSlugs.length + blogSlugs.length + eventIds.length} URLs (${eventIds.length} events, ${typeSlugs.length} types, ${personaSlugs.length} personas, ${blogSlugs.length} blog)`)
