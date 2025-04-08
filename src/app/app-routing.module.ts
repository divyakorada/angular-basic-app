import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutusComponent } from './aboutus/aboutus.component'
import { UsersComponent } from './users/users.component'
import { HelloGuard } from './hello.guard';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ProductComponent } from './activatedRoute/product/product.component';
import { ProductDetailComponent } from './activatedRoute/product-detail/product-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'users', component: UsersComponent},
  { path: 'users/:id', component: TemplateDrivenComponent},
/*   {
    path: 'products',
    component: ProductComponent,
    children: [
      {
        path: 'detail/:id',
        component: ProductDetailComponent,
      },
    ],
  }, */
];
/*  canActivate: [HelloGuard] */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
