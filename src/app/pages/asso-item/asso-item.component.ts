import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IAsso } from '../../models/iasso';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asso-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './asso-item.component.html',
  styleUrl: './asso-item.component.css'
})
export class AssoItemComponent {
  asso_id: number = 0;
  asso: IAsso | undefined ;

  url: string = 'assets/data/asso.json';

  constructor(private route:ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.asso_id = params['id']; // Access the 'id' parameter from the URL
    });

    this.http.get(this.url).subscribe(res => {
      var result = <Array<IAsso>>res
      this.asso = result[this.asso_id];
    })
  }
}
