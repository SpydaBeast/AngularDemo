import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'autotrack';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  public data: any = [];

  //constructor(private sendgridService: SendgridService){}
  constructor(private router: Router) { }
  ngOnInit() {}

}