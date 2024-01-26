import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IFormation } from '../../models/iformation';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent implements OnInit{
  listFormation: Array<IFormation> = [];
  url: string = 'assets/data/formation.json';

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.listFormation = <Array<IFormation>>res;
    })
  }
}
