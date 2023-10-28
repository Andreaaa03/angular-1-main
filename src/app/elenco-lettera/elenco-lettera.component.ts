import { Component, OnInit } from "@angular/core";
import { DrinkService } from "../../_services/drink.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "elenco-lettera",
    templateUrl: "./elenco-lettera.component.html",
})
export class ElencoLettera implements OnInit {
    drinks: singleDrink[] = [];
    drinkAlchol: singleDrink[] = [];
    drinkAnalchol: singleDrink[] = [];

    constructor(private activatedRoute: ActivatedRoute, private drinkService: DrinkService) {}

    lettera_scelta: string = "";
    letters: Array<string> = [];

    esiste: boolean = true;
    selectFilter = {
        tutti: "tutti",
        alcolici: "alcolici",
        analcolici: "analcolici",
    };
    selectedFilter: string = this.selectFilter.tutti;
    selectFilterFunction(scelta: string) {
        switch (scelta) {
            case this.selectFilter.tutti:
                this.selectedFilter = this.selectFilter.tutti;
                break;
            case this.selectFilter.alcolici:
                this.selectedFilter = this.selectFilter.alcolici;
                break;
            case this.selectFilter.analcolici:
                this.selectedFilter = this.selectFilter.analcolici;
                break;
        }
    }
    ngOnInit() {
        for (let i = 97; i <= 122; i++) {
            const letter = String.fromCharCode(i);
            this.letters.push(letter);
        }

        this.activatedRoute.params.subscribe((params) => {
            this.drinkAnalchol=[];
            this.drinkAlchol=[];
            this.lettera_scelta = params["lettera"];
            this.drinkService.getElencoDrinks(this.lettera_scelta).subscribe((dati) => {
                if (dati && dati.drinks !== null) {
                    this.drinks = dati.drinks;
                    console.log(this.drinks);
                    for(let i=0; i<this.drinks.length; i++) {
                        if(this.drinks[i].strAlcoholic == "Alcoholic"){
                            this.drinkAlchol.push(dati.drinks[i]);
                        }
                        else if(this.drinks[i].strAlcoholic == "Non alcoholic"){
                            this.drinkAnalchol.push(dati.drinks[i]);
                        }
                    }
                } else 
                    this.esiste = false;
            });
        });
    }
}
