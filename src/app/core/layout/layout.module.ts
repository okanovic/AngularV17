import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routes.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [LayoutComponent,SidebarComponent],
  imports: [CommonModule, LayoutRoutingModule],
  exports: [LayoutComponent,SidebarComponent],
})
export class LayoutModule {}
