import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CheckoutAddressComponent } from './checkout-address/checkout-address.component';
import { CheckoutDeliveryComponent } from './checkout-delivery/checkout-delivery.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { CheckoutReviewComponent } from './checkout-review/checkout-review.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { CheckoutComponent } from './checkout.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutAddressComponent,
    CheckoutDeliveryComponent,
    CheckoutReviewComponent,
    CheckoutPaymentComponent,
    CheckoutSuccessComponent,
  ],
  imports: [CommonModule, CheckoutRoutingModule, SharedModule],
})
export class CheckoutModule {}
