import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { DettaglioElenco } from './dettaglio-elenco/dettaglio-elenco.component';
import { ElencoLettera } from './elenco-lettera/elenco-lettera.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "home/dettaglio-elenco/:id", component: DettaglioElenco }, // redirect to `first-component` -  :id corrisponde ad una variabile che vedo nell'url: quindi usiamo il metodo get!!
    { path: "home/elenco-lettera/:lettera/dettaglio-elenco/:id", component: DettaglioElenco }, // redirect to `first-component` -  :id corrisponde ad una variabile che vedo nell'url: quindi usiamo il metodo get!!
    { path: "home/elenco-lettera/:lettera", component: ElencoLettera }, // redirect to `first-component` -  :id corrisponde ad una variabile che vedo nell'url: quindi usiamo il metodo get!!
    { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`

    { path: "home/errore", component: PageNotFoundComponent }, // Wildcard route for a 404 page
    { path: "**", component: PageNotFoundComponent }, // Wildcard route for a 404 page
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }