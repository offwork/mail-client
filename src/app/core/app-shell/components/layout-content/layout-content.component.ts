import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout-content',
  templateUrl: './layout-content.component.html',
  styleUrls: ['./layout-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'layout-content' }
})
export class LayoutContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
