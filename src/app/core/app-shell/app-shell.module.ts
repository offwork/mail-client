import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LayoutContentComponent,
  LayoutContainerComponent,
  LayoutHeaderComponent,
  LayoutFooterComponent,
  LayoutSimpleComponent,
} from './components';
import { SahredModule } from 'src/app/shared/sahred.module';
import { LayoutServices } from './components/services/layout.service';

@NgModule({
  declarations: [
    LayoutContentComponent,
    LayoutContainerComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutSimpleComponent,
  ],
  imports: [CommonModule, SahredModule, RouterModule],
  exports: [
    LayoutContentComponent,
    LayoutContainerComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutSimpleComponent,
  ],
  providers: [LayoutServices]
})
export class AppShellModule {}
