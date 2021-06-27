// Guardar en el cache dinamico
function actualizaCacheDinamico(dynamicCache, req, resp) {
    if (resp.ok && !resp.url.includes('chrome-extension')) {
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, resp.clone());
            return resp.clone();
        })
    } else {
        return resp;
    }
}