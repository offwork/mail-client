import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../models/user-response.model';
import { InboxService } from '../services/inbox.service';

@Component({
  selector: 'app-inbox-container',
  templateUrl: './inbox-container.component.html',
  styleUrls: ['./inbox-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'app-inbox-container' }
})
export class InboxContainerComponent implements OnDestroy, OnInit {
  _endSubcription = new Subject<boolean>();

  columnDefs: string[] = [];
  rowDdata: User[] = [];

  toggled = false;

  constructor( private service: InboxService ) { }

  tabChanged(tab) {
    console.log(tab);
  }

  ngOnInit() {
    this.service.allUsers$
      .pipe(takeUntil(this._endSubcription))
      .subscribe((response) => {
        this.rowDdata = response.data;
        this.columnDefs = Object.keys(response.data[0])
          .map((key) => key.toUpperCase());
      });
  }

  ngOnDestroy() {
    this._endSubcription.next(true);
    this._endSubcription.complete();
  }
}
