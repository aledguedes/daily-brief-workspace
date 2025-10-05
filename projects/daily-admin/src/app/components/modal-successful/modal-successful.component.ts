import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-successful',
  imports: [],
  templateUrl: './modal-successful.component.html',
  styleUrl: './modal-successful.component.scss',
})
export class ModalSuccessfulComponent {
  @Output() controlModal = new EventEmitter<boolean>();
}
