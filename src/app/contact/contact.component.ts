import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public data: any = [];

  //constructor(private sendgridService: SendgridService){}
  constructor(private _http: HttpClient, private router: Router) { }
  ngOnInit() {}

  sendEmail() {

    let url = `https://us-central1-probalance-214005.cloudfunctions.net/httpEmail`
    let params: URLSearchParams = new URLSearchParams();
    let httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
      // 'Authorization': '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'
    })};

    params.set('to', 'work.brien@gmail.com');
    params.set('from', 'brienacalloway@gmail.com');
    params.set('subject', 'API test');
    params.set('content', 'SUCCESS! You have succefully send an email from your Angular App');

    return this._http.post(url, params, httpOptions)
                    .toPromise()
                    .then( res => {
                      console.log(res)
                    })
                    .catch(err => {
                      console.log(err)
                    })

  }
}


  // send(from, text, subject){
  //   this.data['to'] = 'work.brien@gmail.com';
  //   this.data['from'] = from;
  //   this.data['subject'] = subject;
  //   this.data['text'] = text;
  //   console.log(this.data);
  //   let payload = this.sendgridService.send(this.data);
  //   console.log("Testing http data service: " + from + " " + subject+ " " + text);
  //   return payload;
  // }

