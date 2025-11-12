import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { App } from './app';
import { Home } from './home/home';

export const routes: Routes = [
    {path: '', component: Landing},
    {path: 'app', component: App},
    {path: 'home', component: Home},
    {path: '**', component: Landing}
];
