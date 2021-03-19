import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'layout-container' }
})
export class LayoutContainerComponent implements OnInit {
  mainMenuList = [{
      label: 'Geleneler',
      link: '/mail/inbox'
    }, {
      label: 'Gonderilenler',
      link: '/mail/send'
    }, {
      label: 'Cop Kutusu',
      link: '/mail/trash'
    }
  ]
  constructor() { }

  ngOnInit() {}

}
