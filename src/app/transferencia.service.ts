import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { propsType } from './app-interface'
import { Transferencia } from './models/transferencia.model'

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private url: string = 'http://localhost:3000/transferencias'
  private listaTransferencia: Array<propsType> = []

  constructor(private httpClient: HttpClient) {

  }

  get transferences(): Array<propsType> {
    return this.listaTransferencia
  }

  todas(): Observable<Array<Transferencia>> {
    return this.httpClient.get<Array<Transferencia>>(this.url)
  }
  adicionar(transferencia: propsType): Observable<Transferencia> {
    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }
}
