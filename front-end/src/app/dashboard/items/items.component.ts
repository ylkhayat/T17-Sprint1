import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ItemsService } from './items.service'
@Component({
  selector: 'app-dashboard-items',
  template: `
            <p style="color:black"> Insert name of product: </p>
            <input type="text" [(ngModel)]="productName"><br/>
            <br/>
            <p style="color:black" > Insert price of product: </p>
            <input type="number" [(ngModel)]="productPrice"><br/>
            <br/>

            <button (click)="call()"> Add Product </button>
            `
})


export class ItemsComponent {
  productName : string = '';
  productPrice : number = 0;

  constructor(private itemsService:ItemsService){

  }

  call(){
     // `http://localhost:3000/api/product/createProduct${product._id}`
     this.itemsService.createProduct(this.productName, this.productPrice).subscribe(){
     res => {
       console.log(res.msg);
     }

     this.itemsService.getProducts().subscribe(){
     res => {
       console.log(res.data);
     }
   }
    // this.http.post(`http://localhost:3000/api/product/createProduct`,{name: "gtgt", price:5});
    // console.log("hiiiiiiiiiiiiiiii");
  }

}
