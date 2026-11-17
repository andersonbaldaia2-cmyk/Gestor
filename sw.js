const CACHE = 'autogestor-cfc-v1';
const ARQUIVOS = ['./', './index.html', './manifest.webmanifest', './icone.svg'];
self.addEventListener('install', evento => {
  evento.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', evento => {
  evento.waitUntil(caches.keys().then(chaves => Promise.all(chaves.filter(chave => chave.startsWith('autogestor-cfc-') && chave !== CACHE).map(chave => caches.delete(chave)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', evento => {
  if (evento.request.method !== 'GET' || new URL(evento.request.url).origin !== self.location.origin) return;
  evento.respondWith(caches.match(evento.request).then(cached => cached || fetch(evento.request).then(resposta => {
    if (resposta.ok) caches.open(CACHE).then(cache => cache.put(evento.request, resposta.clone()));
    return resposta;
  }).catch(() => caches.match('./index.html'))));
});