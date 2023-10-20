import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    drinks: Array<singleDrink> = [];
    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<allDrinks>("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").subscribe((dati) => {
            this.drinks = dati.drinks;
        });
    }
}