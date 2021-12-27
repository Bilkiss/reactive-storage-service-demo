import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  products: any[] = [];
  productNames:any = [];
  currentPrice: any = 0;

  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.products = [
      { 'Pizza' : 200 },
      { 'Rice' : 150 },
      { 'Bread' : 70 }
    ];
    
    this.products.map( (key, val) => {
      // console.log('Object.keys(key):' , Object.keys(key));
      this.productNames.push.apply(this.productNames, Object.keys(key));
    });
    console.log('this.productNames:' , this.productNames);
  }

  onChangeProduct(event: any): void{
    const value = event.target.value

    this.products.map( prod => {
      if (Object.keys(prod)[0].includes(value)){
        this.currentPrice = Object.values(prod)[0];
      };
    });

    // this.currentPrice = this.products.filter(o => Object.keys(o).includes( value ) )[0][value];    
    console.log('onChangeProduct currentPrice: ', this.currentPrice);

  }

}
