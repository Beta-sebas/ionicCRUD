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

  agregarEstudiante(data){
    return this.http.post('http://localhost/ionicCRUD/backend/create.php',data);
  }

  getEstudiantes(){
    return this.http.get('http://localhost/ionicCRUD/backend/getStudents.php');
  }

  getEstudiante(id){
    return this.http.get('http://localhost/ionicCRUD/backend/getSingleStudent.php?id='+id);
  }

  deleteEstudiante(id){
    return this.http.delete('http://localhost/ionicCRUD/backend/delete.php?id='+id);
  }

  actualizarEstudiante(id,data){
    return this.http.put('http://localhost/ionicCRUD/backend/updateStudents.php?id='+id,data);
  }
}
