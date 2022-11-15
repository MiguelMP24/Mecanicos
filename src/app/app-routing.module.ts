import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth-guards.guard';

const routes: Routes = [
  { 
    path: 'reactives', 
  loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule), 
  canActivate:[AuthGuard] 
  },
  { 
  path: 'auth', 
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { 
  path: '**', redirectTo: 'reactives' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
