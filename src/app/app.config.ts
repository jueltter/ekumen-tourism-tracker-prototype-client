import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { environment } from '../environments/environment.development';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_CONFIG } from '@common-services/environment.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: APP_CONFIG, useValue: environment },
    provideHttpClient(withFetch())
  ]
};
