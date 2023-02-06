import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Credito} from "../../model/credito.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  constructor(
    private http: HttpClient
  ) { }

  public calcularCredito(credito: Credito): Observable<Credito> {
    return this.http.post<Credito>('http://localhost:8000/api/credito/calcular/', credito);
  }
}

//fazer uma lista de tarefas para resolver, colocar alguns bugs urgentes, validar a escolha
