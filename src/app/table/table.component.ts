import { Component } from '@angular/core';
import { User } from '../../user.interface';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

appList: any[] = [ 
    {
      "ID": "1",
      "EmpCode": "0001",
      "Name": "Safwan",
      "Designation": "Software Engieer",
      "url": 'https://www.w3schools.com/w3images/lights.jpg'
    },
    {
      "ID": "2",
      "EmpCode": "0002",
      "Name": "Naruto",
      "Designation": "Hokage",
      "url": 'https://www.w3schools.com/w3images/nature.jpg'
    } ,
    {
      "ID": "3",
      "EmpCode": "0003",
      "Name": "Luffy",
      "Designation": "Pirate King",
      "url": 'https://www.w3schools.com/w3images/fjords.jpg'
    }, 
    {
      "ID": "4",
      "EmpCode": "0004",
      "Name": "Goku",
      "Designation": "Super Saiyan God",
      "url": './assets/images/star.png'
    }
   ];
}
