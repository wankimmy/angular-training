import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.router';
import { Routes, RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TaskComponent } from './task/task.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TaskComponent,
    FormComponent,
    TableComponent,
    ContactusComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routes
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
