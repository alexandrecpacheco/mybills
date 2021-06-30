import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { PaymentBills } from '../classes/payment-bills';

const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

@Injectable()
export class apiBillsServices{
    
    formData : PaymentBills;
    readonly url = "http://localhost:49565/api/PaymentBills";

    constructor(private httpClient : HttpClient) { }

    getPaymentBills() : Observable<any> {
        try{
            return this.httpClient.get(this.url, httpOptions);
        }
        catch(error){
            alert ("Some error ocurred: " + error);
        }
    }

    getPaymentBillsById() : Observable<any>{
        let id = "1";
        let urlById = `${this.url}/${id}`;

        return this.httpClient.get(urlById);
    }

    postPaymentDetail(isDeleted : boolean, formData: PaymentBills){

        let url = `${this.url}/${isDeleted}`;
        return this.httpClient.post(url, formData, httpOptions);
    }
}