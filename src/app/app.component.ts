import { Component, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Peliculas{
  titulo: string;
  tipo: string;
  duracion: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Input()
export class AppComponent {
  title = 'my-app';
public animeFavorito = 'Dragon Ball';
public listaPeliculas: Peliculas[] = [];
public listaTipos: any[] = [];
public listaDuracion: any[] = [];
public peliculaActual: string="";
public tipoDePelicula: string="";
public duracionDePelicula: number;
public borrarPelicula(peliculaAborrar:number){
  this.listaPeliculas.splice(peliculaAborrar, 1)
  this.listaTipos.splice(peliculaAborrar,1)
};
constructor(
 private firestore: AngularFirestore
) {
}


public agregarPelicula(): void {
  
  this.firestore.collection('peliculas').add({
    titulo: this.peliculaActual,
    horas: this.duracionDePelicula,
    fechaAlta: new Date()
  }).then();

this.firestore.collection('peliculas')
.doc(this.peliculaActual)
.set({
  titulo: this.peliculaActual,
  genero: this.tipoDePelicula,
  horas: this.duracionDePelicula,
  fechaAlta: new Date()
})
};
}
