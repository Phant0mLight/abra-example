import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  msg: any;

  constructor(httpClient: HttpClient) {
    httpClient.get("localhost:8080/hello").subscribe(
      msg => {
        this.msg = msg;
      }, error => {
        this.msg = error;
      });
  }

}
