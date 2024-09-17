import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DeliveryMethod } from '../../shared/models/deliveryMethod';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  baseUrl = environment.apiUrl;
  private http = inject(HttpClient);
  deliveryMethods: DeliveryMethod[] = [];

  getDeliveryMethods() {
    if (this.deliveryMethods.length > 0) return of(this.deliveryMethods);
    return this.http
      .get<DeliveryMethod[]>(this.baseUrl + 'payments/delivery-methods')
      .pipe(
        map((methods) => {
          this.deliveryMethods = methods.sort((a, b) => b.price - a.price);
          return methods;
        })
      );
  }
}
