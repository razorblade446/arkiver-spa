import {Component, OnInit, OnDestroy} from "@angular/core";
import {MaterialesService} from "../../services/materiales";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Material} from "../../models/material";
import {TipoMaterial} from "../../models/tipo-material";

@Component({
  templateUrl: "./edit.html",
})

export class EditarMaterialComponent implements OnInit, OnDestroy {
  private paramsSubscription: Subscription;

  private material: Material;
  private tiposMateriales: TipoMaterial[];

  constructor(private materialesService: MaterialesService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(
      params => {
        let id = +params['id'];
        this.materialesService.getMaterial(id)
          .subscribe(
            material => {
              this.material = material;
            }
          )
      }
    )


  }

  ngOnDestroy(): void {
    this.loadSubscription.unsubscribe();
  }

}
