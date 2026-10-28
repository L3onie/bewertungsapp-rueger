import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'project-list',
    pathMatch: 'full'
  },
  {
    path: 'project-list',
    loadChildren: () => import('./pages/project-list/project-list.module').then( m => m.ProjectListPageModule)
  },
  {
    path: 'project-detail/:id',
    loadChildren: () => import('./pages/project-detail/project-detail.module').then( m => m.ProjectDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }