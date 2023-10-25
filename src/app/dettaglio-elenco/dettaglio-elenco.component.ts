import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
    selector: "dettaglio-elenco",
    templateUrl: "./dettaglio-elenco.component.html",
})
export class DettaglioElenco implements OnInit {
    drink: singleDrink = {
        idDrink: "",
        strDrink: "",
        strDrinkAlternate: null,
        strTags: "",
        strVideo: null,
        strCategory: "",
        strIBA: null,
        strAlcoholic: "",
        strGlass: "",
        strInstructions: "",
        strInstructionsES: null,
        strInstructionsDE: null,
        strInstructionsFR: null,
        strInstructionsIT: null,
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        strDrinkThumb: "",
        strIngredient1: null,
        strIngredient2: null,
        strIngredient3: null,
        strIngredient4: null,
        strIngredient5: null,
        strIngredient6: null,
        strIngredient7: null,
        strIngredient8: null,
        strIngredient9: null,
        strIngredient10: null,
        strIngredient11: null,
        strIngredient12: null,
        strIngredient13: null,
        strIngredient14: null,
        strIngredient15: null,
        strMeasure1: null,
        strMeasure2: null,
        strMeasure3: null,
        strMeasure4: null,
        strMeasure5: null,
        strMeasure6: null,
        strMeasure7: null,
        strMeasure8: null,
        strMeasure9: null,
        strMeasure10: null,
        strMeasure11: null,
        strMeasure12: null,
        strMeasure13: null,
        strMeasure14: null,
        strMeasure15: null,
        strImageSource: null,
        strImageAttribution: null,
        strCreativeCommonsConfirmed: null,
        dateModified: "",
    };
    ingredients: Array<allIngredient> = [];
    measure: Array<allMeasure> = [];
    personal: typePersonal = [
        {
            ingrediente: {
                strIngredient1: null,
                strIngredient2: null,
                strIngredient3: null,
                strIngredient4: null,
                strIngredient5: null,
                strIngredient6: null,
                strIngredient7: null,
                strIngredient8: null,
                strIngredient9: null,
                strIngredient10: null,
                strIngredient11: null,
                strIngredient12: null,
                strIngredient13: null,
                strIngredient14: null,
                strIngredient15: null,
            },
            misura: {
                strMeasure1: null,
                strMeasure2: null,
                strMeasure3: null,
                strMeasure4: null,
                strMeasure5: null,
                strMeasure6: null,
                strMeasure7: null,
                strMeasure8: null,
                strMeasure9: null,
                strMeasure10: null,
                strMeasure11: null,
                strMeasure12: null,
                strMeasure13: null,
                strMeasure14: null,
                strMeasure15: null,
                strImageSource: null,
            },
        },
    ];
    constructor(private http: HttpClient, private router: Router, private location: Location) {}

    tornaIndietro() {
        this.location.back();
    }

    idDrink: string | undefined = undefined;

    ngOnInit() {
        const parts: string[] | undefined = window.location.href.split("/");
        this.idDrink = parts.pop();
        const apiRequest = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + this.idDrink;
        console.log(this.idDrink);

        this.http.get<allDrinks>(apiRequest).subscribe((response) => {
            if (response) {
                this.drink = response.drinks[0];
                let i: number = 1;
                while ((this.drink as any)["strIngredient" + i] !== null) {
                    const ingrediente = (this.drink as any)["strIngredient" + i];
                    const misura = (this.drink as any)["strMeasure" + i];

                    if (ingrediente) {
                        this.ingredients.push(ingrediente);
                        if (misura) {
                            this.measure.push(misura);
                        }
                        this.personal.push({ ingrediente, misura });
                    }

                    i++;
                }
                this.personal.shift();

                console.log(this.drink);
                if((typeof this.personal[3].ingrediente) === undefined){
                    console.log(this.personal[3].ingrediente);
                }
            }
        });
    }
}
