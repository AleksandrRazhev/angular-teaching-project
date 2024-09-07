import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ModalService } from '../../services/modal.service';
import { ProductsService } from '../../services/products.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { ProductComponent } from '../../components/product/product.component';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { CreateProductComponent } from '../../components/create-product/create-product.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ModalComponent,
    FormsModule,
    ProductComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
  ],
  providers: [ProductsService],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent implements OnInit {
  title = 'Products';
  loading: boolean = false;
  term: string = '';
  constructor(
    public modalService: ModalService,
    public productsService: ProductsService
  ) {}
  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
