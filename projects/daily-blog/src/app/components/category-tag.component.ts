import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICategory } from '../model/category.model';

@Component({
  selector: 'app-category-tag',
  standalone: true,
  template: `
    <button
      [class]="'bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg'"
      (click)="onClick()"
    >
      {{ category }}
    </button>
  `,
  styles: [
    `
      :host {
        display: inline-block;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
      }
    `,
  ],
})
export class CategoryTagComponent {
  // @Input() category!: ICategory;
  @Input() category: string = '';
  @Input() active: boolean = false;
  @Output() selected = new EventEmitter<string>();
  // @Output() selected = new EventEmitter<ICategory>();

  onClick() {
    this.selected.emit(this.category);
  }
}
