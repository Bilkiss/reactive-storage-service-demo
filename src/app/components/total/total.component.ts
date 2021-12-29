import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  displayProductData: any = {
    subtotal: 0,
    discount: 0,
    vat: 0,
    total: 0
  };

  constructor(
    public storage: StorageService
  ) { }

  ngOnInit(): void {
    this.storage.watch('products')?.subscribe( res => {
      // console.log('watch res: ', res);
      const prices = res.map( (x: any) => x.price);

      this.displayProductData.subtotal = (prices.length > 1) ? 
      prices.reduce( (a:number, b:number) => a+b, 0 ): prices[0];

      this.displayProductData.discount = 0.05 * this.displayProductData.subtotal;
      this.displayProductData.vat = 0.15 * this.displayProductData.subtotal;
      this.displayProductData.total = this.displayProductData.subtotal - this.displayProductData.discount + this.displayProductData.vat;

      // console.log('onInit displayProductData: ', this.displayProductData);
    });
  }

}
