import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, RouterOutlet],
  template: `
    <app-header></app-header>
    <div class="container mx-auto px-4">
      <router-outlet />
    </div>
  `,
  styles: [],
})
export class HomeComponent {}
