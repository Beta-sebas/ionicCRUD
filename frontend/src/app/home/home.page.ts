import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage{
    titulopub: any;
    autores: any;
    tipopub: any;
    eventorevista: any;
    doi: any;
    anyopub: any;
    referencias: any = [];
    constructor(
        public _apiService: ApiService) {
        //this.getReferencias();

    }

    ionViewDidEnter(){
        this.getReferencias();
        
      }

    doRefresh(event) {
        console.log('Begin async operation');
        this.getReferencias();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }

    agregarReferencia() {

      
        let data = {
            titulopub: this.titulopub,
            autores: this.autores,
            tipopub: this.tipopub,
            eventorevista: this.eventorevista,
            doi: this.doi,
            anyopub: this.anyopub
        } 
        
        if(data.eventorevista==undefined){
          data.eventorevista="";
        }
        if(data.doi==undefined){
          data.doi="";
        }
        

        if ((data.titulopub==undefined) || (data.autores==undefined) || (data.tipopub==undefined) || (data.anyopub==undefined)){
            alert("todos los datos con * son obligatorios")
            return;
        }
        
        this._apiService.agregarReferencia(data).subscribe((res: any) => {
            console.log("EXITO AGREGANDO REFERENCIA", res);
            this.titulopub= "";
            this.autores= "";
            this.tipopub= 0;
            this.eventorevista= "";
            this.doi= "";
            this.anyopub="";
            this.getReferencias();

        }, (error: any) => {
            console.log("ERROR AGREGANDO REFERENCIA", error);

        }
        )
    }

    getReferencias() {
        this._apiService.getReferencias().subscribe((res: any) => {
            console.log("EXITO OBTENIENDO LISTA", res);
            this.referencias = res;
        }, (error: any) => {
            console.log("ERROR OBTENIENDO LISTA", error);
        })
    }

    deleteReferencia(idreferencia) {
        console.log("Id por borrar: "+idreferencia);
        this._apiService.deleteReferencia(idreferencia).subscribe((res: any) => {
            console.log("EXITO ELIMINANDO REFERENCIA");
            this.getReferencias();
        }, (error: any) => {
            console.log("ERROR ELIMINANDO REFERENCIA");
        })
    }


}
