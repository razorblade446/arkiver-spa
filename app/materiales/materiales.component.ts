import {Component, OnInit} from '@angular/core';
import {Material} from '../models/material';
import {MaterialesService} from '../services/materiales.service';

@Component({
  styles: [String(require('./materiales.component.scss'))],
  templateUrl: './materiales.component.html',
})

export class MaterialesComponent implements OnInit {
  private materiales: Material[];
  private currentPage: number = 0;
  private totalPages: number = 0;

  constructor(private materialesService: MaterialesService) {
  }

  public loadPage(pageNumber: number = 0) {
    this.materialesService.getMateriales(pageNumber)
      .then((response: any) => {
        this.materiales = response.content;
        this.currentPage = response.number;
        this.totalPages = response.totalPages;
      })
      .catch(() => {
        // Error
      });
  }

  public nextPage () {
    if (this.currentPage + 1 <= this.totalPages) {
      this.loadPage(this.currentPage + 1);
    }
  }

  public pageRange = () => {
    let range: any = [];

    for (let i = 1; i <= this.materiales.length; i++) {
      range.push(i);
    }

    return range;
  }

  public ngOnInit(): void {
    this.loadPage();
  }

}
