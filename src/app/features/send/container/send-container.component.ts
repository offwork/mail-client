import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-send-container',
  templateUrl: './send-container.component.html',
  styleUrls: ['./send-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'app-send-container' }
})
export class SendContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
