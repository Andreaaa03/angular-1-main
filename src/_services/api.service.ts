import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/";
    
    constructor(private http: HttpClient) {}

    /***
     * RICERCA
     */
    searchByFirstLetter(firstLetter: string) {
        return this.http.get<allDrinks>(this.baseUrl + "search.php?f=" + firstLetter);
    }

    searchById(id: string) {
        return this.http.get<allDrinks>(this.baseUrl + "lookup.php?i=" + id);
    }

    
    
}
