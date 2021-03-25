import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-inbox-container',
  templateUrl: './inbox-container.component.html',
  styleUrls: ['./inbox-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'app-inbox-container' }
})
export class InboxContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
