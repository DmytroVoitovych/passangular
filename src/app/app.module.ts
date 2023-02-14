import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CheckLine } from 'src/components/checkLine/check-line.component';
import { PassInputComponent } from 'src/components/pass/pass-input.component';
import { InformNotice } from 'src/components/inform/inform-p.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, PassInputComponent, CheckLine, InformNotice],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
