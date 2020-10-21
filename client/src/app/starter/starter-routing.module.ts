import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './starter.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: StarterComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: 'login',
//         pathMatch: 'full',
//       },
//       {
//         path: 'login',
//         component: LoginComponent,
//       },
//       {
//         path: 'register',
//         component: RegisterComponent,
//       },
//     ],
//   },
// ];
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarterRoutingModule {}
