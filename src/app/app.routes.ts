import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'display-data',pathMatch:'full'},
    {path:'display-data',loadComponent:()=> import('./component/display-specific-data/display-specific-data').then((c)=>c.DisplaySpecificData)}
];
