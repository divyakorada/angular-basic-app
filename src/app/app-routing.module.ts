import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutusComponent } from './aboutus/aboutus.component'
import { UsersComponent } from './users/users.component'
import { HelloGuard } from './hello.guard';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ProductComponent } from './activatedRoute/product/product.component';
import { ProductDetailComponent } from './activatedRoute/product-detail/product-detail.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { MakeAPIComponent } from './components/make-api/make-api.component';
import { FormComponent } from './components/form/form.component';
import { DataCommunicationComponent } from './components/data-communication/data-communication.component';
import { ListComponent } from './components/list/list.component';
import { PipeComponent } from './components/pipes/pipe/pipe.component';
import { CommonDirectiveComponent } from './components/Directives/common-directive/common-directive.component';
import { DebounceComponent } from './components/debounce/debounce.component';
import { NgDirectivesComponent } from './components/ng-directives/ng-directives.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, children: [
    { path: 'content-projection', component: ContentProjectionComponent },
     { path: 'make-api', component: MakeAPIComponent },
     { path: 'form', component: FormComponent },
     { path: 'data-communication', component: DataCommunicationComponent },
     { path: 'list', component: ListComponent },
     { path: 'pipes', component: PipeComponent },
     { path: 'custom-directive', component: CommonDirectiveComponent },
     { path: 'debounce', component: DebounceComponent },
     { path: 'ng-directives', component: NgDirectivesComponent },
     { path: 'Rxjs', component: RxjsComponent },
    { path: '', redirectTo: 'content-projection', pathMatch: 'full' }, // default tab
    
  ]},
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
