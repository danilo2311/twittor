// Guardar en el cache dinamico
function actualizaCacheDinamico(dynamicCache, req, resp) {
    console.log(resp.url.includes('chrome-extension'));
    if (resp.ok) {
        return caches.open(dynamicCache).then(cache => {
            console.log(cache);
            cache.put(req, resp.clone());
            return resp.clone();
        })
    } else {
        return resp;
    }
}