import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      type="button"
      class="btn btn-{{type}}"
      [class.btn-hover]="interactionState === 'hover'"
      [class.btn-focus]="interactionState === 'focus'"
      [class.btn-selected]="interactionState === 'selected'"
      [class.btn-disabled]="disabled"
      [disabled]="disabled"
      (click)="onClick.emit($event)"
    >
      <span *ngIf="icon" class="btn-icon">{{ icon }}</span>
      {{ label }}
    </button>
  `,
  styleUrls: ['./button.css']
})
export class ButtonComponent {
  @Input() type: 'primary' | 'secondary' | 'destructive' | 'remotecontrol' = 'primary';
  @Input() interactionState?: 'hover' | 'focus' | 'selected';
  @Input() disabled = false;
  @Input() icon?: string;
  @Input() label?: string;
  @Output() onClick = new EventEmitter<Event>();
}
