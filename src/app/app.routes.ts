import { Routes } from '@angular/router';
import { BioComponent } from './pages/bio/bio.component';
import { AssoComponent } from './pages/asso/asso.component';
import { ExpProComponent } from './pages/exp-pro/exp-pro.component';
import { FormationComponent } from './pages/formation/formation.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HomeComponent } from './pages/home/home.component';
import { AssoItemComponent } from './pages/asso-item/asso-item.component';
import { FormationItemComponent } from './pages/formation-item/formation-item.component';
import { ExpProItemComponent } from './pages/exp-pro-item/exp-pro-item.component';
import { ProjectsItemComponent } from './pages/projects-item/projects-item.component';

const routeConfig: Routes = [
    {path:'', component:HomeComponent},
    {path:'info', component:BioComponent},
    {path:'asso', component:AssoComponent},
    {path:'asso/:id', component:AssoItemComponent},
    {path:'exp-pro', component:ExpProComponent},
    {path:'exp-pro/:id', component:ExpProItemComponent},
    {path:'formation', component:FormationComponent},
    {path:'formation/:id', component:FormationItemComponent},
    {path:'hobbies', component:HobbiesComponent},
    {path:'projects', component:ProjectsComponent},
    {path:'projects/:id', component:ProjectsItemComponent},
    {path:'skills', component:SkillsComponent}
];

export default routeConfig;