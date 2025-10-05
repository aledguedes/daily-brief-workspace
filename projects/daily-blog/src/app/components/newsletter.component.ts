import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section class="relative bg-gradient-to-br from-gray-50 to-blue-50/30 py-20 overflow-hidden">
      <div class="absolute inset-0"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          class="inline-flex items-center px-4 py-2 bg-blue-100 backdrop-blur-sm rounded-full text-sm font-medium text-blue-400 mb-6 border border-blue-200"
        >
          📧 Newsletter Semanal
        </div>
        <h2 class="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Fique por Dentro das Novidades
        </h2>
        <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
          Receba os melhores artigos sobre tecnologia e IA diretamente no seu email.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="seu@email.com"
            class="flex-1 px-5 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue bg-white text-gray-900 placeholder-gray-400 transition-all duration-300 text-sm font-medium shadow-sm focus:shadow-md"
          />
          <button
            class="group px-6 py-2.5 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 whitespace-nowrap text-sm tracking-wide"
          >
            <span class="group-hover:scale-105 transition-transform inline-block"
              >Inscrever-se</span
            >
          </button>
        </div>
        <p class="text-gray-500 text-sm mt-4">
          ✓ Sem spam • ✓ Cancelar a qualquer momento • ✓ Conteúdo exclusivo
        </p>
      </div>
    </section>
  `,
})
export class NewsletterComponent {
  email: string = '';
}
