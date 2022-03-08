import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Location } from "@angular/common";


@Component({
    selector: 'app-read-reference',
    templateUrl: './read-reference.page.html',
    styleUrls: ['./read-reference.page.scss'],
})
export class ReadReferencePage implements OnInit {
    idreferencia: any;
    titulopub: any;
    autores: any;
    tipopub: any;
    eventorevista: any;
    doi: any;
    anyopub: any;
    referencias: any = [];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _apiService: ApiService,
        private location: Location
    ) {
        this.route.params.subscribe((param: any) => {
            this.idreferencia = param.id;
            console.log("Id por leer: " + this.idreferencia);
            this.getReferencia(this.idreferencia);
        })
    }

    ngOnInit() {
    }

    getReferencia(idreferencia) {
        this._apiService.getReferencia(idreferencia).subscribe((res: any) => {
            console.log("EXITO OBTENIENDO DATOS A LEER", res);
            //let referencias = res[0];

            if (res[0].tipopub == 1) {
                res[0].tipopub = "articulo de revista";
            }
            else {
                if (res[0].tipopub == 2) {
                    res[0].tipopub = "articulo de evento";
                }
                else {
                    res[0].tipopub = "otro";
                }
            }
            this.referencias.push(res[0]);

        }, (err: any) => {
            console.log("ERROR OBTENIENDO DATOS A LEER", err);
        })
    }
    volver() {
        this.location.back();
    }

}
