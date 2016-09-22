import {Component, OnInit} from '@angular/core';
import {Material} from '../models/material';

@Component({
  styles: [String(require('./home.component.scss'))],
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  private materiales: Material[] = [];

  public ngOnInit(): void {
    this.materiales = require('../mock/materiales.json');
  }

}
