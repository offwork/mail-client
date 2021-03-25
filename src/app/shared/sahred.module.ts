import { NgModule } from '@angular/core';
import { DesignModule } from './design/design.module';

@NgModule({
  imports: [ DesignModule ],
  exports: [ DesignModule ],
})
export class SahredModule {}