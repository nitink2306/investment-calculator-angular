import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppModule } from './app/app.module';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
