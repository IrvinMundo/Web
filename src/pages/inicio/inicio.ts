import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoPage } from '../evento/evento';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}