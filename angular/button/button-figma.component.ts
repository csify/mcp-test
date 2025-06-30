import { Component, Input } from '@angular/core';

@Component({
  selector: 'mds-button-figma',
  template: `
    <button
      [ngClass]="[
        'figma-btn',
        'figma-btn-' + type.toLowerCase(),
        'figma-btn-' + size,
        'figma-btn-' + interactionState.toLowerCase(),
        'figma-btn-' + semanticState.toLowerCase()
      ]"
      [disabled]="semanticState === 'Disabled'"
      type="button"
    >
      <span *ngIf="hasIcon" class="figma-btn-icon" [style.marginRight]="hasLabel ? '5px' : '0'"></span>
      <span *ngIf="hasLabel">{{ label }}</span>
    </button>
  `,
  styleUrls: ['./button-figma.component.css']
})
export class ButtonFigmaComponent {
  @Input() hasIcon = true;
  @Input() hasLabel = true;
  @Input() hasMenu = false;
  @Input() type: 'Primary' | 'Secondary' | 'Tertiary' | 'Inline' = 'Primary';
  @Input() size: 'md' | 'lg' = 'lg';
  @Input() interactionState: 'Default' | 'Hover' | 'Selected' | 'Focus' = 'Default';
  @Input() semanticState: 'Default' | 'Destructive' | 'Disabled' | 'RemoteControl' = 'Default';
  @Input() label = "A button's text";
}
