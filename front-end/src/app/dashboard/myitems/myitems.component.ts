import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { MyitemsService } from './myitems.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-myitems',
  templateUrl: './myitems.component.html',
  styleUrls: ['./myitems.component.scss']
})
export class MyitemsComponent implements OnInit {

  source : LocalDataSource;
  d : any;
  
  settings = {
    columns: {
      name: {
        title: 'Product Name',
        filter:false,
        
      },
      price: {
        title: 'Price',
        filter:false
      },
      component: {
        title: 'Store',
        filter:false
      },
      seller: {
        title: 'Seller Name',
        filter:false
      },
      createdAt : {
        title: 'Created At',
        filter:false
      }
    }
  };

  constructor(private myitemsService:MyitemsService) { 
    this.source = new LocalDataSource(this.d);

  }

  ngOnInit() {
   this.myitemsService.getProducts().subscribe(
    (data) => {
      this.d = data;
   }

  );

  }


  /*onSearch(query: string = '') {
    this.source.setFilter([
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false); 
    
  }*/

}
