// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // ✅ import your route config

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // ✅ Add routing
    importProvidersFrom(BrowserAnimationsModule)
  ]
});
