import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MostrarEventosService {
  constructor( public http:Http ) {  }

  /*Obtiene la información del json en los asests y lo regresa como
  respuesta*/
  getData(){
    return this.http.get("http://localhost:3000/api/Eventos")
      .map((res: Response) => res.json());
  }

  getEvento(id:string){
    var url:string = "http://localhost:3000/api/Eventos/" + id;
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  postEvento(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type','application/json');

    let parametros = {
      "nombre": "Nuevo Evento",
      "fecha": "2017-12-25",
      "hora": "15:00",
      "numeropersonas": 7
    };

    this.http.post('http://localhost:3000/api/Eventos', JSON.stringify(parametros),{headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      })

  }


}
