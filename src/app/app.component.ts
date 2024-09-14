import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopComponent } from './features/shop/shop.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'EcommerceShop';
}
