import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-mecanico',
  templateUrl: './mecanico.component.html',
  styleUrls: ['./mecanico.component.css']
})
export class MecanicoComponent implements OnInit {

  @Input() tallerHijo: string;
  
  @Output() horario = new EventEmitter<string>();

  dia = new FormControl('Sabado');

 

  constructor() { }

  ngOnInit(): void {
  }

  //transformacion de datos desde componente hijo
  decirHorario( dia : FormControl){
    debugger;
    if (dia.value === 'Sabado'){
      this.horario.emit('9 a 13 hs')
    } 
    else if (dia.value === 'Domingo'){
      this.horario.emit('El local esta cerrado el dia Domingo')
    }
      else {
      this.horario.emit('9 a 17 hs')
    }
  }

}
