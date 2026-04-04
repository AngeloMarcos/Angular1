import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calculadoraResultado() {
    console.log('chamando metodo calcular');
    console.log('Numero1:', this.numero1);
    console.log('Numero2:', this.numero2);

    this.resultado = Number(this.numero1) + Number(this.numero2);
  }
}