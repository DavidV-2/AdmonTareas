import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { provideRouter } from "@angular/router";
import { bootstrapApplication, provideClientHydration } from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            BrowserAnimationsModule,
            FormsModule,
            HttpClientModule
        ),
        provideHttpClient(withFetch()), 
        provideRouter(routes), 
        provideClientHydration(),
    ],
};

bootstrapApplication(AppComponent, {
    providers: [appConfig.providers]
});
