import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ProveedorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorProvider {

  constructor(public http: HttpClient) {
  }

  obtenerDatos(crypto, currency){
    return this.http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms='+crypto+'&tsyms='+currency );
  }

}
