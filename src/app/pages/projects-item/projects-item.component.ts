import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Projects } from '../../models/projects';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './projects-item.component.html',
  styleUrl: './projects-item.component.css'
})
export class ProjectsItemComponent {
  projects_id: number = 0;
  projects: Projects | undefined ;

  url: string = 'assets/data/projects.json';

  constructor(private route:ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projects_id = params['id']; // Access the 'id' parameter from the URL
    });

    this.http.get(this.url).subscribe(res => {
      var result = <Array<Projects>>res
      this.projects = result[this.projects_id];
    })
  }
}
