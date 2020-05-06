 /** SWE 645 Assignment4, Team members: Avinash[G01163980], Rashi[G01225299], Rushil[G01203932], Mithilaesh[G01206238].*/
import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list=null;
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<any>('https://tt90umiwkg.execute-api.us-east-1.amazonaws.com/prod/users').subscribe(data => {
    this.list = data;
    })
  }
}
