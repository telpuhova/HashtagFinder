import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TrendsComponent } from './trends/trends.component';
import { PlotlyComponent } from './plotly/plotly.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TrendsComponent
  },
  {
    path: 'plotly',
    component: PlotlyComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
