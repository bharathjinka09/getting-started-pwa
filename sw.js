self.addEventListener('install', e => {
	console.log('Install!');
	e.waitUntil(
		caches.open('static').then(cache => {
			return cache.addAll(['./','./src/master.css','./images/logo192.png']);
		})
	);
})

self.addEventListener('fetch', e => {
	console.log(`Fetch request for :${e.request.url}`);
});