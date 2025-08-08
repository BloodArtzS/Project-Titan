import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import { WelcomeComponent } from '../welcome/welcome.component';
import { InspoComponent } from '../inspo/inspo.component';
import { ContactComponent } from '../contact/contact.component';
import { TitanComponent } from '../titan/titan.component';
import { Chapter1Component } from '../titan/chapters/chapter1/chapter1.component';


export const routes: Routes = [
 { path: '', component: WelcomeComponent},
 { path: 'titan', component: TitanComponent},
 { path: 'inspo', component: InspoComponent},
 { path: 'contact', component: ContactComponent},
 { path: 'titan/chapter1', component: Chapter1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot for root routing module
  exports: [RouterModule]
})
export class AppRoutingModule { }
