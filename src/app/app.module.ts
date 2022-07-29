import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ListComponent } from './list/list.component';
import { ClearAllComponent } from './clear-all/clear-all.component';
import { FormsModule } from '@angular/forms';
import { BtnClearallDirective } from './btn-clearall.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BtnClearallDirective,
  ],  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule

  ],
  providers: [ClearAllComponent, ListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
