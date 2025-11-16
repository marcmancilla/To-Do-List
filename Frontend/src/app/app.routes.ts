import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { App } from './app';
import { Home } from './home/home';
import { Tarea } from './tarea/tarea';


export const routes: Routes = [
    {path: '', component: Landing},
    {path: 'app', component: App},
    {path: 'home', component: Home},
    {path: 'tarea', component: Tarea},
    {path: '**', component: Landing}
];
