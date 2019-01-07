import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SendgridService {

  private url = 'https://us-central1-probalance-214005.cloudfunctions.net/httpEmail?sg_key=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';

constructor(private _http: HttpClient) { }

send(payload){
  return this._http.post<any>(this.url, payload, httpOptions).subscribe(
    res => {
      console.log("Here is the reponse from server: " + res);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error){
        console.log("Client Side Error " + err.message)
      } else{
        console.log("Server Side Error  : " + err.message)
      }
    });
  
}

}
