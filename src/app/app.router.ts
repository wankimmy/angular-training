import { ModuleWithProviders } from '@angular/core';
//import {RouterModule} from ‘@angular/core’;
import { Routes, RouterModule } from '@angular/router'; 
//module for implementing routing

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TaskComponent } from './task/task.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';


//Create and exporta variablecalled Router in the app.routing.ts, which would be a collection of all routes inside the Angular application.
// pathMatch is specifying a strict matching of path to reach the destination page.
// In the routes array, the path object is '' which means the path http://localhost:4200/ , we have not provided any destination 
    // to this object, but we are redirecting this path to items path using redirectTo key.
    
export const router: Routes = [
    { path: '', component: HomeComponent }, //default page
    { path: 'task', component: TaskComponent },
    { path: 'course', component: CourseComponent },
    { path: 'form', component: FormComponent },
    { path: 'table', component: TableComponent },
    { path: 'contactus', component: ContactusComponent }
];

//RouterModule.forRoot is for creating routes for the entire application
//  pass the routes array in the RouterModule using RouterModule.forRoot(router)

export const routes = RouterModule.forRoot(router);

//CREATE THE app.router.ts inside the App folder
//export const routes: ModuleWithProviders = RouterModule.forRoot(router)