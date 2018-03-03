import { Component, OnInit } from '@angular/core';
import { LocalDataSource,Ng2SmartTableModule } from 'ng2-smart-table';
import { SportsService } from './sports.service';

@Component({
  selector: 'app-electronics',
  template: `<h1>
  Sports Products

 </h1>

 <ng2-smart-table [settings]="settings" [source]="data"  (userRowSelect)="onUserRowSelect($event)"></ng2-smart-table>


 `,
  styleUrls: ['./sports.component.scss'],
  providers:[SportsService]
})
export class SportsComponent implements OnInit {

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


  constructor(private sportsService:SportsService) { }

  ngOnInit() {

    this.sportsService.getProducts().subscribe(
      (res: any) => {
       // console.log(res.data)
       if(res.hasOwnProperty('data')){console.log(res);console.log(res.data);
       this.data = res.data;}
      }
   );
  }

  onUserRowSelect(event):void
  {
    alert('Added to Cart');
    
      this.sportsService.createProduct(window.sessionStorage.email,event.data.name, event.data.price,event.data.component,event.data.seller).subscribe();
  }




}
