import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ContactUs } from '../../contactus.interface';
import * as L from 'leaflet';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
titleform = 'Contact Us Form';
title = 'Contact Us Details';

  public contactus!: ContactUs; // our model
  ngOnInit() { 
    const map = L.map('map', {
      center: [3.0652, 101.4832],
      zoom: 14
    });
    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    });
    tileLayer.addTo(map);
    //  L.marker([3.0652, 101.4832]).addTo(map)
    // .bindPopup("Razer Merchant Services Office").openPopup(); 
   // we will initialize our form here
   this.contactus = {
    name: '',
    email: '',
    contactno: '',
    message: ''
   };
  }
 save(model: ContactUs, isValid: boolean) 
 { 
  // check if model is valid// if valid, call API to save customer
  console.log(model, isValid);
 }
 
}
