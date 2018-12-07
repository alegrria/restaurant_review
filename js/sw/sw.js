self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('restaurants-static').then(function(cache){
      return cache.addAll([
        '/',
        '/js/',
        '/img/',
        '/css/',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'
      ]);
    })
  );
});
