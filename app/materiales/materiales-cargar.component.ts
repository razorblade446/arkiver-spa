import {Component} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  styles: [String(require('./materiales-cargar.component.scss'))],
  templateUrl: './materiales-cargar.component.html',
})

export class MaterialesCargarComponent {
  private uploader: FileUploader;
  private isOver: boolean = false;

  private fileOver(event: any): void {
    this.isOver = event;
  }
}
