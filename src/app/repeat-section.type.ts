import { Component } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div class="repeat-item" *ngFor="let field of field.fieldGroup; let i = index;">
      <formly-group
        [model]="model[i]"
        [field]="field"
        [options]="options"
        [form]="formControl">
        <div class="col-sm-2 d-flex align-items-center" style="padding-top: 12px;">
          <button class="btn btn-danger" type="button" (click)="remove(i)"><i class="fas fa-trash-alt"></i></button>
        </div>
      </formly-group>
    </div>
    <div style="margin:30px 0;">
      <button class="btn btn-primary" type="button" (click)="add()">
      <i class="fas fa-plus"></i>
      </button>
    </div>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }
}
