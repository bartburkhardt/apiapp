import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css']
})
export class ApiListComponent implements OnInit {
  apiData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getapis();
  }

  getapis(): void {
    this.http.get<any[]>('https://api.publicapis.org/categories').subscribe(
      (data: any) => {
        this.apiData = data.categories;
      },
      (error) => {
        console.error('Error fetching api data:', error);
      }
    );
  }
}
