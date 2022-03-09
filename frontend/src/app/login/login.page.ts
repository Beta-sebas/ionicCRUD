import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
var logueado = false;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: any;
  password: any;

  constructor(public _apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
  }
  
  login(){
    let data = {
      usuario: this.usuario,
      password: this.password
    } 

    if((data.usuario==undefined) || (data.password==undefined) ||(data.usuario=="") || (data.password=="") ){
      alert("todos los datos son obligatorios")
            return;
    }

    this._apiService.login(data).subscribe((res: any) => {
      if (res.status) {
        //console.log(res.logueado.user);
        console.log(res.logueado.login);
        //logueado = res.logueado.login;
        let str = JSON.stringify(res.logueado.login);
        let user = JSON.stringify(res.logueado.user);
        localStorage.setItem("login", str);
        localStorage.setItem("user", user);
        this.usuario= "";
        this.password= "";
        this.router.navigateByUrl('/home');
      }
      else {
        //console.log(res.msj);
        //console.log(res.status);
        logueado = false;
        let str = JSON.stringify(logueado);
        localStorage.setItem("login", str);
        this.password= "";
        alert(res.msj);
      }
    }, (error: any) => {
        alert("error en el sistema intenta más tarde")
        console.log("ERROR EN EL SISTEMA", error);
      })
  }
}
