import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    drinksA: Array<singleDrink> = [];
    drinksBZ: Array<singleDrink> = [];

    constructor(private http: HttpClient) {}
    call: string = "";

    caricaDiPiu: boolean = false;
    letters:Array<string> = [];

    firstLetter = (letter: string) => {
        return `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
    };

    async ngOnInit() {
        for (let i = 97; i <= 122; i++) {
            const letter = String.fromCharCode(i);
            this.letters.push(letter);
        }

        for (const letter of this.letters) {
            const response = await this.http.get<allDrinks>(this.firstLetter(letter)).toPromise();
            if (response !== undefined && response) {
                if (letter === "a") {
                    this.drinksA = response.drinks;
                } else {
                    this.drinksBZ = this.drinksBZ.concat(response.drinks);
                }
            }
        }
    }

    cambio = () => {
        this.caricaDiPiu = !this.caricaDiPiu;
        let div=document.getElementById("drinksA");
        if(div){
            if(this.caricaDiPiu){
                div.classList.add("lungo");
                div.classList.remove("corto");
            }
            else{
                div.classList.remove("lungo");
                div.classList.add("corto");
            }
        }
        console.log("cambio");
    };
}

//     ngOnInit() {
//         const requests = [];
//         this.http.get<allDrinks>(this.firstLetter()).subscribe((response) => {
//             this.drinksA = response.drinks;
//         });

//         for (let i = 98; i <= 122; i++) {
//             const letter = String.fromCharCode(i);
//             this.call = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
//         }
//         requests.push(this.http.get<allDrinks>(this.allLetter()));
//         forkJoin(requests).subscribe((results) => {
//             // results è un array contenente i risultati di tutte le chiamate
//             // Concateniamo i risultati di ciascuna chiamata in un unico array
//             this.drinksBZ = results.reduce((acc: singleDrink[], result) => acc.concat(result.drinks), []);
//         });

//         // .subscribe((response) => {this.drinksBZ = response.drinks;})
//     }

//     // this.allLetter();
// }
