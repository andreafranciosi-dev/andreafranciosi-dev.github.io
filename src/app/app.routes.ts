import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Component } from '@angular/core';
import { VideogamesPcConsole } from './videogames-pc-console/videogames-pc-console';
import { MobileHypercasual } from './mobile-hypercasual/mobile-hypercasual';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'videogames-pc-console', component: VideogamesPcConsole},
    {path: 'mobile-hypercasual', component: MobileHypercasual},
    { path: '**', redirectTo: '' }
];
