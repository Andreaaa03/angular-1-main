import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "dettaglio-elenco",
    templateUrl: "./dettaglio-elenco.component.html",
})
export class DettaglioElenco implements OnInit {
    drink: any ;
    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15200").subscribe((response: any) => {
            this.drink = response.drinks[0];
        });
    }
}


