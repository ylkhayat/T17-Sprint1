import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';
import { LoginComponent } from '../auth/login/login.component';
import { ItemsService } from './items.service';
@Component({
  selector: 'app-myitems',
  template: `
  
  <div class="btn2"  >
  <h2>Your total is: {{total}}</h2>
    <button _ngcontent-c0="" (click)="checkout()" class="btn btn-hero-success ">
      <span _ngcontent-c0="">Checkout</span>
    </button>
  </div>
  <ng2-smart-table [settings]="settings" [source]="data"  (deleteConfirm)="onDeleteCall($event)"></ng2-smart-table>

  `,
  providers: [ItemsService]
})
export class ItemsComponent implements OnInit {
  total = 0;
  source : LocalDataSource;


  settings = {



actions:{
  add:false,
  edit:false
},
    
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
      var total = 0;
       for (let index = 0; index < res.data.length; index++) {
         total += res.data[index].price;
         
       }
       this.total = total;
     }
  );
}



checkout(){

 alert('You checked out successfully');
 this.myitemsService.deleteProductsByUser().subscribe();
 window.location.reload();

}




}
