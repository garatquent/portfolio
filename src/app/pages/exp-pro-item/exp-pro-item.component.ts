import { Component } from '@angular/core';
import { IXpPro } from '../../models/ixp-pro';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exp-pro-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './exp-pro-item.component.html',
  styleUrl: './exp-pro-item.component.css'
})
export class ExpProItemComponent {
  xp_id: number = 0;
  xp: IXpPro | undefined ;

  url: string = 'assets/data/exp-pro.json';

  constructor(private route:ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.xp_id = params['id']; // Access the 'id' parameter from the URL
    });

    this.http.get(this.url).subscribe(res => {
      var result = <Array<IXpPro>>res
      this.xp = result[this.xp_id];
    })
  }
}
