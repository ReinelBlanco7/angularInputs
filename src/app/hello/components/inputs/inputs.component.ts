import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  public nombre: string;
  public apellido: string;

  constructor() {
    this.nombre = "";
    this.apellido = "";
   }

  ngOnInit(): void {
  }

}
