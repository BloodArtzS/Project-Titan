import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import { WelcomeComponent } from './welcome/welcome.component';
import { TitanComponent } from './titan/titan.component';
import { InspoComponent } from './inspo/inspo.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
 { path: '', component: WelcomeComponent},
 { path: 'titan', component: TitanComponent},
 { path: 'inspo', component: InspoComponent},
 { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot for root routing module
  exports: [RouterModule]
})
export class AppRoutingModule { }
