import { NgModule } from '@angular/core';
import { TabsModule } from './components/tabs/tabs.module';
import { DesignModule } from './design/design.module';

@NgModule({
  imports: [DesignModule, TabsModule],
  exports: [DesignModule, TabsModule],
})
export class SahredModule {}
