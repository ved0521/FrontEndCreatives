import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { PatnerComponent } from './patner/patner.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),PatnerComponent]
};
