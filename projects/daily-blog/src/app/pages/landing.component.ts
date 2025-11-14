import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-white">
      <!-- Navigation -->
      <header class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex items-center space-x-2">
              <svg class="w-8 h-8 text-[var(--mint-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="2" stroke-width="2"/>
                <circle cx="5" cy="12" r="2" stroke-width="2"/>
                <circle cx="19" cy="12" r="2" stroke-width="2"/>
                <circle cx="12" cy="19" r="2" stroke-width="2"/>
                <line x1="12" y1="7" x2="12" y2="17" stroke-width="2"/>
                <line x1="7" y1="12" x2="17" y2="12" stroke-width="2"/>
              </svg>
              <span class="text-xl font-bold text-gray-900" style="font-family: 'Poppins', sans-serif;">TechBlog</span>
            </div>

            <!-- Navigation Menu -->
            <nav class="hidden md:flex items-center space-x-8">
              <a href="#" class="text-gray-700 hover:text-gray-900 font-medium transition-colors">Desenvolvimento</a>
              <a href="#" class="text-gray-700 hover:text-gray-900 font-medium transition-colors">Inteligência Artificial</a>
              <a href="#" class="text-gray-700 hover:text-gray-900 font-medium transition-colors">Segurança</a>
            </nav>

            <!-- Search & Social -->
            <div class="flex items-center space-x-4">
              <div class="relative hidden lg:block">
                <input
                  type="text"
                  placeholder="Buscar..."
                  class="w-64 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--mint-green)]/20 focus:border-[var(--mint-green)] transition-all text-sm"
                />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <a href="#" class="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </a>
                <a href="#" class="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" class="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="pt-24 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200 to-[var(--bg-dark)]"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div class="max-w-3xl">
            <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style="font-family: 'Poppins', sans-serif;">
              O Futuro da Inteligência Artificial: Tendências e Previsões para a Próxima Década
            </h1>
            <p class="text-lg text-gray-200 mb-8 leading-relaxed">
              Explore como a IA está moldando nosso mundo, desde avanços em machine learning até as implicações éticas da automação.
            </p>
            <button class="bg-[var(--mint-green)] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[var(--mint-accent)] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Leia mais
            </button>
          </div>
          <!-- Placeholder Image Icon -->
          <div class="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block opacity-20">
            <svg class="w-64 h-64 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
        </div>
      </section>

      <!-- Featured Articles Section -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-bold text-gray-900 mb-8" style="font-family: 'Poppins', sans-serif;">
            Artigos em Destaque
          </h2>

          <!-- Filter Tabs -->
          <div class="flex space-x-2 mb-12 overflow-x-auto pb-2">
            @for (tab of filterTabs; track $index) {
              <button
                (click)="activeTab = tab"
                [class]="activeTab === tab 
                  ? 'bg-[var(--mint-green)] text-gray-900' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
                class="px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap"
              >
                {{ tab }}
              </button>
            }
          </div>

          <!-- Articles Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Large Featured Card -->
            <div class="lg:row-span-2 group cursor-pointer">
              <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div class="relative h-80 overflow-hidden">
                  <img
                    [src]="articles[0].image"
                    [alt]="articles[0].imageAlt"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="p-8">
                  <span class="inline-block bg-[var(--mint-green)] text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {{ articles[0].category }}
                  </span>
                  <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[var(--mint-accent)] transition-colors" style="font-family: 'Poppins', sans-serif;">
                    {{ articles[0].title }}
                  </h3>
                  <p class="text-gray-600 mb-4 leading-relaxed">
                    {{ articles[0].excerpt }}
                  </p>
                  <div class="text-sm text-gray-500">
                    {{ articles[0].date }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Smaller Cards -->
            @for (article of articles.slice(1); track $index) {
              <div class="group cursor-pointer">
                <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div class="relative h-48 overflow-hidden">
                    <img
                      [src]="article.image"
                      [alt]="article.imageAlt"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--mint-accent)] transition-colors" style="font-family: 'Poppins', sans-serif;">
                      {{ article.title }}
                    </h3>
                    <div class="text-sm text-gray-500">
                      {{ article.date }}
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-50 border-t border-gray-200 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <!-- Brand -->
            <div>
              <div class="flex items-center space-x-2 mb-4">
                <svg class="w-8 h-8 text-[var(--mint-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="5" r="2" stroke-width="2"/>
                  <circle cx="5" cy="12" r="2" stroke-width="2"/>
                  <circle cx="19" cy="12" r="2" stroke-width="2"/>
                  <circle cx="12" cy="19" r="2" stroke-width="2"/>
                  <line x1="12" y1="7" x2="12" y2="17" stroke-width="2"/>
                  <line x1="7" y1="12" x2="17" y2="12" stroke-width="2"/>
                </svg>
                <span class="text-xl font-bold text-gray-900" style="font-family: 'Poppins', sans-serif;">TechBlog</span>
              </div>
              <p class="text-gray-600 text-sm leading-relaxed">
                Explorando o futuro da tecnologia, um artigo de cada vez. Junte-se a nós para insights sobre desenvolvimento, IA e segurança.
              </p>
            </div>

            <!-- Links -->
            <div>
              <h4 class="font-semibold text-gray-900 mb-4" style="font-family: 'Poppins', sans-serif;">Links Úteis</h4>
              <ul class="space-y-2">
                @for (link of footerLinks; track $index) {
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      {{ link }}
                    </a>
                  </li>
                }
              </ul>
            </div>

            <!-- Social -->
            <div>
              <h4 class="font-semibold text-gray-900 mb-4" style="font-family: 'Poppins', sans-serif;">Siga-nos</h4>
              <div class="flex space-x-4">
                <a href="#" class="p-3 bg-white rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all shadow-sm">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </a>
                <a href="#" class="p-3 bg-white rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all shadow-sm">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" class="p-3 bg-white rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all shadow-sm">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 mt-12 pt-8 text-center">
            <p class="text-gray-500 text-sm">
              © 2024 TechBlog. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
})
export class LandingComponent {
  activeTab = 'Todos';
  
  filterTabs = ['Todos', 'Desenvolvimento', 'IA', 'Segurança'];
  
  articles = [
    {
      title: 'Construindo Aplicações Web Modernas com React e Next.js',
      excerpt: 'Um guia completo para iniciar no desenvolvimento de aplicações web reativas e otimizadas para SEO com as tecnologias mais populares do mercado.',
      category: 'Desenvolvimento',
      date: '15 de Julho, 2024',
      image: 'https://images.unsplash.com/photo-1758549885116-c8bd6bc619e8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxjaXJjdWl0JTIwYm9hcmQlMjBtaWNyb2NoaXAlMjBlbGVjdHJvbmljcyUyMHRlY2hub2xvZ3l8ZW58MHwwfHx8MTc2Mjk0ODg4M3ww&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Close-up of electronic circuit board - He Junhui on Unsplash'
    },
    {
      title: 'A Revolução dos Modelos de Linguagem',
      excerpt: '',
      category: 'IA',
      date: '12 de Julho, 2024',
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGlnaXRhbCUyMGJyYWluJTIwcm9ib3QlMjBoYW5kJTIwdGVjaG5vbG9neXxlbnwwfDB8fGJsdWV8MTc2Mjk0ODg4M3ww&ixlib=rb-4.1.0&q=85',
      imageAlt: 'AI technology concept - ZHENYU LUO on Unsplash'
    },
    {
      title: 'Cibersegurança: Protegendo Seus Dados na Nuvem',
      excerpt: '',
      category: 'Segurança',
      date: '10 de Julho, 2024',
      image: 'https://images.unsplash.com/photo-1555529902-5261145633bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5JTIwZGlnaXRhbCUyMGxvY2slMjBzZWN1cml0eSUyMHRlY2hub2xvZ3l8ZW58MHwwfHxibHVlfDE3NjI5NDg4ODN8MA&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Digital security padlock - Muhammad Zaqy Al Fattah on Unsplash'
    }
  ];

  footerLinks = [
    'Sobre',
    'Contato',
    'Política de Privacidade',
    'Termos de Serviço'
  ];
}