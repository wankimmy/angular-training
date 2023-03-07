import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
title = 'Welcome To Angular';
FormName = 'World';
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
