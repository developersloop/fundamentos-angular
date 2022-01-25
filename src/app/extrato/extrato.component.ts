import { Component, Input, OnInit } from '@angular/core';
import { propsType } from '../app-interface'
import { TransferenciaService } from '../transferencia.service';
import { Transferencia } from '../models/transferencia.model'

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  // @Input() transferences: Array<{ valor: number, destiny?: string }> // props
  transferences: Array<propsType>

  constructor(private service: TransferenciaService) {} // injector service no component extrato

  ngOnInit() { // mounted cycle
    this.service
      .todas()
      .subscribe((transferences: Array<Transferencia>) => { // subscribe equivale ao .then de promisses usando axios
        this.transferences = transferences
      })
  }
}
