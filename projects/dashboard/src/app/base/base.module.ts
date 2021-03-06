import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from './base-button/base-button.component';
import { BaseHeaderComponent } from './base-header/base-header.component';
import { BaseFooterComponent } from './base-footer/base-footer.component';
import { BaseMainComponent } from './base-main/base-main.component';
import { BaseModalComponent } from './base-modal/base-modal.component';

@NgModule({
  declarations: [
    BaseButtonComponent,
    BaseHeaderComponent,
    BaseFooterComponent,
    BaseMainComponent,
    BaseModalComponent
  ],
  imports: [CommonModule],
  exports: [
    BaseButtonComponent,
    BaseHeaderComponent,
    BaseFooterComponent,
    BaseMainComponent,
    BaseModalComponent
  ]
})
export class BaseModule {}
