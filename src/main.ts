import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/audio.service.worker.js')
//     .then(registration => console.log('ServiceWorker registration successful'))
//     .catch(err => console.log('ServiceWorker registration failed: ', err));
// }
