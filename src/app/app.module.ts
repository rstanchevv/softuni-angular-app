import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TechModule } from './tech/tech.module';
import { HomeModule } from './home/home.module';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.development';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    TechModule,
    HomeModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
