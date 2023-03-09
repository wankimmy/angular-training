import { Component } from '@angular/core';
import { User } from '../../user.interface';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
title = 'Task Component';
people: any[] = [
    {
      "name": "Douglas Pace",
      "age": 35,
      "country": "UK"
    },
    {
      "name": "Mcleod Mueller",
      "age": 32,
      "country": "USA"
    },
    {
      "name": "Day Meyers",
      "age": 21,
      "country": "HK"
    },
    {
      "name": "Naruto",
      "age": 24,
      "country": "JP"
    }
  ];
}
