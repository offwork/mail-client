import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'app-trash-container' }
})
export class TrashContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
