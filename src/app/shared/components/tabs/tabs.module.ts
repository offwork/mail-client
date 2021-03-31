import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabContentComponent } from './tab-content.component';
import { TabTitleComponent } from './tab-title.component';
import { TabsComponent } from './tabs.component';
import { TabContentDirective } from './tab-content.directive';
import { DesignModule } from '../../design/design.module';

@NgModule({
  declarations: [TabContentComponent, TabTitleComponent, TabsComponent, TabContentDirective],
  exports: [TabContentComponent, TabTitleComponent, TabsComponent, TabContentDirective],
  imports: [CommonModule, DesignModule],
})
export class TabsModule {}
