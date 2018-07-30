import { Component } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  styles: [`
    .disabled {
      cursor: not-allowed;
    }
  `],
  template: `
    <div class="repeat-item mb-2" *ngFor="let field of field.fieldGroup; let i = index;">
      <formly-group
        [model]="model[i]"
        [field]="field"
        [options]="options"
        [form]="formControl">
        <div class="row">
          <div class="col-sm-12">
            <button class="btn btn-danger float-right" type="button" (click)="remove(i)"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
      </formly-group>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <button class="btn btn-success" type="button" (click)="add()"
        [disabled]="disableAddButton()" [ngClass]="{disabled: disableAddButton()}">
          <i class="fas fa-plus"></i>
          <ng-container *ngIf="field.fieldArray['templateOptions'] && field.fieldArray['templateOptions']['addBtnText']">
            {{ field.fieldArray['templateOptions']['addBtnText'] }}
          </ng-container>
        </button>
      </div>
    </div>
  `
})
export class RepeatTypeComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  disableAddButton() {
    if (
      this.field.fieldArray['templateOptions'] &&
      this.field.fieldArray['templateOptions']['max'] &&
      this.field.fieldGroup['length'] >= this.field.fieldArray['templateOptions']['max']
    ) {
      return true;
    } else {
      return false;
    }
  }
}
