import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

// tslint:disable:quotemark
// tslint:disable:whitespace
const sample = [
  {
    "label": "Tab1",
    "fields": [
      {
        "key":"firstName",
        "type": "input",
        "templateOptions":{
          "label":"First Name"
        }
      },
      {
        "key":"lastName",
        "type":"input",
        "templateOptions":{
          "label":"Last Name"
        }
      },
      {
        "key":"marvel1",
        "type":"select",
        "defaultValue":"iron_man",
        "templateOptions":{
          "label":"Normal Select",
          "options":[
            {
              "label":"Iron Man",
              "value":"iron_man"
            },
            {
              "label":"Captain America",
              "value":"captain_america"
            },
            {
              "label":"Black Widow",
              "value":"black_widow"
            },
            {
              "label":"Hulk",
              "value":"hulk"
            },
            {
              "label":"Captain Marvel",
              "value":"captain_marvel"
            }
          ]
        }
      }
    ]
  },
  {
    "label": "tab2",
    "fields": [
      {
        "key":"color",
        "type":"radio",
        "templateOptions":{
          "label":"Color Preference (try this out)",
          "options":[
            {
              "label":"No Preference",
              "value":null
            },
            {
              "label":"Green",
              "value":"green"
            },
            {
              "label":"Blue",
              "value":"blue"
            }
          ]
        }
      },
      {
        "key":"buildType",
        "type":"multicheckbox",
        "templateOptions":{
          "label":"Choose Build Type",
          "options":[
            {
              "value":"Manual",
              "key":"MANUAL"
            },
            {
              "value":"Auto",
              "key":"AUTO"
            },
            {
              "value":"Always Ask",
              "key":"ASK"
            }
          ]
        }
      },
      {
        "key":"reason",
        "type":"textarea",
        "templateOptions":{
          "label":"Why?"
        },
        "expressionProperties":{
          "templateOptions.label":"'Why did you choose ' + model.color + '?'"
        },
        "hideExpression":"!model.color"
      }
    ]
  },
  {
    "label": "tab3",
    "fields": [
      {
        "key":"address",
        "wrappers":[
          "panel"
        ],
        "templateOptions":{
          "label":"Address"
        },
        "type":"repeat",
        "fieldArray":{
          "templateOptions":{
            "addBtnText": "Add Other Address",
            "max": 5
          },
          "fieldGroup":[
            {
              "key":"town",
              "type":"input",
              "templateOptions":{
                "required":true,
                "type":"text",
                "label":"Town"
              }
            },
            {
              "key":"area",
              "type":"input",
              "templateOptions":{
                "required":true,
                "type":"text",
                "label":"Area"
              }
            }
          ]
        }
      },
      {
        "key":"mac",
        "type":"input",
        "templateOptions":{
          "label":"Mac Address"
        }
      }
    ]
  }
];


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  json = JSON.parse(JSON.stringify(sample));
  fields = JSON.parse(JSON.stringify(sample));
  output = '';

  constructor() { }

  onChange(value) {
    this.form = new FormGroup({});
    this.fields = JSON.parse(JSON.stringify(value));
  }
  submit() {
    this.output = JSON.stringify(this.form.value);
  }
}
