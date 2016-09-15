import {Injectable} from "@angular/core";
import {ConfigService} from "./config.service";
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {PageableResponse} from "../models/pageable-response";
import {observableToBeFn} from "rxjs/testing/TestScheduler";
import {Material} from "../models/material";
import {TipoMaterial} from "../models/tipo-material";

@Injectable()

export class MaterialesService {
  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = ConfigService.baseUrl + "/materiales";
  }

  public getMateriales(pageNumber: number = 1): Observable<PageableResponse> {
    let requestParameters: URLSearchParams = new URLSearchParams();
    requestParameters.set("pageNumber", pageNumber.toString());

    return this.http.get(
      this.baseUrl,
      {search: requestParameters})
      .map(resp => resp.json());
  }

  public getMaterial(idMaterial: number): Observable<Material> {
    let url = this.baseUrl + "/" + idMaterial;
    return this.http.get(url)
      .map(resp => resp.json());
  }

  public getTiposMateriales(): Observable<TipoMaterial[]> {
    let url = this.baseUrl + "/tipos";
    return this.http.get(url)
      .map(resp => resp.json());
  }
}
