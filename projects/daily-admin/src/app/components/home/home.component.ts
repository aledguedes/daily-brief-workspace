import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent],
  template: `
    <!-- Header -->
    <app-header (closeRequest)="toggleSidebar()" />

    <!-- Overlay para mobile: só aparece se sidebar estiver aberta em telas pequenas -->
    @if (sidebarOpen() && !isDesktopView) {
      <div
        class="md:hidden fixed top-16 left-0 right-0 bottom-0 z-30
           bg-gray-100/30 backdrop-blur-sm backdrop-brightness-95
           transition-opacity duration-300 delay-100 opacity-100"
        (click)="toggleSidebar(false)"
      ></div>
    }

    <!-- Main Layout -->
    <div class="flex flex-col md:flex-row min-h-screen pt-16">
      <!-- Sidebar -->
      <div
        class="fixed md:static top-16 md:top-0 left-0 transform transition-transform duration-300 ease-in-out z-40 bg-white shadow-md md:rounded-r-xl w-80"
        [class.-translate-x-full]="!sidebarOpen()"
        [class.translate-x-0]="sidebarOpen()"
      >
        <app-sidebar [isOpen]="sidebarOpen()" (closeRequest)="toggleSidebar()" />
      </div>

      <!-- Main Content -->
      <main class="flex-1 transition-all duration-300 ease-in-out p-6">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [
    `
      @keyframes fadeInOverlay {
        0% {
          opacity: 0;
          pointer-events: none;
        }
        30% {
          opacity: 0;
          pointer-events: none;
        }
        100% {
          opacity: 1;
          pointer-events: auto;
        }
      }

      .animate-fade-in {
        animation: fadeInOverlay 0.5s ease-out forwards;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  sidebarOpen = signal(true);
  showOverlay = signal(false);
  isDesktopView = false;

  ngOnInit(): void {
    this.setInitialSidebarState();
    this.setupResizeListener();
  }

  toggleSidebar(forceState?: boolean) {
    const isOpening = forceState !== undefined ? forceState : !this.sidebarOpen();

    this.sidebarOpen.set(isOpening);

    if (isOpening) {
      // Se abrindo, mostra overlay imediatamente
      this.showOverlay.set(true);
    } else {
      // Se fechando, espera a animação da sidebar terminar (300ms)
      setTimeout(() => {
        this.showOverlay.set(false);
      }, 300);
    }
  }

  private setInitialSidebarState() {
    this.isDesktopView = window.matchMedia('(min-width: 768px)').matches;
    this.sidebarOpen.set(this.isDesktopView);
    this.showOverlay.set(!this.isDesktopView); // exibe overlay apenas em mobile, se estiver aberta
  }

  private setupResizeListener() {
    window.addEventListener('resize', () => {
      const isDesktop = window.matchMedia('(min-width: 768px)').matches;
      if (isDesktop !== this.isDesktopView) {
        this.isDesktopView = isDesktop;
        this.sidebarOpen.set(isDesktop);
        this.showOverlay.set(!isDesktop && isDesktop !== this.isDesktopView);
      }
    });
  }
}
