import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productList$ = this.storage.watch('products');

  constructor(
    public storage: StorageService
  ) { }

  ngOnInit(): void {
  }

  removeStoreProduct(name: string): void{
    let list = this.storage.get('products');
    if (!list) {
      list = [];
    }
    list = list.filter( (x: any) => x.name != name);
    this.storage.set('products', list);
  }

}
