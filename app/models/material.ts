import {TipoMaterial} from "./tipo-material";

export class Material {
  constructor(public idMaterial: number,
              public nombre: string,
              public archivo: string,
              public tipoMaterial: TipoMaterial) {
  }
}