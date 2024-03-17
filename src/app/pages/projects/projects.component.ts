import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Projects } from '../../models/projects';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  listProjects: Array<Projects> = [];
  url: string = 'assets/data/projects.json';

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.listProjects = <Array<Projects>>res;
    })
  }
}
