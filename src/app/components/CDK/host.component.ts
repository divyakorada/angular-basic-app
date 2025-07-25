// app.component.ts
import { Component, Injector } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FloatingPanelComponent } from './floating-panel.component';

@Component({
  selector: 'app-cdk',
  template: `<button (click)="openPanel()">Open Overlay</button>`
})
export class AppCdkComponent {
  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay, private injector: Injector) {}

  openPanel() {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo({x: 200, y: 200})
      .withPositions([{ originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'top' }]);

    this.overlayRef = this.overlay.create({ positionStrategy });

    const portal = new ComponentPortal(FloatingPanelComponent, null, this.injector);
    this.overlayRef.attach(portal);
  }
}
