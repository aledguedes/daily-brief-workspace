import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidePanelComponent } from '../../../../components/side-panel/side-panel.component';
import { IRawMaterial } from '../../../../model/raw_materials';
import { ArticleCardAutomationComponent } from '../../../../components/article-card-automation/article-card-automation.component';
import { AutomationService } from '../../../../services/automation.service';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, ArticleCardAutomationComponent, SidePanelComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  private renderer = inject(Renderer2);
  private automationService = inject(AutomationService);

  selectedArticle: IRawMaterial = {
    theme: '',
    user_id: '',
    task_id: '',
    status: {
      id: 0,
      name: '',
      display_name: '',
      bg_class: '',
      text_class: '',
    },
    created_at: '',
    updated_at: '',
    content_type: '',
    generated_content: '',
    raw_material_ids: [],
    automation_request_id: '',
    suggested_image_prompt: '',
  };
  panelOpen: boolean = false;
  recentPosts: IRawMaterial[] = [];

  filters = [
    { id: 'all', label: 'Todos', active: true },
    { id: 'completed', label: 'Concluídos', active: false },
    { id: 'progress', label: 'Em Progresso', active: false },
  ];

  ngOnInit(): void {
    this.getAllRawMaterials();
  }

  getAllRawMaterials() {
    this.automationService.listAllMaterials().subscribe({
      next: (response) => {
        console.log('LIST ALL MATERIALS:', response);

        this.recentPosts = response;
      },
      error: (error) => {
        console.error('Error fetching raw materials:', error);
      },
    });
  }

  setActiveFilter(filterId: string): void {
    this.filters = this.filters.map((filter) => ({
      ...filter,
      active: filter.id === filterId,
    }));
  }

  openSidePanel(taskId: string): void {
    const articleData = this.recentPosts.filter((article) => article.task_id === taskId)[0];
    if (articleData) {
      this.selectedArticle = articleData;
      this.panelOpen = true;
      // Em Angular, podemos controlar o overflow do body via DOM ou Renderer2,
      // mas para simplicidade neste passo, o CSS pode ajudar.
      this.renderer.addClass(document.body, 'no-scroll');
      console.log('Added no-scroll to body:', document.body.classList.contains('no-scroll')); // Log para depuração
    }
  }

  // Função placeholder para fechar o painel lateral
  closeSidePanel(): void {
    this.panelOpen = false;
    this.selectedArticle = {
      theme: '',
      user_id: '',
      task_id: '',
      status: {
        id: 0,
        name: '',
        display_name: '',
        bg_class: '',
        text_class: '',
      },
      created_at: '',
      updated_at: '',
      content_type: '',
      generated_content: '',
      raw_material_ids: [],
      automation_request_id: '',
      suggested_image_prompt: '',
    };
    // Remove a classe 'no-scroll' do <body>
    this.renderer.removeClass(document.body, 'no-scroll');
    console.log('Removed no-scroll from body:', !document.body.classList.contains('no-scroll')); // Log para depuração
  }
}
