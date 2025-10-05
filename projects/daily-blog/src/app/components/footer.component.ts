import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ICategory } from '../model/category.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-gray-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div
                class="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center"
              >
                <!-- Icon here -->
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold">BailyBrief BLOG</h3>
            </div>
            <p class="text-gray-400 mb-6 max-w-md">
              Seu destino para conteúdo de qualidade sobre tecnologia, programação e inteligência
              artificial. Feito por desenvolvedores, para desenvolvedores.
            </p>
            <div class="flex space-x-4">
              @for (link of socialLinks; track $index) {
                <a
                  [routerLink]="link.url"
                  class="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path [attr.d]="link.icon"></path>
                  </svg>
                </a>
              }
            </div>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Navegação</h4>
            <ul class="space-y-3">
              @for (link of navigationLinks; track $index) {
                <li>
                  <a
                    [routerLink]="link.url"
                    class="text-gray-400 hover:text-white transition-colors"
                    >{{ link.name }}</a
                  >
                </li>
              }
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Categorias</h4>
            <ul class="space-y-3">
              @for (link of categoryLinks; track $index) {
                <li>
                  <a
                    [routerLink]="link.url"
                    class="text-gray-400 hover:text-white transition-colors"
                    >{{ link.name }}</a
                  >
                </li>
              }
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-sm">© 2025 TechAI Blog. Todos os direitos reservados.</p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              @for (link of categoryLinks; track $index) {
                <a
                  [routerLink]="link.url"
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                  >{{ link.name }}</a
                >
              }
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .bg-background {
        background-color: hsl(var(--background));
      }
      .text-muted-foreground {
        color: hsl(var(--muted-foreground));
      }
      .text-foreground {
        color: hsl(var(--foreground));
      }
      .hover\\:text-foreground:hover {
        color: hsl(var(--foreground));
      }
    `,
  ],
})
export class FooterComponent {
  categories: ICategory[] = [];
  socialLinks = [
    { platform: 'Twitter', url: '#', icon: 'twitter-icon-path' },
    { platform: 'Facebook', url: '#', icon: 'facebook-icon-path' },
    { platform: 'GitHub', url: '#', icon: 'github-icon-path' },
    { platform: 'Instagram', url: '#', icon: 'instagram-icon-path' },
  ];

  navigationLinks = [
    { name: 'Início', url: '#' },
    { name: 'Artigos', url: '#' },
    { name: 'Tutoriais', url: '#' },
    { name: 'Sobre', url: '#' },
    { name: 'Contato', url: '#' },
  ];

  categoryLinks = [
    { name: 'Inteligência Artificial', url: '#' },
    { name: 'JavaScript & TypeScript', url: '#' },
    { name: 'Python & Machine Learning', url: '#' },
    { name: 'DevOps & Cloud', url: '#' },
    { name: 'Segurança', url: '#' },
  ];

  legalLinks = [
    { name: 'Política de Privacidade', url: '#' },
    { name: 'Termos de Uso', url: '#' },
    { name: 'RSS', url: '#' },
  ];
}
