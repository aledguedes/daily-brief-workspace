import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="fixed bg-white/80 backdrop-blur-md shadow-sm w-full top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center space-x-2">
              <div
                class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center"
              >
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                  />
                </svg>
              </div>
              <h1
                class="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
              >
                DailyBrief
              </h1>
            </div>
          </div>

          <nav class="hidden md:flex space-x-1">
            @for (menu of headerMenu; track $index) {
              <a
                [routerLink]="menu.route"
                class="px-3 py-2 text-gray-900 hover:text-blue-500 transition-colors font-medium rounded-lg hover:bg-blue-500/5"
              >
                {{ menu.name }}
              </a>
            }
          </nav>

          <div class="flex items-center space-x-4">
            <div class="relative hidden sm:block">
              <input
                type="text"
                placeholder="Buscar artigos..."
                class="w-64 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors text-sm"
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <!-- <button
              (click)="toggleTheme()"
              class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {{ themeService.getCurrentTheme() === 'light' ? '🌙' : '☀️' }}
            </button> -->
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button class="text-gray-600 hover:text-blue-500 p-2 rounded-lg hover:bg-gray-100">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [],
})
export class NavbarComponent {
  headerMenu: { name: string; route: string }[] = [
    { name: 'Início', route: '/' },
    { name: 'Categorias', route: '' },
    { name: 'Sobre', route: '' },
    { name: 'Contato', route: '' },
  ];

  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
