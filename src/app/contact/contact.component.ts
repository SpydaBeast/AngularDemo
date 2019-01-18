import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //constructor(private sendgridService: SendgridService){}
  constructor(private _http: HttpClient, private router: Router) { }
  ngOnInit() { }

  sendEmail() {

    let url = `https://us-central1-probalance-214005.cloudfunctions.net/httpEmail?<<APIKEY>>`
    let body = JSON.stringify({
      "personalizations": [
        {
          "to": [
            {
              "email": "work.brien@gmail.com",
              "name": "Postman"
            }
          ],
          "subject": "Success"
        }
      ],
      "from": {
        "email": "brienacalloway@email.com",
        "name": "Angular App"
      },
      "reply_to": {
        "email": "work.brien@gmail.com",
        "name": "Test"
      },
      "content": [
        {
          "type": "text/plain",
          "value": "Request Successful 001!"
        }
      ]
    });

    let httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        // 'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
      })
    };
    console.log("Payload:")
    console.log(url)
    console.log(body);
    console.log(httpOptions.headers)

    return this._http.post(url, body)
      .toPromise()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

  }
}
