import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'layout-container' }
})
export class LayoutContainerComponent {
  @Input() menuList: any[];
}
