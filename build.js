/*
 * Build step for Vercel (Framework preset expects `npm run build` → `dist/`).
 * The site is already production-ready source; this just stages it.
 */
const fs = require('fs');
const path = require('path');

const root = __dirname;
const out = path.join(root, 'dist');

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

for (const entry of ['index.html', 'vercel.json', 'assets']) {
  fs.cpSync(path.join(root, entry), path.join(out, entry), { recursive: true });
}

console.log('static build → dist/');
