import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvertisseurDistancesComponent  } from "./convertisseur-distances/convertisseur-distances.component";
//import { ConvertisseurPoidsComponent  } from "./convertisseur-poids/convertisseur-poids.component";
//import { ConvertisseurTemperatureComponent  } from "./convertisseur-temperature/convertisseur-temperature.component";
const routes: Routes = [
 //{path:"/convertisseur-distances", component:ConvertisseurDistancesComponent},
//{ path:"/convertisseur-poids", component:ConvertisseurPoidsComponent },

//{path:"/convertisseur-temperature", component:ConvertisseurTemperatureComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
