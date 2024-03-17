import { Component } from '@angular/core';
import { IFormation } from '../../models/iformation';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formation-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './formation-item.component.html',
  styleUrl: './formation-item.component.css'
})
export class FormationItemComponent {
  formation_id: number = 0;
  formation: IFormation | undefined ;

  url: string = 'assets/data/formation.json';

  constructor(private route:ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.formation_id = params['id']; // Access the 'id' parameter from the URL
    });

    this.http.get(this.url).subscribe(res => {
      var result = <Array<IFormation>>res
      this.formation = result[this.formation_id];
    })
  }
}
