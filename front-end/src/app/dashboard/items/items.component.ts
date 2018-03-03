import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';
import { LoginComponent } from '../auth/login/login.component';
import { ItemsService } from './items.service';
@Component({
  selector: 'app-myitems',
  template: `
  <ng2-smart-table [settings]="settings" [source]="data" (createConfirm)="onCreateCall($event)" (editConfirm)="onEditCall($event)" (deleteConfirm)="onDeleteCall($event)"></ng2-smart-table>

  `,
  providers: [ItemsService]
})
export class ItemsComponent implements OnInit {

  source : LocalDataSource;


  settings = {




    
    delete: {
      confirmDelete: true
    },

    columns: {

      name: {
        title: 'Name',
        filter:String,
        editable: false,
        addable: false,
      },
      price: {
        title: 'Price',
        filter:Number,
        editable: false,
        addable: false,
      },

      component: {
        title: 'Component Name',
        filter:String,
        editable: false,
        addable: false,
      },
      seller: {
        title: 'Seller Name',
        filter:String,
        editable: false,
        addable: false,
      },

      createdAt: {
        title: 'CreatedAt',
        filter:false,
        editable: false,
        addable: false,
      },
      updatedAt: {
        title: 'UpdatedAt',
        filter:false,
        editable: false,
        addable: false,
      }


    }
  };

  data = [];

  constructor(private myitemsService:ItemsService) { }





onDeleteCall(event){
 event.confirm.resolve(event.data._id);
 console.log(event.data._id);
 this.myitemsService.deleteProduct(event.data._id).subscribe();
}
// onEditCall(event){
//     event.confirm.resolve(event.newData);
//     this.myitemsService.updateProduct(event.newData.name, event.newData.price).subscribe();
// }



ngOnInit() {
  this.myitemsService.getProducts().subscribe(
     (res: any) => {
      // console.log(res.data)
      if(res.hasOwnProperty('data')){console.log(res);console.log(res.data);
      this.data = res.data;}
     }
  );
}




}
