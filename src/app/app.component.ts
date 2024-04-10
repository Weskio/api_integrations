import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetService } from './controller/get.service';
import { Product } from './model/product';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api_integrations';

  constructor(public getService: GetService) { }

  product: Product[] = [];

  ngOnInit() {
    this.getService.getProducts();
    //console.log(this.getService.Product)
    let  product$ = of(this.getService.Product)
    //return product$
  }
}
