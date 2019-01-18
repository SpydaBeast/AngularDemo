import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {
  public data: any = [];
  constructor(private _router: Router) { }

  ngOnInit() {
  }
 
  setData(){
    this.data['name'] = "Google Analytics";
    this.data['company'] = "Alphbet";
    this.data['phone'] = "55555555";
    this.data['email'] = "test@email.com";
    this.data['help'] = "Hello Google Analytics!";
  }
  
  
  send(name, company, phone, email, help){
    alert("Yay! Your messgae has been submited!" 
    + " \n"+ "Name: " + name
    + " \n"+ "Company: " + company
    + " \n"+ "Phone: " + phone
    + " \n"+ "Email " + email
    + " \n"+ "Help " + help )
    this._router.navigate(['/submitted'])
  }
}
