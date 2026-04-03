const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3456;
const BASE = 'C:/Users/caohongbo/WorkBuddy/Claw';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.png':  'image/png',
  '.svg':  'image/svg+xml',
};

http.createServer((req, res) => {
  let filePath = req.url === '/' ? '/hanzi-stroke-preview.html' : req.url;
  filePath = path.join(BASE, filePath.split('?')[0]);
  const ext = path.extname(filePath);
  try {
    const data = fs.readFileSync(filePath);
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'text/plain',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(data);
  } catch (e) {
    res.writeHead(404);
    res.end('Not found: ' + filePath);
  }
}).listen(PORT, '0.0.0.0', () => {
  console.log('Server running at:');
  console.log('  Local:   http://localhost:' + PORT);
  console.log('  Network: http://192.168.30.84:' + PORT);
});
