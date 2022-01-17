import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-netlify-serverless-root',
  template: `
    <h2 [textContent]="message"></h2>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  message = "-";

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('/.netlify/functions/helloWorld').subscribe((data: any) => {
      this.message = data.message;
    });
  }
}
