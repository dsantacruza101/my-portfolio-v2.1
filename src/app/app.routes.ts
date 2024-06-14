import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./admin/pages/auth/layout-page/layout-page.component'),
    children:
      [
        {
          path: 'login',
          title: 'Auth-Login',
          loadComponent: () => import('./admin/pages/auth/login-page/login-page.component')
        },
        {
          path: '',
          redirectTo: '/auth/login',
          pathMatch: 'full'
        },
      ]
  },
  {
    path: 'myPortfolio',
    loadComponent: () => import('./public/portfolio-layout.component'),
    children:
      [
        {
          path: 'about',
          title: 'Portfolio-About',
          loadComponent: () => import('./public/pages/portfolio-about/portfolio-about.component')
        },
        {
          path: 'skills',
          title: 'Portfolio-SKills',
          loadComponent: () => import('./public/pages/portfolio-skils/portfolio-skils.component')
        },
        {
          path: 'projects',
          title: 'Portfolio-Projects',
          loadComponent: () => import('./public/pages/portfolio-projects/portfolio-projects.component')
        },
        {
          path: 'contact',
          title: 'Portfolio-Contact',
          loadComponent: () => import('./public/pages/portfolio-contact/portfolio-contact.component')
        },
        {
          path: '',
          redirectTo: '/myPortfolio/about',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/myPortfolio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
