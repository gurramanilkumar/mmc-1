import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LadingScreenComponent } from '../lading-screen/lading-screen.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ServicesComponent } from '../services/services.component';
import { GlobalPresenceComponent } from '../global-presence/global-presence.component';
import { ProductsComponent } from '../products/products.component';
import { ContactComponent } from '../contact/contact.component';
import { MilestonesComponent } from '../milestones/milestones.component';



  
  const routes: Routes = [
    { path: '', component: LadingScreenComponent, pathMatch: 'full' },
    { path: 'home', component: LadingScreenComponent, pathMatch: 'full' },
    { path: 'about', component: AboutusComponent, pathMatch: 'full' },
    { path: 'Services', component: ServicesComponent, pathMatch: 'full' },
    { path: 'GlobalPresence', component: GlobalPresenceComponent, pathMatch: 'full' },
    { path: 'Products', component: ProductsComponent, pathMatch: 'full' },
    { path: 'Contact', component: ContactComponent, pathMatch: 'full' },
    { path: 'newMilestones', component: MilestonesComponent, pathMatch: 'full' },

    
    { path: '**', component: LadingScreenComponent, pathMatch: 'full' }
  ];
@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
  })
  export class RoutingModule { }
  

  