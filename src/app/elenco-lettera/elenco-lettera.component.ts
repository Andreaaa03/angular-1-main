import { Component, OnInit } from "@angular/core";
import { DrinkService } from "../../_services/drink.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "elenco-lettera",
    templateUrl: "./elenco-lettera.component.html",
})
export class ElencoLettera implements OnInit {
    drinks: singleDrink[] = [];

    constructor(private activatedRoute: ActivatedRoute, private drinkService: DrinkService) {}

    lettera_scelta: string = "";
    letters: Array<string> = [];

    esiste:boolean=true;

    ngOnInit() {
        for (let i = 97; i <= 122; i++) {
            const letter = String.fromCharCode(i);
            this.letters.push(letter);
        }

        this.activatedRoute.params.subscribe((params) => {
            this.lettera_scelta = params["lettera"];
            this.drinkService.getElencoDrinks(this.lettera_scelta).subscribe((dati) => {
                if (dati && dati.drinks !== null) this.drinks = dati.drinks;
                else this.esiste = false;
            });
        });
    }
}
