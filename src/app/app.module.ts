import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { PanelWrapperComponent } from './panel.wrapper.component';
import { RepeatTypeComponent } from './repeat-section.type';

import { JSONEditorModule } from 'ngx-jsoneditor';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    PanelWrapperComponent,
    RepeatTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    JSONEditorModule,
    FormlyModule.forRoot(
      {
        wrappers: [
          { name: 'panel', component: PanelWrapperComponent },
        ],
        types: [
          { name: 'repeat', component: RepeatTypeComponent },
        ]
      }
    ),
    FormlyBootstrapModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
