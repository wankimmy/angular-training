import { Component } from '@angular/core';
import { User } from '../../user.interface';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

public user!: User; // our model
  ngOnInit() {    // we will initialize our form here
   this.user = {
    email: '',
    course: '',
    gender: '',
    remarks: '',
    // address: {
    //   street: '',
    //   postcode: '' 
    // }
   };
  }
 save(model: User, isValid: boolean) 
 { 
  // check if model is valid// if valid, call API to save customer
  console.log(model, isValid);
 } 
}
