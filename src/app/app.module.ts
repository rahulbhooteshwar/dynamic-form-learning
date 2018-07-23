import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { PanelWrapperComponent } from './panel.wrapper.component';
import { RepeatTypeComponent } from './repeat-section.type';

@NgModule({
  declarations: [
    AppComponent,
    PanelWrapperComponent,
    RepeatTypeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
    FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
