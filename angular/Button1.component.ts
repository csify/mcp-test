import { Component, Input } from '@angular/core';

// Image-Assets wie in React-Version
const img = "http://localhost:3845/assets/d59c1271f22b1f3af5fcc4266bafee367552852c.svg";
const img1 = "http://localhost:3845/assets/7c33596b35d3d044fac9eab224d324277a7cb2fd.svg";
const img2 = "http://localhost:3845/assets/6d3c5bc1e13ae5b6244a9bf5d51247ccc15f3b76.svg";
const img3 = "http://localhost:3845/assets/58dbbfb28cf56bb432bc5af265b03bb15e69929b.svg";

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.css']
})
export class Button1Component {
  @Input() hasIcon: boolean = true;
  @Input() hasLabel: boolean = true;
  @Input() hasMenu: boolean = false;
  @Input() type: 'Primary' | 'Secondary' | 'Tertiary' | 'Inline' = 'Primary';
  @Input() size: 'md' | 'lg' = 'lg';
  @Input() interactionState: 'Default' | 'Hover' | 'Selected' | 'Focus' = 'Default';
  @Input() semanticState: 'Default' | 'Destructive' | 'Disabled' | 'RemoteControl' = 'Default';

  img = img;
  img1 = img1;
  img2 = img2;
  img3 = img3;
}
