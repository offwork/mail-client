import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab-title',
  template: `
    <div class="tab-title" (click)="handleClick()">
      <div class="title-wrap">
        <mat-icon>{{icon}}</mat-icon> <ng-content></ng-content>
      </div> 
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

  @Input() icon: string;

  handleClick() {
    this.tabSelected.emit(this);
  }
}
