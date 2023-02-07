import { Component } from '@angular/core';
import {Credito} from "./model/credito.model";
import {CreditoService} from "./service/credito/credito.service";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentStep: number = 1;
  calculado: boolean = false;
  carregando: boolean = false;
  credito: Credito = new Credito();
  propostaCredito: Credito = new Credito();

  constructor(
    private creditoService: CreditoService
  ) {}


  public async calcular(): Promise<void> {
    try {
      this.carregando = true;
      this.propostaCredito = await lastValueFrom(this.creditoService.calcularCredito(this.credito));
      this.calculado = true;
    } finally {
      this.carregando = false;
    }
  }

  imprimir(): void {
    window.print()
  }
}
