import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  form = new FormGroup({});
  options: FormlyFormOptions = {};

  model = {
    firstName: 'Joan',
    lastName: 'of Arc',
    address: [{}]
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        label: 'First Name'
      }
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        label: 'Last Name'
      }
    },
    {
      key: 'marvel1',
      type: 'select',
      defaultValue: 'iron_man',
      templateOptions: {
        label: 'Normal Select',
        options: [
          { label: 'Iron Man', value: 'iron_man' },
          { label: 'Captain America', value: 'captain_america' },
          { label: 'Black Widow', value: 'black_widow' },
          { label: 'Hulk', value: 'hulk' },
          { label: 'Captain Marvel', value: 'captain_marvel' }
        ]
      }
    },
    {
      key: 'address',
      wrappers: ['panel'],
      templateOptions: { label: 'Address' },
      type: 'repeat',
      fieldArray: {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-sm-4',
            key: 'town',
            type: 'input',
            templateOptions: {
              required: true,
              type: 'text',
              label: 'Town'
            }
          },
          {
            key: 'area',
            type: 'input',
            templateOptions: {
              required: true,
              type: 'text',
              label: 'Area'
            }
          }
        ]
      }
    },
    {
      key: 'mac',
      type: 'input',
      templateOptions: {
        label: 'Mac Address'
        // pattern: '([0-9A-F]{2}[:-]){5}([0-9A-F]{2})'
      }
    },
    {
      key: 'color',
      type: 'radio',
      templateOptions: {
        label: 'Color Preference (try this out)',
        options: [
          {
            label: 'No Preference',
            value: null
          },
          {
            label: 'Green',
            value: 'green'
          },
          {
            label: 'Blue',
            value: 'blue'
          }
        ]
      }
    },
    {
      key: 'buildType',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Choose Build Type',
        'options': [
          {
             'value': 'Manual',
             'key': 'MANUAL'
          },
          {
             'value': 'Auto',
             'key': 'AUTO'
          },
          {
             'value': 'Always Ask',
             'key': 'ASK'
          }
       ]
      }
    },
    {
      key: 'reason',
      type: 'textarea',
      templateOptions: {
        label: 'Why?'
      },
      expressionProperties: {
        'templateOptions.label': '\'Why did you choose \' + model.color + \'?\''
      },
      hideExpression: '!model.color'
    }
  ];

  constructor() {}

  ngOnInit() {}
  submit(model) {
    console.log(model);
  }
}
