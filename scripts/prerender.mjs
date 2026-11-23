import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const template = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf-8');
const { render } = await import(pathToFileURL(path.join(root, 'dist-server/entry-server.js')).href);

const html = template.replace('<!--app-html-->', render());
fs.writeFileSync(path.join(root, 'dist/index.html'), html);
console.log('Prerendered dist/index.html');
