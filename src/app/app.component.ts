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

  ngOnInit(): void {}
}
