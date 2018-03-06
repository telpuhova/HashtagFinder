import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TrendsComponent } from './trends/trends.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TrendsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
