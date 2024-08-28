import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ProductComponent {
  @Input() product!: IProduct;
  details = false;
  @Input() index?: number;
}
