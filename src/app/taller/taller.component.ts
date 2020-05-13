import { Component, OnInit } from '@angular/core';
import {Motor} from './../automovil/motor/Motor';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.component.html',
  styleUrls: ['./taller.component.css']
})
export class TallerComponent implements OnInit {

  tallerPadre: string = 'Mecanica Neuquen SRL'

  horario: string;

  cliente: string = 'Juan Perez';

  fotoTaller: string = 'https://biblus.accasoftware.com/es/wp-content/uploads/sites/3/2019/11/disenar-un-taller-mecanico.jpg';
  anchoImg = '400';
  altoImg = '200';
  tooltip = 'Taller Mecanico';

  motorPrueba: Motor = {
    tipo: 'Gasolero',
    kilometraje: 65000
  };

  motores : Motor[] = [
    {
      tipo: 'Naftero',
      kilometraje: 12000
    },
    {
      tipo: 'Gasolero',
      kilometraje: 19000
    }
  ]

  constructor() { 
  }

  ngOnInit(): void {
  }

  onHorario(horario){
    debugger;
      this.horario = horario;
  }

  verMotor(motor : Motor){
    alert('Motor en servicio: ' + motor.tipo +' Kilometraje: '+ motor.kilometraje);
  }

}
