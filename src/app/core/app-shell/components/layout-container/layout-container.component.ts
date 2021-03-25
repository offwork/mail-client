import { AfterViewInit, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'layout-container' }
})
export class LayoutContainerComponent implements AfterViewInit {
  @Input() menuList: any[];
  @Input() toggled: Observable<boolean>;

  @ViewChild(MatDrawer, { static: false }) drawer: MatDrawer;

  ngAfterViewInit() {
    this.toggled.pipe().subscribe((isOpen) => {
      this.drawer.toggle(isOpen);
    });
  }
}
