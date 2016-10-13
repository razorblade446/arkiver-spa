import {Component} from '@angular/core';

@Component({
  templateUrl: './materiales-menu.component.html',
})

export class MaterialesMenuComponent {

  public canShowNew = (): boolean => {
    return true;
  }

}
