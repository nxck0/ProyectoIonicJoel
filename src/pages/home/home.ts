import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';
import {SelectSearchableComponent} from 'ionic-select-searchable';
import { VerPrecioPage } from '../ver-precio/ver-precio';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public monedas: object;
    items: Array<string>;

      moneda=null;
      precioEn=null;

      infoMonedas=[
        {
            id: 'BTC',
            nombre: 'Bitcoin'
        },
        {
            id: 'ETH',
            nombre: 'Ethereum'
        },
        {
            id: 'XRP',
            nombre: 'XRP'
        },
        {
            id: 'BCH',
            nombre: 'Bitcoin Cash'
        },
        {
            id: 'EOS',
            nombre: 'EOS'
        },
        {
            id: 'XLM',
            nombre: 'Stellar'
        },
        {
            id: 'LTC',
            nombre: 'Litecoin'
        },
        {
            id: 'USDT',
            nombre: 'Tether'
        },
        {
            id: 'BSV',
            nombre: 'Bitcoin SV'
        },
        {
            id: 'TRX',
            nombre: 'TRON'
        },
        {
            id: 'ADA',
            nombre: 'Cardano'
        },
        {
            id: 'MIOTA',
            nombre: 'IOTA'
        },
        {
            id: 'XMR',
            nombre: 'Monero'
        },
        {
            id: 'BNB',
            nombre: 'Binance Coin'
        },
        {
            id: 'DASH',
            nombre: 'Dash'
        },
        {
            id: 'XEM',
            nombre: 'NUM'
        },
        {
            id: 'ETC',
            nombre: 'Ethereum Classic'
        },
        {
            id: 'NEO',
            nombre: 'NEO'
        },
        {
            id: 'MKR',
            nombre: 'Maker'
        },
        {
            id: 'ZEC',
            nombre: 'Zcash'
        }
      ];

      constructor(public navCtrl: NavController, public proveedor: ProveedorProvider,  private toastCtrl: ToastController) {}

      monedaSeleccionada(event: { component: SelectSearchableComponent, value: any}) {
        console.log('event', event); 
      } 
      
      currency(currencySeleccionada){
        this.precioEn=currencySeleccionada;
        console.log(this.precioEn)
        }
      
      verPrecio(){
          if(this.moneda!=null){
              if(this.precioEn!=null){
                console.log('Crypto',this.moneda);
                console.log('Currency',this.precioEn);
                this.navCtrl.push(VerPrecioPage,{crypto:this.moneda,currency:this.precioEn});
              }
              else{
                this.faltaCurrency();
              }
          }
          else{
              this.faltaCripto();
          }
      }

      faltaCripto() {
        let toast = this.toastCtrl.create({
          message: 'Selecciona una criptomoneda',
          duration: 3000,
          position: 'top',
          showCloseButton: true,
          closeButtonText: 'CERRAR'
        });
        toast.present();
      }
      
      faltaCurrency() {
        let toast = this.toastCtrl.create({
          message: 'Selecciona una moneda',
          duration: 3000,
          position: 'top',
          showCloseButton: true,
          closeButtonText: 'CERRAR'
        });
        toast.present();
      }
    }
