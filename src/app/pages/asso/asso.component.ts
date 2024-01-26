import { Component, OnInit } from '@angular/core';
import { IAsso } from '../../models/iasso';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-asso',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './asso.component.html',
  styleUrl: './asso.component.css'
})

export class AssoComponent implements OnInit{
  listAssos: Array<IAsso> = [];
  url: string = 'assets/data/asso.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
      this.http.get(this.url).subscribe(res => {
        this.listAssos = <Array<IAsso>>res;
      })
  }
}
