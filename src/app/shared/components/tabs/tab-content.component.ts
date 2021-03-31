import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tab-content',
  template: `
    <div class="tab-content" [ngClass]="{'toggled': toggle }" [hidden]="!isActive">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .tab-content {
        border: 1px solid #ccc;
        border-top: none;
        padding: 5px;
      }
      .toggled {
        background-color: #eeffcb;
      }
    `,
  ],
})
export class TabContentComponent {
  isActive: boolean = false;
  @Input() toggle = false;
}
