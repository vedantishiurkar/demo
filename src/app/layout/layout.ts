import { Component } from "@angular/core";
import { HomeComponent } from "../home-page/home-page";
import { NavbarComponent } from "../navbar/navbar";

@Component({
    selector : 'app-layout',
    imports : [HomeComponent, NavbarComponent],
    standalone : true,
    templateUrl : './layout.html',
    styleUrl : './layout.css'
})
export class layoutComponent{

}