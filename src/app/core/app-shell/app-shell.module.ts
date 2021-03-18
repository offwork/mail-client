import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutContentComponent } from './components/layout-content/layout-content.component';
import { LayoutContainerComponent } from './components/layout-container/layout-container.component';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { LayoutFooterComponent } from './components/layout-footer/layout-footer.component';

@NgModule({
  declarations: [
    LayoutContentComponent,
    LayoutContainerComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LayoutContentComponent,
    LayoutContainerComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
  ],
})
export class AppShellModule {}
