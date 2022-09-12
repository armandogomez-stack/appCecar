import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  empleadosArray:Empleado[] =[
    {
      id:1,
      nombre:'carlos',
      pais:'colombia'
    },
    {
      id:2,
      nombre:'pedro',
      pais:'venezuela'
    },
    {
      id:3,
      nombre:'camilita',
      pais:'peru'
    }
  ]

  empleadoSeleccionado:Empleado = new Empleado();

  abrirEditar(empleado:Empleado){
    this.empleadoSeleccionado = empleado;
  }
  enviarOeditar(){
    if(this.empleadoSeleccionado.id === 0){
      this.empleadoSeleccionado.id = this.empleadosArray.length + 1;

      this.empleadosArray.push(this.empleadoSeleccionado);
    }
   

    this.empleadoSeleccionado = new Empleado();
  }
  eliminar(){
    if(confirm("desea eliminar el empleado ?")){
      this.empleadosArray = this.empleadosArray.filter(x => x != this.empleadoSeleccionado);
      this.empleadoSeleccionado = new Empleado();
    }
    
  }
}
