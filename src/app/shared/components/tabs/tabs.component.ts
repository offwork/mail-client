import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
} from '@angular/core';
import { TabContentComponent } from './tab-content.component';
import { TabTitleComponent } from './tab-title.component';

@Component({
  selector: 'app-tabs',
  template: `
    <div class="tab">
      <div class="tab-nav">
        <ng-content select="app-tab-title"></ng-content>
      </div>
      <ng-content select="app-tab-content"></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
      }
      .tab {
        flex: 1 1 100%;
      }
      .tab-nav {
        border: 1px solid rgba(0, 0, 0, 0.2);
        width: 100%;
        background: #eee;
      }
    `,
  ],
})
export class TabsComponent implements AfterContentInit {
  @Output('changed')
  tabChanged: EventEmitter<number> = new EventEmitter<number>();

  @ContentChildren(TabTitleComponent) tabTitles: QueryList<TabTitleComponent>;

  @ContentChildren(TabContentComponent)
  tabContents: QueryList<TabContentComponent>;

  active: number;

  select(index: number) {
    let contents: TabContentComponent[] = this.tabContents.toArray();
    contents[this.active].isActive = false;
    this.active = index;
    contents[this.active].isActive = true;
    this.tabChanged.emit(index);
  }

  ngAfterContentInit() {
    this.tabTitles
      .map((t) => t.tabSelected)
      .forEach((t, i) => {
        t.subscribe((_) => {
          this.select(i);
        });
      });
    this.active = 0;
    this.select(0);
  }
}
