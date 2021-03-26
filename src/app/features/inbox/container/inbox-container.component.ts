import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InboxService } from '../services/inbox.service';

@Component({
  selector: 'app-inbox-container',
  templateUrl: './inbox-container.component.html',
  styleUrls: ['./inbox-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'app-inbox-container' }
})
export class InboxContainerComponent implements OnInit {

  constructor( private service: InboxService ) { }

  ngOnInit(): void {
    this.service.allUsers$.subscribe(console.log);
  }

}
