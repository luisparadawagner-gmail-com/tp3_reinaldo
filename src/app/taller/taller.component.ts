import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.component.html',
  styleUrls: ['./taller.component.css']
})
export class TallerComponent implements OnInit {

  tallerPadre: string = 'Mecanica Neuquen SRL'

  constructor() { }

  ngOnInit(): void {
  }

}
