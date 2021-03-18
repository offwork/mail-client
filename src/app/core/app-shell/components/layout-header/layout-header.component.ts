import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'layout-header' }
})
export class LayoutHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
