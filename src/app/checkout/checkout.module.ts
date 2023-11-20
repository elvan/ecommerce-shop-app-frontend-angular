import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [CommonModule, CheckoutRoutingModule],
})
export class CheckoutModule {}
