import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'inform-p',
  templateUrl: './inform-p.component.html',
  styleUrls: ['./inform-p.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformNotice {
  @Input() length: number = 0;
  @Input() check: boolean = true;

  public optLength: string = `Minimum symbols 8`;
  public optPattern: string =
    'Your password must be specific [letter,number,specsymbol]';
}
