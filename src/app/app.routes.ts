import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'reactive-form-value-changes', pathMatch: 'full' },
    { path: 'display-data', loadComponent: () => import('./component/display-specific-data/display-specific-data').then((c) => c.DisplaySpecificData) },
    { path: 'reactive-form-value-changes', loadComponent: () => import('./component/reactive-form-value-changes/reactive-form-value-changes').then((c) => c.ReactiveFormValueChanges) }
];
