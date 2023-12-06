import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrl: './entry-list.component.css'
})
export class EntryListComponent implements OnInit {

  entryData: any[] = [];
  category: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.category = params['categoryName'];
      this.getentries(this.category);
    });

  }

  getentries(category:string): void {
    this.http.get<any[]>(`https://api.publicapis.org/entries?category=${category}`).subscribe(
      (data: any) => {
        this.entryData = data.entries;
      },
      (error) => {
        console.error('Error fetching api data:', error);
      }
    );
  }

}