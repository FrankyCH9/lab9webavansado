import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  listaTareas: string[] = [];
  
  

  agregarTarea(nuevaTarea: string) {
    this.listaTareas.push(nuevaTarea);
    
  }

  limpiarCampoTexto(campoTexto: HTMLInputElement) {
    campoTexto.value = '';
  }
}
