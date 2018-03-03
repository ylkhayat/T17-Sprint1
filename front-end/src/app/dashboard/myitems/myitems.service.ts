import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MyitemsService {

  constructor(private httpClient: HttpClient) { }

  createProduct(name:string, price:number, component:string, seller:string) {
    return this.httpClient.post(environment.apiUrl + 'c5/createProduct', {'name':name, 'price':price , 'component':component,'seller':seller});
  }

   getProducts(){
     return this.httpClient.get(environment.apiUrl + 'c5/getProductsBySeller/'+ window.sessionStorage.email);
   }

   updateProduct(id:object, name:string, price:number, component:string, seller:string) {
    return this.httpClient.patch(environment.apiUrl + 'c5/updateProduct/'+id,{'name':name, 'price':price, 'component':component,'seller':window.sessionStorage.email});
  }

  deleteProduct(id:object){
    return this.httpClient.delete(environment.apiUrl+ 'c5/deleteProduct/'+id);
  }

}
