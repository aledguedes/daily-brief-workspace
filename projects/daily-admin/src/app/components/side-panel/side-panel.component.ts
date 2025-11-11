import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IRawMaterial, IRawMaterialByMaterialIds, IRawMaterialId } from '../../model/raw_materials';
import { AutomationService } from '../../services/automation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-side-panel',
  imports: [CommonModule, FormsModule],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
})
export class SidePanelComponent {
  @Input() article: IRawMaterial = {
    taskId: '',
    userId: '',
    theme: null,
    contentType: null,
    rawMaterialIds: [],
    suggestedImagePrompt: null,
    createdAt: '',
    updatedAt: '',
    sourceUrls: [],
    status: {
      id: 0,
      name: '',
      displayName: '',
      bgClass: '',
      textClass: '',
    },
  };
  @Input() isOpen = false;
  @Output() closePanel = new EventEmitter<void>();
  @Output() flowAction = new EventEmitter<{ action: string; id: string }>();

  panelClass = '';
  statusColor = '';
  statusLabel = '';
  currentRawMaterial: {
    content: string;
    rawMaterialId: string;
  } = {
    content: '',
    rawMaterialId: '',
  };
  activeTab = 'tab-details';
  tagColorMap: Record<string, string> = {};

  showTextArea: boolean = false;
  isUpdatingRawMaterial: boolean = false;

  tabs = [
    { id: 'tab-details', label: 'Conteúdo & Detalhes' },
    { id: 'tab-raw', label: 'Dados Brutos' },
    { id: 'tab-logs', label: 'Histórico & Logs' },
  ];

  rawMaterialsById: IRawMaterialByMaterialIds[] = [];

  private automationService = inject(AutomationService);

  ngOnChanges(changes: SimpleChanges): void {
    console.log('this.article', this.article);
    if (changes['isOpen']) {
      this.panelClass = this.isOpen
        ? 'translate-x-0 opacity-100'
        : 'translate-x-full opacity-0 pointer-events-none';
      if (this.isOpen) {
        this.activeTab = 'tab-details';
      }
    }
  }

  onClose(): void {
    this.closePanel.emit();
    // Reseta a aba ativa ao fechar o painel
    this.activeTab = 'tab-details';
  }

  setActiveTab(tab: string): void {
    this.showTextArea = false;
    this.activeTab = tab;
  }

  handleFlowAction(action: string, id?: string): void {
    if (id !== undefined) {
      this.flowAction.emit({ action, id });
    }
  }

  handleClick(raw: string): void {
    this.showTextArea = true;

    this.automationService.getRawMaterialById(raw).subscribe({
      next: (data: IRawMaterialId) => {
        console.log('Clicked raw material:', raw, data);
        this.currentRawMaterial = {
          content: data.content.replace(/\\n/g, '\n') || '',
          rawMaterialId: raw,
        };
      },
      error: (err) => {
        console.error('Error fetching raw material:', err);
      },
    });
  }

  updateRawMaterials(): void {
    this.isUpdatingRawMaterial = true;
    
    const materialUpdate = {
      content: this.currentRawMaterial.content,
    };
    console.log('materialUpdate', materialUpdate);
    
    this.automationService
      .updateRawMaterialById(this.currentRawMaterial.rawMaterialId, materialUpdate)
      .subscribe({
        next: (data: IRawMaterialId) => {
          console.log('Updated raw material:', data);
          this.handleFlowAction('refresh_raw_materials', this.currentRawMaterial.rawMaterialId);
          
          // Após 3 segundos, mudar para a primeira tab
          setTimeout(() => {
            this.setActiveTab('tab-details');
            this.isUpdatingRawMaterial = false;
          }, 3000);
        },
        error: (err) => {
          console.error('Error updating raw material:', err);
          this.isUpdatingRawMaterial = false;
        },
      });
  }
}
