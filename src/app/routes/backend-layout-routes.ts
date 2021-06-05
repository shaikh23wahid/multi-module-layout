import { dashCaseToCamelCase } from '@angular/compiler/src/util'
import { Routes } from '@angular/router'

export const BACKEND_ROUTES: Routes = [
    {
        path: "auth",
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'product',
        loadChildren: () => import('../product/product.module').then(m => m.ProductModule)
    }
]
