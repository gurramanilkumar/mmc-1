import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LadingScreenComponent } from './lading-screen/lading-screen.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { GlobalPresenceComponent } from './global-presence/global-presence.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './servicesCommon/services';
import { DataService } from './servicesCommon/dataService';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LadingScreenComponent,
    FooterComponent,
    AboutusComponent,
    ServicesComponent,
    GlobalPresenceComponent,
    ProductsComponent,
    ContactComponent,
    MilestonesComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [CommonService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
