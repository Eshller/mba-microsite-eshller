import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { AcademicsComponent } from './academics/academics.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
// import { MainacadComponent } from './mainacad/mainacad.component';
// import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // AcademicsComponent,
    FooterComponent,
    // HomepageComponent,
    routingComponents,
    MainComponent,
    // MainacadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  // RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
})
export class AppModule { }
