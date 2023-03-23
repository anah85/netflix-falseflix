import { PelisInterface } from './models/PelisInterface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';

  public top5:PelisInterface = {
    section: "Los 5 mas vistos",
    films: [{
    imagen: "/assets/images/Top10/1-papel.webp",
    titulo: "La casa de papel"
    },
    {
    imagen: "/assets/images/Top10/2-reina.webp",
    titulo: "La reina del Sur"
    },
    {
    imagen: "/assets/images/Top10/3-titanes.webp",
    titulo: "Titanes"
    },
    {
    imagen: "/assets/images/Top10/4-lostinspace.webp",
    titulo: "Lost in space"
    },
    {
    imagen: "/assets/images/Top10/8-ricos.webp",
    titulo: "Ricos y mimados"
    }
  ],
  };
  
  public comedia:PelisInterface = {
  section: 'Comedia',
  films:[
  {
  imagen:'/assets/images/Comedia/casi300.webp',
  titulo: 'Casi 300',
  },
  {
  imagen:'/assets/images/Comedia/cazafantasmas.webp',
  titulo: 'Los Cazafantasmas',
  },
  {
  imagen:'/assets/images/Comedia/dictador.webp',
  titulo: 'Dictador',
  },
  {
  imagen:'/assets/images/Comedia/erasehollywood.webp',
  titulo: 'Erase una vez en Hollywood',
  },
  {
  imagen:'/assets/images/Comedia/family guy.webp',
  titulo: 'Padre de familia',
  },
  {
  imagen:'/assets/images/Comedia/juerga.webp',
  titulo: 'Juerga hasta el fin',
  },
  {
  imagen:'/assets/images/Comedia/laterminal.webp',
  titulo: 'La terminal',
  },
  {
  imagen:'/assets/images/Comedia/padresella.webp',
  titulo: 'Los padres de ella',
  },
  {
  imagen:'/assets/images/Comedia/regresofuturo.webp',
  titulo: 'Regreso al futuro',
  },
  {
  imagen:'/assets/images/Comedia/rickandmorty.webp',
  titulo: 'Rick and Morty',
  },
  {
  imagen:'/assets/images/Comedia/scarymovie3.webp',
  titulo: 'Scary movie 3',
  },
  {
  imagen:'/assets/images/Comedia/ted2.webp',
  titulo: 'Ted 2',
  },
],
  };
  public terror:PelisInterface = {
    section: 'Terror',
    films:[
    {
    imagen:'/assets/images/Terror/apostol.jpg',
    titulo: 'Apostol',
    },
    {
    imagen:'/assets/images/Terror/calleterror.jpg',
    titulo: 'La calle del terror',
    },
    {
    imagen:'/assets/images/Terror/infiernoagua.webp',
    titulo: 'Infierno bajo el agua',
    },
    {
    imagen:'/assets/images/Terror/insidious2.webp',
    titulo: 'Insidious 2',
    },
    {
    imagen:'/assets/images/Terror/life.webp',
    titulo: 'Life',
    },
    {
    imagen:'/assets/images/Terror/malasana.webp',
    titulo: 'Malasaña 32',
    },
    {
    imagen:'/assets/images/Terror/multiple.webp',
    titulo: 'Multiple',
    },
    {
    imagen:'/assets/images/Terror/reflejos.webp',
    titulo: 'Reflejos',
    },
    ]
  };

  }

