


import { Observable } from "rxjs";

var observable = Observable.create((observer:any) => {
    observer.next('Hello World!')
})



import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngcanvas';
  ngOnInit(): void {
    var observable = Observable.create()
  }
  
}

export class AppComponent implements OnInit{
    title = 'ngcanvas';
    ngOnInit(): void {
      var observable = Observable.create((observer:any) => {
        observer.next('Hello World!')
    })
    observable.subscribe(function logMessage(message:any) {
      console.log(message);
    })
  }


  