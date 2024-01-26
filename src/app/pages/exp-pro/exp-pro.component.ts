import { Component, OnInit } from '@angular/core';
import { IXpPro } from '../../models/ixp-pro';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-exp-pro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './exp-pro.component.html',
  styleUrl: './exp-pro.component.css'
})
export class ExpProComponent implements OnInit {
  listXp: Array<IXpPro> = [];
  url: string = 'assets/data/exp-pro.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
      this.http.get(this.url).subscribe(res => {
        this.listXp = <Array<IXpPro>>res;
      })
  }
}
