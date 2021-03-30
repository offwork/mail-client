import { AfterContentInit, Component, ContentChild, ContentChildren, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { TabDirective } from '@shared/directives/tab.directive';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <ng-container *ngTemplateOutlet="tabsTemplate">
      <ul class="nav nav-tabs">
        <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
          <a href="#"></a>
        </li>
      </ul>
      <ng-content></ng-content>
    </ng-container>
    <ng-template #emptyTemplate></ng-template>
  `,
  styles: [
    `
      .tab-close {
        color: gray;
        text-align: right;
        cursor: pointer;
      }
    `
  ],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ContentChild(TabDirective) tabDirective: TabDirective;
  @ViewChild('emptyTemplate', { static: true }) emptyTemplate: any;


  templateContext = {
    selectTab: (tab) => {}
  };

  get tabsTemplate(): TemplateRef<any> {
    return this.tabDirective && this.tabDirective.template || this.emptyTemplate;
  }

  ngAfterContentInit() {
    const activeTabs = this.tabs.toArray().filter((tab)=>tab.active);
    if(activeTabs.length === 0) {
      this.templateContext.selectTab = this.selectTab.bind(this.selectTab, this.tabs.first);
    }
  }

  selectTab(tab: any){
    this.tabs.toArray().forEach(tab => tab.active = false);    
    tab.active = true;
  }
}
