import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabContentComponent } from './tab-content.component';
import { TabTitleComponent } from './tab-title.component';
import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [TabContentComponent, TabTitleComponent, TabsComponent],
  exports: [TabContentComponent, TabTitleComponent, TabsComponent],
  imports: [CommonModule],
})
export class TabsModule {}
