import { Component } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-dashboard-items',
  template: `
            <p style="color:black"> Insert name of product: </p>
            <input type="text" id="Pname" ><br/>
            <br/>
            <p style="color:black" > Insert price of product: </p>
            <input type="text" id="Pprice"><br/>
            <br/>
            <button ng-click="call()"> Add Product </button>
            `
})


export class ItemsComponent {
  productName : string ;
  productPrice : number ;


  constructor(private http:Http){

  }

  call(){
     `http://localhost:3000/api/product/createProduct${product._id}`
    this.http.post(`http://localhost:3000/api/product/createProduct`,{name: "gtgt", price:5});
    console.log("hiiiiiiiiiiiiiiii");
  }

}
