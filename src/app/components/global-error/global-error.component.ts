import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-global-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-error.component.html',
})
export class GlobalErrorComponent implements OnInit {
  constructor(public errorService: ErrorService) {}
  ngOnInit(): void {}
}
