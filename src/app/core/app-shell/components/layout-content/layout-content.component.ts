import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Profile } from 'src/app/core/auth/models/pofile';
import { LayoutServices } from '../services/layout.service';

@Component({
  selector: 'app-layout-content',
  templateUrl: './layout-content.component.html',
  styleUrls: ['./layout-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'layout-content' }
})
export class LayoutContentComponent implements OnInit, OnDestroy {
  profile: Profile
  _toggle = new BehaviorSubject<boolean>(false);
  toggle$ = this._toggle.asObservable();
  isToggle = false;

  constructor(public layoutService: LayoutServices, private _activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.profile = new Profile(this._activatedRoute.snapshot.data.profile);
  }

  toggle() {
    this.isToggle = !this.isToggle;
    this._toggle.next(this.isToggle);
  }

  ngOnDestroy() {
    /* this._endSubcription.next(true);
    this._endSubcription.complete(); */
  }
}
