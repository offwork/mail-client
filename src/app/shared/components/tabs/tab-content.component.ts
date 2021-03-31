import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  template: `
    <div class="tab-content" [hidden]="!isActive">
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
    `,
  ],
})
export class TabContentComponent {
  isActive: boolean = false;
}
