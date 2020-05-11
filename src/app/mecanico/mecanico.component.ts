import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mecanico',
  templateUrl: './mecanico.component.html',
  styleUrls: ['./mecanico.component.css']
})
export class MecanicoComponent implements OnInit {

  @Input() tallerHijo: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
