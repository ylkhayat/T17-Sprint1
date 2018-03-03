import { Component, OnInit } from '@angular/core';
import { LocalDataSource,Ng2SmartTableModule } from 'ng2-smart-table';
import { ElectronicsService } from './electronics.service';

@Component({
  selector: 'app-electronics',
  template: `<h1>
  Electronics Products 
 
 </h1>
 
 <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
 
 
 `,
  styleUrls: ['./electronics.component.scss'],
  providers:[ElectronicsService]
})
export class ElectronicsComponent implements OnInit {

  source : LocalDataSource;

 settings = {


    actions:false,

    columns: {
     
      name: {
        title: 'Name',
        filter:String
      },
      price: {
        title: 'Price',
        filter:String
      },
   
      seller: {
        title: 'Seller Name',
        filter:String
      },
      createdAt: {
        title: 'CreatedAt',
        filter:false
      },
      updatedAt: {
        title: 'UpdatedAt',
        filter:false
      }


    }
  };

  data = [];
   

  constructor(private electronicsService:ElectronicsService) { }

  ngOnInit() {

    this.electronicsService.getProducts().subscribe(
      (res: any) => {
       // console.log(res.data)
       if(res.hasOwnProperty('data')){console.log(res);console.log(res.data);
       this.data = res.data;}
      }
   );
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      {
        field: 'name',
        search: query
      },
      {
        field: 'price',
        search: query
      },
      {
        field: 'createdAt',
        search: query
      },
      {
        field: 'updatedAt',
        search: query
      },
      {
        field: 'component',
        search: query
      },
      {
        field: 'seller',
        search: query
      },
    ], false); 
    
  }


}
