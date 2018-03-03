import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';
import { MyitemsService } from './myitems.service';
import { LoginComponent } from '../auth/login/login.component';
@Component({
  selector: 'app-myitems',
  template: `
  <ng2-smart-table [settings]="settings" [source]="data" (createConfirm)="onCreateCall($event)" (editConfirm)="onEditCall($event)" (deleteConfirm)="onDeleteCall($event)"></ng2-smart-table>

  `,
  styleUrls: ['./myitems.component.scss'],
  providers: [MyitemsService]
})
export class MyitemsComponent implements OnInit {

  source : LocalDataSource;


  settings = {




    add: {
      confirmCreate: true
    },
    edit: {
      confirmSave: true
    },
    delete: {
      confirmDelete: true
    },

    columns: {

      name: {
        title: 'Name',
        filter:String
      },
      price: {
        title: 'Price',
        filter:Number
      },

      component: {
        title: 'Component Name',
        filter:String
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

  constructor(private myitemsService:MyitemsService) { }


  onCreateCall(event){
    event.confirm.resolve(event.newData);
    this.myitemsService.createProduct(event.newData.name, event.newData.price,event.newData.component,window.sessionStorage.email).subscribe();
}

onEditCall(event){
    event.confirm.resolve(event.newData);
    console.log(event);
    this.myitemsService.updateProduct(event.newData._id, event.newData.name, event.newData.price,event.newData.component,window.sessionStorage.email).subscribe();
}

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
