import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Material} from '../models/material';
import {TipoMaterial} from '../models/tipo-material';
import {MaterialesService} from '../services/materiales';

@Component({
  templateUrl: './materiales-edit.component.html',
})

export class MaterialesEditComponent implements OnInit, OnDestroy {
  private paramsSubscription: Subscription;
  private tiposMaterialesSubscription: Subscription;

  private material: Material;
  private tiposMateriales: TipoMaterial[];

  constructor (private materialesService: MaterialesService,
               private route: ActivatedRoute) {
  }

  public ngOnInit (): void {
    let routeId = 'id';
    this.tiposMaterialesSubscription = this.materialesService.getTiposMateriales().subscribe(
      (tiposMateriales: any) => {
        this.tiposMateriales = tiposMateriales;
      }
    );

    this.paramsSubscription = this.route.params.subscribe(
      params => {
        let id = +params[routeId];
        this.materialesService.getMaterial(id)
          .subscribe(
            material => {
              this.material = material;
            }
          );
      }
    );
  }

  public ngOnDestroy (): void {
    this.paramsSubscription.unsubscribe();
    this.tiposMaterialesSubscription.unsubscribe();
  }

}
