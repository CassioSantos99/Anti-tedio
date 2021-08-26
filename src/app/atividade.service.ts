import { Injectable } from '@angular/core';
import Atividade from  './models/atividade';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  atividade: Atividade | undefined;

  constructor() { }
}
