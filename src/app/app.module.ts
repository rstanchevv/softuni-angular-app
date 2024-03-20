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
    provideFirebaseApp(() => initializeApp({"projectId":"techkings-angular-demo-project","appId":"1:101881152932:web:1981f8cc0e53741daeed31","storageBucket":"techkings-angular-demo-project.appspot.com","apiKey":"AIzaSyD2C3ogSa0HyPkA4ysZZgrIe6IR62YPiDs","authDomain":"techkings-angular-demo-project.firebaseapp.com","messagingSenderId":"101881152932","measurementId":"G-BLZG6JMF0V"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
