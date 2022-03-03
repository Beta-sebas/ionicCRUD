import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  year: any;
  studentOne: any;
  studentTwo: any;
  students: any=[];
  constructor(
    public _apiService: ApiService) { 
      this.getEstudiantes();
    }

    doRefresh(event) {
        console.log('Begin async operation');
        this.getEstudiantes();
        setTimeout(() => {
          console.log('Async operation has ended');
          event.target.complete();
        }, 2000);
      }

  agregarEstudiante() {
    console.log(this.year, this.studentOne, this.studentTwo)
    let data = {
      year: this.year,
      studentOne: this.studentOne,
      studentTwo: this.studentTwo
    }
    for (let key in data) {
        if (!data[key]) {
            
            alert("todos los datos son obligatorios")
            return;
        }
    }
    this._apiService.agregarEstudiante(data).subscribe((res: any) => {
      console.log("SUCCESS===", res);
      this.year="";
      this.studentOne="";
      this.studentTwo="";
      this.getEstudiantes();
      
    }, (error: any) => {
      console.log("ERROR===", error);
      
    }
    )
  }

  getEstudiantes(){
    this._apiService.getEstudiantes().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.students = res;
    },(error:any) => {
      console.log("ERROR ===",error);
    })
  }

  deleteEstudiante(id){
    this._apiService.deleteEstudiante(id).subscribe((res:any) => {
      console.log("SUCCESS");
      this.getEstudiantes();
    },(error:any) => {
      console.log("ERROR");
    })
  }

}
