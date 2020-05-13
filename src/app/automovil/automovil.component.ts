import { Component, OnInit } from '@angular/core';

import {Motor} from './../automovil/motor/Motor'

import { FormControl,FormGroup,FormBuilder,Validator,Validators,FormArray } from '@angular/forms';
@Component({
  selector: 'app-automovil',
  templateUrl: './automovil.component.html',
  styleUrls: ['./automovil.component.css']
})
export class AutomovilComponent {

  constructor(private fb: FormBuilder) { }

  automovilForm = this.fb.group({
    marca: ['Ford',Validators.required],
    año: [''],
    datosTecnicos: this.fb.group({
      enMarcha: [''],
      ultimoServicio: ['']
    }),
    mecanicosACargo: this.fb.array([ this.fb.control('')])
    
  });
  
  get mecanicosACargo() {

    return this.automovilForm.get('mecanicosACargo') as FormArray;
  };

  agregarMecanico(){
    this.mecanicosACargo.push(this.fb.control(''));
  };

  submit() {

    //Datos tipo string, number, boolean y date, uso de setvalue
    this.automovilForm.setValue({
      marca: 'Volskwagen',
      año: 2015,
      datosTecnicos:{
        enMarcha: true,
        ultimoServicio: new Date()
      },
      mecanicosACargo: ['']
    })
    //uso de patchvalue
    this.automovilForm.patchValue({año:2016});
  };

  //Clase
  motor : Motor = {tipo: 'naftero', kilometraje: 43500}

}
