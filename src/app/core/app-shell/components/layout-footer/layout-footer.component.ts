import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'layout-footer' }
})
export class LayoutFooterComponent {}
