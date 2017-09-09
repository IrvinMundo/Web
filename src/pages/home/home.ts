import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventoPage } from '../evento/evento';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController) {
	
  }
  
  nextPage(){
  	this.navCtrl.push(EventoPage);
  }
  
  items = [
  	'Fiesta de mi mamá',
  	'Peda del Sábado',
  	'Noche de Amigos'
  ];
  
  itemSelected(item: string){
  	console.log("Selected Item", item);
  }

}