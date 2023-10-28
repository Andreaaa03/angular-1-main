import { Component, OnInit } from "@angular/core";
import { DrinkService } from "../../_services/drink.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    drinksA: Array<singleDrink> = [];
    drinksBZ: Array<singleDrink> = [];

    constructor(private drinkService: DrinkService) {}
    call: string = "";

    caricaDiPiu: boolean = false;
    letters: Array<string> = [];
    ngOnInit() {
        for (let i = 97; i <= 122; i++) {
            const letter = String.fromCharCode(i);
            this.letters.push(letter);
        }
        let lettera_scelta = this.randomLetter();
        for (const letter of this.letters) {
            this.drinkService.getElencoDrinks(letter).subscribe((response) => {
                if (response !== null) {
                    console.log(lettera_scelta);

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
}
