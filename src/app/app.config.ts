import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import {provideNativeDateAdapter} from '@angular/material/core';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }), 
		provideRouter(routes),
		provideHttpClient(),
		provideNativeDateAdapter(),
		importProvidersFrom([
			HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
		]), provideAnimationsAsync()
	]
};
