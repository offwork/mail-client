import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tab-title',
  template: `
    <div class="tab-title" (click)="handleClick()">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .tab-title {
        display: inline-block;
        cursor: pointer;
        padding: 8px;
        border-left: 1px solid rgba(0, 0, 0, 0.2);
        border-right: 1px solid rgba(0, 0, 0, 0.2);
      }
    `,
  ],
})
export class TabTitleComponent {
  @Output('selected')
  tabSelected: EventEmitter<TabTitleComponent> = new EventEmitter<TabTitleComponent>();

  handleClick() {
    this.tabSelected.emit(this);
  }
}
