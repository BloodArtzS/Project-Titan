import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import { WelcomeComponent } from '../welcome/welcome.component';
import { InspoComponent } from '../inspo/inspo.component';
import { ContactComponent } from '../contact/contact.component';
import { ChapterComponent } from '../chapters/chapter.component';
import { ResourcesComponent } from '../resources/resources.component';
import { DictionaryComponent } from '../dictionary/dictionary.component';


export const routes: Routes = [
 { path: '', component: WelcomeComponent},
 { path: 'chapters', component: ChapterComponent},
 { path: 'inspo', component: InspoComponent},
 { path: 'contact', component: ContactComponent},
 { path: 'dictionary', component: DictionaryComponent},
 { path: 'resources', component: ResourcesComponent},
 { path: 'chapter1', loadComponent: () => import('../chapters/chapter1/chapter1.component').then(m => m.Chapter1Component) },
 { path: 'chapter2', loadComponent: () => import('../chapters/chapter2/chapter2.component').then(m => m.Chapter2Component) },
 { path: 'chapter3', loadComponent: () => import('../chapters/chapter3/chapter3.component').then(m => m.Chapter3Component) },
 { path: 'chapter4', loadComponent: () => import('../chapters/chapter4/chapter4.component').then(m => m.Chapter4Component) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot for root routing module
  exports: [RouterModule]
})
export class AppRoutingModule { }
