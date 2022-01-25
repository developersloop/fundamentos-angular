import { Component } from '@angular/core';
import { TransferenciaService } from './transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service: TransferenciaService) {}

}
