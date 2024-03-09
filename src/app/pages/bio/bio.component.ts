import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Coords } from '../../models/bio';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css'
})
export class BioComponent {
  coords: Coords | undefined
  url: string = 'assets/data/infos.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.coords = <Coords>res
    })
  }

}