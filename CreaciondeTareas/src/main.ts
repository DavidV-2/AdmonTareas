import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';


bootstrapApplication(AppComponent, {
  ...appConfig, // Propagar las configuraciones existentes
  providers: [
    ...appConfig.providers || [], // Mantén los proveedores existentes si los hay
    provideHttpClient(withFetch()) 
  ]
}).catch((err) => console.error(err));
