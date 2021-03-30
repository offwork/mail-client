import { NgModule } from '@angular/core';
import { DesignModule } from './design/design.module';
import { TabComponent } from './components/tabs/tab.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabDirective } from './directives/tab.directive';

@NgModule({
  imports: [ DesignModule ],
  exports: [ DesignModule, TabComponent, TabsComponent, TabDirective ],
  declarations: [TabComponent, TabsComponent, TabDirective],
})
export class SahredModule {}