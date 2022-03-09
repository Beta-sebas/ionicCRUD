import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;

  constructor(
    public http: HttpClient
  ) {
    this.headers = new HttpHeaders();
    this.headers.append("Acept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow', '*');
   }

  agregarReferencia(data){
    return this.http.post('http://localhost/ionicCRUD/backend/create.php',data);
    debugger
  }

  getReferencias(){
    return this.http.get('http://localhost/ionicCRUD/backend/getReferences.php');
  }

  getReferencia(idreferencia){
    return this.http.get('http://localhost/ionicCRUD/backend/getSingleReference.php?idreferencia='+idreferencia);
  }

  deleteReferencia(idreferencia){
    return this.http.delete('http://localhost/ionicCRUD/backend/delete.php?idreferencia='+idreferencia);
  }

  actualizarReferencia(idreferencia,data){
    return this.http.put('http://localhost/ionicCRUD/backend/updateReference.php?idreferencia='+idreferencia,data);
  }

  login(data){
    return this.http.post('http://localhost/ionicCRUD/backend/login.php',data);
  }
}
