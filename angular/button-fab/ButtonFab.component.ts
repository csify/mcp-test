import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-fab',
  templateUrl: './ButtonFab.component.html',
  styleUrls: ['./ButtonFab.component.css']
})
export class ButtonFabComponent {
  @Input() iconSrc!: string;
  @Input() label?: string;
  @Input() size: 'md' | 'lg' = 'lg';
  @Input() interactionState: 'default' | 'hover' | 'focus' | 'focus-visible' | 'pressed' | 'disabled' = 'default';
  @Input() semanticState: 'default' | 'destructive' | 'disabled' | 'remotecontrol' = 'default';
}
