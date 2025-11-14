import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRawMaterial } from '../../model/raw_materials';
import { CommonModule } from '@angular/common';
import { contentTypes } from '../../utils/contentTypes';
import { IContentTypes } from '../../model/contentType.model';

@Component({
  selector: 'app-task-edit-infos',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-edit-infos.component.html',
  styleUrl: './task-edit-infos.component.scss',
})
export class TaskEditInfosComponent {
  @Input({ required: true }) task: IRawMaterial = {
    taskId: '',
    userId: '',
    theme: null,
    contentType: null,
    suggestedImagePrompt: null,
    createdAt: '',
    updatedAt: '',
    sourceMaterials: [],
    status: {
      id: 0,
      name: '',
      displayName: '',
      bgClass: '',
      textClass: '',
    },
  };

  typesFormat: IContentTypes[] = contentTypes;

  removeSourceUrl(index: number) {
    // this.task.sourceUrls.splice(index, 1);
  }

  addSourceUrl() {
    // this.task.sourceUrls.push('');
  }
}
