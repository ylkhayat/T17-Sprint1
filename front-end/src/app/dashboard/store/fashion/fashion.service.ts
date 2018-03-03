import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class FashionService {

  constructor(private httpClient: HttpClient) { }

  createProduct(name:string, price:number, component:string, seller:string) {
    return this.httpClient.post(environment.apiUrl + 'allproducts/createProduct', {'name':name, 'price':price , 'component':component,'seller':seller});
  }

  getProducts(){
    return this.httpClient.get(environment.apiUrl + 'allproducts/getProductsByComponent/c1');
  }

   updateProduct(id:object, name:string, price:number) {
    return this.httpClient.patch(environment.apiUrl + 'allproducts/updateProduct/'+id,{'name':name, 'price':price});
  }

  deleteProduct(id:object){
    return this.httpClient.delete(environment.apiUrl+ 'allproducts/deleteProduct/'+id);
  }

}
