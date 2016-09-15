import {Component} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'material-form',
  templateUrl: './form.html'
})

export class MaterialesForm {
  public materialForm: any;
  constructor(private fb: FormBuilder){
    this.materialForm = fb.group({
      idMaterial: ["", Validators.required],
      nombre: ["", Validators.required],
    });
  }

  doSave(event: Event) {
    console.log(this.materialForm.value);
    event.preventDefault();
  }
}