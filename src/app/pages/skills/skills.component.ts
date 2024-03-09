import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Language, Miniskills, Skills } from '../../models/skills';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skill: Array<Miniskills> = [];
  language: Array<Language> = [];
  url: string = 'assets/data/skill.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
      this.http.get(this.url).subscribe(res => {
        var result = <Skills>res

        this.skill = result.skill
        this.language = result.language
      })
  }
}

