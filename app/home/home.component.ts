import {Component, OnInit} from '@angular/core';
import {Material} from '../models/material';
import {MaterialesService} from '../services/materiales.service';

@Component({
  styles: [String(require('./home.component.scss'))],
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  private static PAGE_SIZE = 20;

  private materiales: Material[] = [];
  private currentPage: number = 0;
  private totalPages: number = 0;
  private searchTerm: string = '';

  private cargando: boolean = false;

  constructor(private materialesService: MaterialesService) {
  }

  public ngOnInit(): void {
    this.nextPage();
  }

  private loadPage = (page: number, pageSize: number, search: string) => {
    this.cargando = true;

    this.materialesService.getMateriales(page, pageSize, search)
      .then((response: any) => {
        this.materiales = response.content;
        this.currentPage = response.number;
        this.totalPages = response.totalPages;
        this.cargando = false;
      });
  };

  private nextPage () {
    //console.log('scrolled!');
    //if (!this.cargando && ((this.currentPage + 1 <= this.totalPages) || this.totalPages === 0)) {
      console.log('scroll?');
      this.loadPage(this.currentPage + 1, HomeComponent.PAGE_SIZE, this.searchTerm);
    //}
  };

}
