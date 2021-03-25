import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { pipe, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutServices } from '../services/layout.service';

@Component({
  selector: 'app-layout-content',
  templateUrl: './layout-content.component.html',
  styleUrls: ['./layout-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'layout-content' }
})
export class LayoutContentComponent implements OnInit, OnDestroy {

  // menuList: any[] = [];
  // _endSubcription = new Subject<boolean>();

  constructor(public layoutService: LayoutServices) { }

  ngOnInit() {
    /* this._layoutService.getMainMenuList()
      .pipe(takeUntil(this._endSubcription))
      .subscribe((list) => {
        this.menuList = list;
      }) */
  }

  ngOnDestroy() {
    /* this._endSubcription.next(true);
    this._endSubcription.complete(); */
  }
}
