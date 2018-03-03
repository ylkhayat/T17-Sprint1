import { Component, OnInit } from '@angular/core';
import { LocalDataSource,Ng2SmartTableModule } from 'ng2-smart-table';
import { ToysService } from './toys.service';

@Component({
  selector: 'app-electronics',
  template: `<h1>
  Toys Products

 </h1>

 <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>


 `,
  styleUrls: ['./toys.component.scss'],
  providers:[ToysService]
})
export class ToysComponent implements OnInit {

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


  constructor(private toysService:ToysService) { }

  ngOnInit() {

    this.toysService.getProducts().subscribe(
      (res: any) => {
       // console.log(res.data)
       if(res.hasOwnProperty('data')){console.log(res);console.log(res.data);
       this.data = res.data;}
      }
   );
  }




}
