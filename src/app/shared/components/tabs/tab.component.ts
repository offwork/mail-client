import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .pane{
        padding: 1em;
      }
    `
  ]
})
export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;
}
