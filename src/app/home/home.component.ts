import { getLocaleFirstDayOfWeek } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Emp : Employee[] | undefined;
  constructor(private http: HttpClient) { }

  ngOnInit(): void{
    this.getList();
  }
  

  getList(){
    this.http.get<any[]>("http://localhost:8081/api/v1/employee/all").subscribe( 
      data => {
      this.Emp = data;
    },
    error => {
      console.error('Error fetching table data:', error);
    })
  }
}
