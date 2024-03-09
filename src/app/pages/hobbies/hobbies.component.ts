import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Distincts, Hobby } from '../../models/hobby';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent implements OnInit{
  hobbies: Array<string> = [];
  distincts: Array<Distincts> = [];
  url: string = 'assets/data/hobbies.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
      this.http.get(this.url).subscribe(res => {
        var result = <Hobby>res

        this.hobbies = result.hobbies
        this.distincts = result.distincts
      })
  }
}
