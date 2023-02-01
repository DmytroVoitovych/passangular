import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'passanangular';

  form = new FormGroup({
    pass: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/(?=.*[0-9])(?=.*[\W])(?=.*[\w])[\w!@#$%^&*]{8,}/),
    ]),
  });

  constructor() {}

  get pass() {
    return this.form.controls.pass as FormControl;
  }

  validation() {
    if (this.pass.value) {
      const spec = /(?=.*[^\w\s])/g;
      const kirilik =
        /(?=.*[0-9])(?=.*[!@?#"$%&:;() *\+,\/;\-=[\\\]\^_{|}<>])(^[A-Za-z.!@?#"$%&:;() *\+,\/;\-=[\\\]\^_{|}<>\u0400-\u04FF]*){1,}/g;

      if (
        this.pass.value.match(kirilik) &&
        this.pass.value.match(spec) &&
        this.pass.value.length >= 8
      ) {
        return 'strong';
      }

      const regSN = /(?=.*[0-9])(?=.*[\W]){8,}/g;
      const regSW = /(?=.*[0-9])(?=.*[a-zZ-a]){8,}/g;
      const regS = /(?=.*[\W])(?=.*[\w]){8,}/g;

      if (
        (this.pass.value.match(regSN) ||
          this.pass.value.match(regSW) ||
          this.pass.value.match(regS)) &&
        this.pass.errors &&
        this.pass.value.length >= 8
      ) {
        return 'average';
      } else if (!this.pass.errors) {
        return 'strong';
      } else {
        return 'easy';
      }
    }

    return;
  }

  ngOnInit(): void {}
}
