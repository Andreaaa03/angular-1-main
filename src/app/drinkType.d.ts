type singleDrink = {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: string | null;
    strTags: string;
    strVideo: string | null;
    strCategory: string;
    strIBA: string | null;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsES: string | null;
    strInstructionsDE: string | null;
    strInstructionsFR: string | null;
    strInstructionsIT: string | null;
    "strInstructionsZH-HANS": string | null;
    "strInstructionsZH-HANT": string | null;
    strDrinkThumb: string;
    strIngredient1: string | null;
    strIngredient2: string | null;
    strIngredient3: string | null;
    strIngredient4: string | null;
    strIngredient5: string | null;
    strIngredient6: string | null;
    strIngredient7: string | null;
    strIngredient8: string | null;
    strIngredient9: string | null;
    strIngredient10: string | null;
    strIngredient11: string | null;
    strIngredient12: string | null;
    strIngredient13: string | null;
    strIngredient14: string | null;
    strIngredient15: string | null;
    strMeasure1: string | null;
    strMeasure2: string | null;
    strMeasure3: string | null;
    strMeasure4: string | null;
    strMeasure5: string | null;
    strMeasure6: string | null;
    strMeasure7: string | null;
    strMeasure8: string | null;
    strMeasure9: string | null;
    strMeasure10: string | null;
    strMeasure11: string | null;
    strMeasure12: string | null;
    strMeasure13: string | null;
    strMeasure14: string | null;
    strMeasure15: string | null;
    strImageSource: string | null;
    strImageAttribution: string | null;
    strCreativeCommonsConfirmed: string | null;
    dateModified: string;
};

type allDrinks = {
    drinks: Array<singleDrink>;
} | null;

type allIngredient = {
    strIngredient1: string | null;
    strIngredient2: string | null;
    strIngredient3: string | null;
    strIngredient4: string | null;
    strIngredient5: string | null;
    strIngredient6: string | null;
    strIngredient7: string | null;
    strIngredient8: string | null;
    strIngredient9: string | null;
    strIngredient10: string | null;
    strIngredient11: string | null;
    strIngredient12: string | null;
    strIngredient13: string | null;
    strIngredient14: string | null;
    strIngredient15: string | null;
};

type allMeasure = {
    strMeasure1: string | null;
    strMeasure2: string | null;
    strMeasure3: string | null;
    strMeasure4: string | null;
    strMeasure5: string | null;
    strMeasure6: string | null;
    strMeasure7: string | null;
    strMeasure8: string | null;
    strMeasure9: string | null;
    strMeasure10: string | null;
    strMeasure11: string | null;
    strMeasure12: string | null;
    strMeasure13: string | null;
    strMeasure14: string | null;
    strMeasure15: string | null;
    strImageSource: string | null;
};

type allIngr_url = {
    strIngr_url1: string | null;
    strIngr_url2: string | null;
    strIngr_url3: string | null;
    strIngr_url4: string | null;
    strIngr_url5: string | null;
    strIngr_url6: string | null;
    strIngr_url7: string | null;
    strIngr_url8: string | null;
    strIngr_url9: string | null;
    strIngr_url10: string | null;
    strIngr_url11: string | null;
    strIngr_url12: string | null;
    strIngr_url13: string | null;
    strIngr_url14: string | null;
    strIngr_url15: string | null;
};

type typePersonal = {
    ingrediente: string | null;
    misura: string | null;
    img_url: string | null;
}[];