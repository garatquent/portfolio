import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './template/side-nav/side-nav.component';
import { AssoComponent } from './pages/asso/asso.component';
import { BioComponent } from './pages/bio/bio.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    SideNavComponent,
    AssoComponent,
    BioComponent,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'portfolio';
}
