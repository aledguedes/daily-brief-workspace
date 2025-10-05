import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-post-create',
  imports: [],
  templateUrl: './modal-post-create.component.html',
  styleUrl: './modal-post-create.component.scss',
})
export class ModalPostCreateComponent {
  @Output() controlModal = new EventEmitter<boolean>();
}
