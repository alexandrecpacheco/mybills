import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentBills } from '../classes/payment-bills';
import { apiBillsServices } from '../services/apibills.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-bills',
  templateUrl: './payment-bills.component.html'
})

@Injectable()
export class PaymentBillsComponent implements OnInit {

  public trashes = [];
  public listBills : PaymentBills[];
  public isDeleted : boolean = false;
  public show : boolean = true;
  public isLoading : boolean = false;
  public payments : any[];
  
  constructor(
    private _apiBillsServices : apiBillsServices
  , private toastr : ToastrService) {
   };

  ngOnInit(){
  }

  getPaymentBills(){
    try{
    this._apiBillsServices.getPaymentBills()
    .subscribe(
      data =>
      {
        this.isLoading = true;
        this.listBills = data;
      }
      , err => alert ("Subscribe error: " + err.message)
    )
    }
    catch(error){
      alert ("Error getPaymentBills - Components - Subscribe: " + error.message);
    }
  }

  onSubmitConsole(isDeleted : boolean, form: NgForm){
    console.log("isDeleted: " + isDeleted);
    console.log("form.Value : " + form.value);
  }

  onSubmit(isDeleted : boolean, bill : PaymentBills, show : boolean){

    if (bill != null){

      let isContinue : boolean = true;
      //Rule when is delete button
      if (isDeleted) {
        this.toastr
        if(confirm("Tem certeza que deseja apagar este item?")){
          isContinue = true;
        }
        else{
          isContinue = false;
        }
      }

      if (isContinue){
        this._apiBillsServices.postPaymentDetail(isDeleted, bill).subscribe(
          res => {
            this.show = show;
            if(!isDeleted){
              this.toastr.success('', 'Salvo com Sucesso!');
            }
            else{
              this.toastr.success('', 'Apagado com Sucesso!');
            }

            //Load the main page
            this._apiBillsServices.getPaymentBills()
            .subscribe(
              data =>
              {
                this.listBills = data;
              }
            );
          },
          err => {
            this.toastr.error(err.message, "Error: ");
          },
          () => {
            //Everything is good
          }
        )
      }
    }
    else{
      this.toastr.error("Verifique os campos!", "Atenção");
    }
  }

  resetForm(form? : NgForm){
    if(form != null){
      form.resetForm();
      this._apiBillsServices.formData = {
        Id : "0",
        DueDate : '',
        Itens : '',
        Status : false,
        UpdateTime : '',
        Values : ''
      }
    } 
  }
}
