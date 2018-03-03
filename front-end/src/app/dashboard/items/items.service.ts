import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

 

   getProducts(){
     return this.httpClient.get(environment.apiUrl + 'cart/getProductsByUser/'+ window.sessionStorage.email);
   }



  deleteProduct(id:object){
    return this.httpClient.delete(environment.apiUrl+ 'cart/deleteProduct/'+id);
  }

}
