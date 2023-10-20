import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "dettaglio-elenco",
    templateUrl: "./dettaglio-elenco.component.html",
})
export class DettaglioElenco implements OnInit {
    drink: any ;
    ingredients: Array<string>=[];
    measure: Array<string>=[];
    personal: any=[{
        ingrediente: "",
        misura: "",
    }];
    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15200").subscribe((response: any) => {
            this.drink = response.drinks[0];
            let i:number=1;
            while (this.drink["strIngredient" + i] !== null) {
                const ingrediente = this.drink["strIngredient" + i];
                const misura = this.drink["strMeasure" + i];

                if (ingrediente) {
                    this.ingredients.push(ingrediente);

                    if (misura) {
                        this.measure.push(misura);
                    }

                    this.personal.push({ ingrediente, misura });
                }

                i++;
            }
            console.log(this.personal);
            console.log(this.personal[1].ingrediente);
        });
    }
}


