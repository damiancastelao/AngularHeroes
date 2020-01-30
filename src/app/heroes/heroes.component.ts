import { Component, OnInit } from '@angular/core';
// decorador que especifica los metadatos
@Component({
  // nombre del selector CSS del componente, asi se identificará en el html final
  selector: 'app-heroes',
  // ruta a la plantilla html
  templateUrl: './heroes.component.html',
  // ruta a la hoja de estilo
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  // Angular llamará a esta función después de crear el componente
  ngOnInit() {
  }

}
