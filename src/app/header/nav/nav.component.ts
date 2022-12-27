import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Input() nombreHijo: String = "Najhely";
  @Output() cambioNombreHijo = new EventEmitter<String>();

  cambiarNombre(nombre:String){ 
    this.nombreHijo = nombre;
    this.cambioNombreHijo.emit(this.nombreHijo);
  }
}
