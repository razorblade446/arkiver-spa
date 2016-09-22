import {Component} from '@angular/core';
import {Input} from '@angular/core';
import {Material} from '../models/material';

@Component({
  selector: 'material-tile',
  styles: [String(require('./material-tile.component.scss'))],
  templateUrl: './material-tile.component.html',
})

export class MaterialTileComponent {
  @Input('material') private material: Material;
}
