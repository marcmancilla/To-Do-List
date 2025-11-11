import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { App } from './app';

export const routes: Routes = [
    {path: '', component: Landing},
    {path: 'app', component: App},
    {path: '**', component: Landing}
];
