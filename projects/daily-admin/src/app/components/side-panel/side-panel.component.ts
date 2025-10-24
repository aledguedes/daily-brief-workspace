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
import { IRawMaterial, IRawMaterialByMaterialIds } from '../../model/raw_materials';
import { AutomationService } from '../../services/automation.service';

@Component({
  selector: 'app-side-panel',
  imports: [CommonModule],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
})
export class SidePanelComponent {
  @Input() article: IRawMaterial = {
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
  @Input() isOpen = false;
  @Output() closePanel = new EventEmitter<void>();
  @Output() flowAction = new EventEmitter<{ action: string; id: string }>();

  panelClass = '';
  statusColor = '';
  statusLabel = '';
  currentValue: string = '';
  activeTab = 'tab-details';
  tagColorMap: Record<string, string> = {};

  showTextArea: boolean = false;

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
      // Garante que a aba inicial seja 'tab-details' ao abrir o painel
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

    this.automationService.getRawMaterialById(raw).subscribe((data) => {
      console.log('Clicked raw material:', raw, data);
      this.currentValue = data.raw_content;
    });
  }
}
