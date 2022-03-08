import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
  idreferencia: any;
  titulopub: any;
  autores: any;
  tipopub: any;
  eventorevista: any;
  doi: any;
  anyopub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService : ApiService,
    private location: Location
  ) { 
    this.route.params.subscribe((param:any) => {
      this.idreferencia=param.id;
      console.log("Id por actualizar: "+this.idreferencia);
      this.getReferencia(this.idreferencia);
    })
  }

  ngOnInit() {
  }

  getReferencia(idreferencia){
    this._apiService.getReferencia(idreferencia).subscribe((res:any) => {
      console.log("EXITO OBTENIENDO DATOS A MODIFICAR",res);
      let referencia = res[0];
      this.titulopub=referencia.titulopub;
      this.autores= referencia.autores;
      this.tipopub= referencia.tipopub;
      this.eventorevista= referencia.eventorevista;
      this.doi= referencia.doi;
      this.anyopub= referencia.anyopub;

    
    },(err:any) => {
      console.log("ERROR OBTENIENDO DATOS A MODIFICAR",err);
    })
  }

  actualizarReferencia(){
    let data = {
      titulopub: this.titulopub,
      autores: this.autores,
      tipopub: this.tipopub,
      eventorevista: this.eventorevista,
      doi: this.doi,
      anyopub: this.anyopub
    }
    if ((data.titulopub=="") || (data.autores=="") || (data.tipopub==undefined) || (data.anyopub==undefined)){
      alert("todos los datos con * son obligatorios")
      return;
    }
    this._apiService.actualizarReferencia(this.idreferencia,data).subscribe((res:any) => {
      console.log("SUCCESS",res);
      this.router.navigateByUrl('/home');
      //this.location.back();
    },(err:any) => {
      console.log("ERROR",err);
    })

  }


}
