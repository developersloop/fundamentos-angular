import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TransferenciaService } from '../transferencia.service';


type Fields = {
  valor: number,
  destiny?: string
}
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: '../nova-transferencia/nova-transferencia.component.html',
  styleUrls: ['../nova-transferencia/nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent implements Fields {

  // @Output() aoTransferir = new EventEmitter<Fields>(); // emitir um evento de filho para pai

  valor:number = null;
  destiny: string;

  constructor(
      private service: TransferenciaService,
      private router: Router
  ) {}

  // injetando duas dependencias (service e router)

  transferir() {
    // this.aoTransferir.emit({ valor: this.valor, destiny: this.destiny });
    const data = {
      valor: this.valor,
      destino: this.destiny,
      data: new Date(),
    }
    this.service.adicionar(data)
      .subscribe(
        (response) => {
          this.cleanData()
          this.router.navigateByUrl('extrato')
        },
        (error) => console.log(error)
      )
  }
  cleanData(): void {
    this.valor = 0
    this.destiny = ''
  }
}
