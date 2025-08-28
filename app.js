// Service Worker registrieren
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker registriert!'))
    .catch(err => console.log('Service Worker Fehler:', err));
}
