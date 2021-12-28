import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  products: any[] = [];
  productNames:any = [];
  currentProduct: any = {
    name: '',
    price: 0
  };
  storageProductList: any = [];

  constructor(
    public storage: StorageService
  ) { }

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
        this.currentProduct.price = Object.values(prod)[0];
      };
    });

    // this.currentProduct.price = this.products.filter(o => Object.keys(o).includes( value ) )[0][value];    
    console.log('onChangeProduct currentProduct.price: ', this.currentProduct.price);

  }

  addProduct(): void{
    console.log('addProduct currentProduct: ', this.currentProduct);
    this.storageProductList = this.storage.get('products');
    if (!this.storageProductList) {
      this.storageProductList = [];
    }
    this.storageProductList.push({...this.currentProduct});
    this.storage.set('products', this.storageProductList);
  }


}
