import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  msg: any;

  constructor(httpClient: HttpClient) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    httpClient.get("http://localhost:8080/hello", {headers, responseType: 'text'}).subscribe(
      msg => {
        this.msg = msg;
      }, error => {
        this.msg = error;
      });
  }

}
