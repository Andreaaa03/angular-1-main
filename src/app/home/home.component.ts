import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    drinks: any = [];
    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").subscribe((dati: any) => {
            this.drinks = dati.drinks;
        });
    }
}