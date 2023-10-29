import { Component, OnInit } from "@angular/core";
import { DrinkService } from "../../_services/drink.service";
import { ActivatedRoute, Router } from "@angular/router";
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
            ingrediente: null,
            misura: null,
            img_url: null,
        },
    ];

    selectLanguage = {
        en: "en",
        es: "es",
        de: "de",
        fr: "fr",
        it: "it",
    };

    selectedLang: string = this.selectLanguage.en;

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private drinkService: DrinkService,
        private router: Router
    ) {}

    tornaIndietro() {
        this.location.back();
    }

    selectLanguageFunction(scelta: string) {
        switch (scelta) {
            case this.selectLanguage.en:
                this.selectedLang = this.selectLanguage.en;
                break;
            case this.selectLanguage.de:
                this.selectedLang = this.selectLanguage.de;
                break;
            case this.selectLanguage.es:
                this.selectedLang = this.selectLanguage.es;
                break;
            case this.selectLanguage.fr:
                this.selectedLang = this.selectLanguage.fr;
                break;
            case this.selectLanguage.it:
                this.selectedLang = this.selectLanguage.it;
                break;
        }
    }

    idDrink: string = "";
    ingr_img_url: string | null = null;

    ngOnInit() {
        const baseUrlIngredient = "https://www.thecocktaildb.com/images/ingredients/";

        this.activatedRoute.params.subscribe((params) => {
            this.idDrink = params["id"];
            this.drinkService.getDettaglioDrink(this.idDrink).subscribe((response) => {
                if (response && response.drinks != null) {
                    console.log(response);
                    this.drink = response.drinks[0];
                    let i: number = 1;
                    while ((this.drink as any)["strIngredient" + i] !== null) {
                        const ingrediente = (this.drink as any)["strIngredient" + i];
                        const misura = (this.drink as any)["strMeasure" + i];

                        if (ingrediente) {
                            this.ingredients.push(ingrediente);

                            this.ingr_img_url = baseUrlIngredient + ingrediente + "-Small.png";
                            const img_url = this.ingr_img_url;

                            if (misura) {
                                this.measure.push(misura);
                            }
                            this.personal.push({ ingrediente, misura, img_url });
                        }

                        i++;
                    }
                    this.personal.shift();

                    console.log(this.personal);
                    if (typeof this.personal[3].ingrediente === undefined) {
                        console.log(this.personal[3].ingrediente);
                    }
                }
                else{
                    this.router.navigate(["/errore"]);
                }
            });
        });
    }

    isImageAvailable(imgUrl: string | null): boolean {
        if (imgUrl) {
            const image = new Image();
            image.src = imgUrl;
            return image.complete;
        }
        return false;
    }
}
