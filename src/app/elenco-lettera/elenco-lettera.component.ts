import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "elenco-lettera",
    templateUrl: "./elenco-lettera.component.html",
})
export class ElencoLettera implements OnInit {
    drinks: Array<singleDrink> = [];

    constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

    lettera: string | undefined = undefined;
    letters: Array<string> = [];
    
    ngOnInit() {
        console.log("oninit");
        // const parts: string[] | undefined = window.location.href.split("/");
        // this.lettera = parts.pop();
        // this.activatedRoute.snapshot.params['lettera']; non gestisce le callback
        for (let i = 97; i <= 122; i++) {
            const letter = String.fromCharCode(i);
            this.letters.push(letter);
        }
        console.log(this.letters);

        this.activatedRoute.params.subscribe((params) => {
            this.lettera = params["lettera"];
            console.log(this.lettera);
            const apiRequestLetter = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + this.lettera;
            const call = apiRequestLetter;
            this.http.get<allDrinks>(call).subscribe((dati) => {
                if (dati) this.drinks = dati.drinks;
            });
        });
    }
}
