// floating-panel.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-panel',
  template: `<div class="panel">I'm a floating panel!</div>`,
  styles: [`.panel { background: white; border: 1px solid #ccc; padding: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }`]
})
export class FloatingPanelComponent {}
