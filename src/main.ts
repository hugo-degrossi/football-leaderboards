import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(HttpClientModule),
      provideRouter(routes, withComponentInputBinding()),
    ]
   }
)
