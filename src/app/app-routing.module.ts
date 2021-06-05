import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { BACKEND_ROUTES } from './routes/backend-layout-routes';
import { DEFAULT_ROUTES } from './routes/default-layout-routes';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: DEFAULT_ROUTES
  },
  {
    path: 'backend',
    component: BackendLayoutComponent,
    children: BACKEND_ROUTES
  },
  {
    path: '**',
    redirectTo: 'cms/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
