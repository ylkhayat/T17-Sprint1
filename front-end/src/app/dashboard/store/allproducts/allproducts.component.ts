import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AllproductsService } from './allproducts.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss'],
  providers:[AllproductsService]
})
export class AllproductsComponent implements OnInit {


  source : LocalDataSource;

  settings = {
    actions: false,
    columns: {

      name: {
        title: 'Name',
        filter:String
      },
      price: {
        title: 'Price',
        filter:String
      },
      component: {
        title: 'Component Number',
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
      },
      updatedAt: {
        title: 'UpdatedAt',
        filter:false
      }


    }
  };

  data = [
    ];

  constructor(private allproductsService:AllproductsService) { }

  ngOnInit() {

    this.allproductsService.getProducts().subscribe(
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
  
    this.allproductsService.createProduct(window.sessionStorage.email,event.data.name, event.data.price,event.data.component,event.data.seller).subscribe();
}

}
