import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(
  fileURLToPath(new URL('../dist/client/', import.meta.url)),
);
const port = Number(process.env.PORT || 4173);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.rsc': 'text/x-component',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};
try {
  await stat(resolve(root, 'index.html'));
} catch {
  console.error(
    'Die fertige Website fehlt. Bitte zuerst npm run build ausführen.',
  );
  process.exit(1);
}
const server = http.createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    res.end();
    return;
  }
  try {
    const url = new URL(req.url, 'http://localhost');
    const path = decodeURIComponent(url.pathname);
    let file = resolve(root, '.' + path);
    if (file !== root && !file.startsWith(root + sep)) {
      res.writeHead(403);
      res.end();
      return;
    }
    try {
      const s = await stat(file);
      if (s.isDirectory()) file = resolve(file, 'index.html');
    } catch {
      file = resolve(root, '.' + path.replace(/\/$/, '') + '.html');
    }
    let data,
      status = 200;
    try {
      data = await readFile(file);
    } catch {
      file = resolve(root, '404.html');
      data = await readFile(file);
      status = 404;
    }
    res.writeHead(status, {
      'Content-Type': types[extname(file)] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Cache-Control': 'no-cache',
    });
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch {
    res.writeHead(400);
    res.end('Ungültige Anfrage.');
  }
});
server.on('error', (error) => {
  console.error(
    error.code === 'EADDRINUSE'
      ? `Port ${port} ist belegt. Alternativ: PORT=4174 npm start`
      : error.message,
  );
  process.exit(1);
});
server.listen(port, '127.0.0.1', () =>
  console.log(`Lupercia ist bereit: http://127.0.0.1:${port}/`),
);
