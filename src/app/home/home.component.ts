import { Component, OnInit } from "@angular/core";
import { DrinkService } from "../../_services/drink.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    drinksA: Array<singleDrink> = [];
    drinksBZ: Array<singleDrink> = [];
    filterDrinks: singleDrink[] = [];
    constructor(private drinkService: DrinkService, private router: Router) {}
    call: string = "";
    riercaInCorso: boolean = false;
    caricaDiPiu: boolean = false;
    letters: Array<string> = [];
    selectedLetter: string = "a";
    ngOnInit() {
        for (let i = 97; i <= 122; i++) {
            const letter = String.fromCharCode(i);
            this.letters.push(letter);
        }
        for (let i = 1; i < 10; i++) {
            this.letters.push("" + i);
        }
        let lettera_scelta = this.randomLetter();
        for (const letter of this.letters) {
            this.drinkService.getElencoDrinks(letter).subscribe((response) => {
                if (response !== null) {
                    if (letter === lettera_scelta) {
                        if (response.drinks !== null) this.drinksA = response.drinks;
                    } else {
                        if (response.drinks !== null) this.drinksBZ = this.drinksBZ.concat(response.drinks);
                    }
                }
            });
        }
    }

    randomLetter = () => {
        let ris;
        do {
            ris = String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1) + 97));
        } while (ris === "u" || ris === "x");
        return ris;
    };
    cambio = () => {
        this.caricaDiPiu = !this.caricaDiPiu;
        let div = document.getElementById("drinksA");
        if (div) {
            if (this.caricaDiPiu) {
                div.classList.add("lungo");
                div.classList.remove("corto");
            } else {
                div.classList.remove("lungo");
                div.classList.add("corto");
            }
        }
        console.log("cambio");
    };

    RicercaDrink = () => {
        const input = document.getElementById("input-ricerca-drink") as HTMLInputElement;
        if (input) {
            const valore = input.value;
            if (valore !== "") {
                this.riercaInCorso = true;
                this.drinkService.getRicercaDrink(valore).subscribe((response) => {
                    if (response !== null) {
                        this.filterDrinks = response.drinks;
                        console.log("nome: " + this.filterDrinks);
                    } else {
                        console.log("sono qui");
                    }
                });
            }
        }
    };

    funziona: boolean = true;

    RicercaIngrediente = () => {
        const input = document.getElementById("input-ricerca-ingrediente") as HTMLInputElement;
        if (input) {
            const valore = input.value;
            if (valore !== "") {
                this.riercaInCorso = true;
                this.drinkService.getRicercaIngrediente(valore).subscribe((response) => {
                    if (response !== null) {
                        this.funziona = true;
                        this.filterDrinks = response.drinks;
                    } else {
                        this.funziona = false;
                    }
                });
            } else {
                this.riercaInCorso = false;
            }
        }
    };

    LetterChange(event: Event) {
        const selectedLetter = (event.target as HTMLSelectElement).value;
        const route = "/home/elenco-lettera/" + selectedLetter;
        this.router.navigate([route]);
    }
}
