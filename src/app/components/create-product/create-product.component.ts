import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { FocusDirective } from '../../directives/focus.directive';
import { ProductsService } from '../../services/products.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FocusDirective],
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {
  constructor(
    private productService: ProductsService,
    private modalService: ModalService
  ) {}
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  submit() {
    const { value } = this.form;
    this.productService
      .create({
        title: value.title ?? '',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: { rate: 3.9, count: 1 },
      })
      .subscribe(() => this.modalService.close());
  }
  get title() {
    return this.form.controls.title as FormControl;
  }
  get errorMessage(): string {
    const { errors, touched } = this.title;
    if (touched && errors?.['required']) return 'поле должно быть заполнено';
    if (touched && errors?.['minlength']) return 'минимум 3 символа';
    return '';
  }
}
