import { Component, OnInit } from '@angular/core';
import Atividade from  '../models/atividade';
import { HttpClient } from '@angular/common/http';
import { AtividadeService } from '../atividade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atividade-random',
  templateUrl: './atividade-random.component.html',
  styleUrls: ['./atividade-random.component.sass']
})

export class AtividadeRandomComponent implements OnInit {
  atividade: any;

  constructor( private http: HttpClient, private atividadeService: AtividadeService, private router: Router) { }

  ngOnInit(): void {

    this.http.get<Atividade>('https://www.boredapi.com/api/activity')
    .subscribe(dados => {
      this.atividade = dados;
    });
  }
}
