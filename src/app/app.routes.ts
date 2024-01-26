import { Routes } from '@angular/router';
import { BioComponent } from './pages/bio/bio.component';
import { AssoComponent } from './pages/asso/asso.component';
import { ExpProComponent } from './pages/exp-pro/exp-pro.component';
import { FormationComponent } from './pages/formation/formation.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HomeComponent } from './pages/home/home.component';

const routeConfig: Routes = [
    {path:'', component:HomeComponent},
    {path:'info', component:BioComponent},
    {path:'asso', component:AssoComponent},
    {path:'exp-pro', component:ExpProComponent},
    {path:'formation', component:FormationComponent},
    {path:'hobbies', component:HobbiesComponent},
    {path:'projects', component:ProjectsComponent},
    {path:'skills', component:SkillsComponent}
];

export default routeConfig;