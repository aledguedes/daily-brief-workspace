import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, RouterOutlet],
  template: `
    <div class="flex flex-col min-h-screen">
      <app-header />
      <div class="container mx-auto px-4 pt-24">
        <router-outlet />
      </div>
    </div>
  `,
  styles: [],
})
export class HomeComponent {}
