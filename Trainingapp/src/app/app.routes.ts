import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { WorkexperienceComponent } from './components/workexperience/workexperience.component';

export const routes: Routes = [
    
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"workexperience",component:WorkexperienceComponent},
    {path:"contact",component:ContactComponent}
];
