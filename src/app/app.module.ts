import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HeaderComponent } from './components/header/header.component';
import { simpleComponent } from './components/onchanges';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { DataService } from './data.service';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { HelloGuard } from './hello.guard';
import { AuthService } from './auth.service';
import { Routes } from '@angular/router';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { ChildComponent } from './child/child.component';
import { ProductModule } from './activatedRoute/product.module';
import { CounterComponent } from './child/counter/counter.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchPipe } from './pipes/search.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { AgePipe } from './pipes/age.pipe';
import { RevstringPipe } from './pipes/revstring.pipe';
import { PureImpurePipe } from './pipes/pure-impure.pipe';


const routes: Routes = [
 /*  { path: ' ', redirectTo: 'home' },
  { path: 'home', component: HomeComponent }, 
  { path: 'aboutus', component: AboutusComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: TemplateDrivenComponent}, */

]
  


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    simpleComponent,
    ParentComponent,
    SiblingComponent,
    TemplateDrivenComponent,
    AboutusComponent,
    HomeComponent,
    UsersComponent,
    RxjsOperatorsComponent,
    ChildComponent,
    CounterComponent,
    CoursesComponent,
    CourseDetailsComponent,
    PaginationComponent,
    SearchPipe,
    CustomDatePipe,
    AgePipe,
    RevstringPipe,
    PureImpurePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ProductModule
  ],
  exports: [
    HeaderComponent,
    ContactsComponent
],

  providers: [DataService, HelloGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
