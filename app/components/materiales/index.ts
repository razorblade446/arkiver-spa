import {Component, OnInit} from "@angular/core";
import {Material} from "../../models/material";
import {MaterialesService} from "../../services/materiales";
import {PageableResponse} from "../../models/pageable-response";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: "./index.html",
  styles: [String(require("./index.scss"))]
})

export class MaterialesComponent implements OnInit {
  private materiales: Material[];
  private currentPage: number = 1;
  private totalPages: number = 0;

  constructor (private materialesService: MaterialesService,
               private router: Router) {
  }

  public loadPage (pageNumber: number = 1) {
    this.materialesService.getMateriales(pageNumber)
      .subscribe(
        (response: PageableResponse) => {
          this.totalPages = response.totalPages;
          this.materiales = response.content;
          this.currentPage = response.number;
        }
      );
  }

  public ngOnInit (): void {
    this.loadPage();
  }

}
