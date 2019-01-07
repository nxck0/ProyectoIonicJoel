import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';

@IonicPage()
@Component({
  selector: 'page-ver-precio',
  templateUrl: 'ver-precio.html',
})
export class VerPrecioPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: ProveedorProvider) {
  }

  
  public monedas: object;


  Crypto = this.navParams.get('crypto'); 
  Currency = this.navParams.get('currency');

  nombresCrypto={BTC: 'Bitcoin', ETH:'Ethereum', XRP: 'XRP',BCH:'Bitcoin Cash', EOS:'EOS', XLM:'Stellar',LTC:'Litecoin',USDT:'Tether',BSV:'Bitcoin SV',TRX:'TRON',ADA:'Cardano', MIOTA:'IOTA', XMR:'Monero',BNB:'Binance Coin',DASH:'Dash', XEM:'NUM',ETC:'Ethereum Classic',NEO:'NEO',MKR:'Maker',ZEC:'Zcash'};
  nombresCurrency={EUR:'Euros',USD:'Dólares',AUD:'Dólares australianos',NZD:'Dólares neozelandeses',GBP:'Libras esterlinas',KRW:'Wones',JPY:'Yenes'};

  ionViewCanEnter() {
      return new Promise((resolve, reject) => {
        this.proveedor.obtenerDatos(this.Crypto,this.Currency).subscribe((data) => {
            this.monedas = data;
            console.log(this.monedas)
            resolve(data);
        }, (error) => {
            console.error(error);
            reject(error);
        });
        }
    );
}


getCryptoName(){
  console.log(this.nombresCrypto[this.Crypto]);
  return this.nombresCrypto[this.Crypto];
}

getCurrencyName(){
  console.log(this.nombresCurrency[this.Currency]);
  return this.nombresCurrency[this.Currency];
}

getPrice(){
  console.log(this.monedas[this.Crypto.toUpperCase()][this.Currency.toUpperCase()]);
  return this.monedas[this.Crypto.toUpperCase()][this.Currency.toUpperCase()];
}

}
