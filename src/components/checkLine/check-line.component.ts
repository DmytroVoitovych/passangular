import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { spec, kirilik, regS, regSN, regSW } from './objRegex';
@Component({
  selector: 'check-line',
  templateUrl: './check-line.component.html',
  styleUrls: ['./check-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckLine {
  @Input() value: any = { pass: '' };
  @Input() valid: boolean = false || true;
  constructor() {}

  validation() {
    if (this.value.pass) {
      if (
        this.value?.pass.match(kirilik) &&
        this.value?.pass.match(spec) &&
        this.value.pass.length >= 8
      ) {
        return 'strong';
      }

      if (
        (this.value?.pass.match(regSN) ||
          this.value?.pass.match(regSW) ||
          this.value?.pass.match(regS)) &&
        !this.valid &&
        this.value.pass.length >= 8
      ) {
        return 'average';
      } else if (this.valid) {
        return 'strong';
      } else {
        return 'easy';
      }
    }

    return;
  }
}
