import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  ChangeDetectorRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'pass-input',
  templateUrl: './pass-input.component.html',
  styleUrls: ['./pass-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      //реєструю токен і компонент
      provide: NG_VALUE_ACCESSOR, //орієнтир для логіки ангуляр
      useExisting: forwardRef(() => PassInputComponent), // лінк на компонент
      multi: true,
    },
  ],
})
//грубо кажучі імплементація дає доступ до методів керування інпутом
export class PassInputComponent implements ControlValueAccessor {
  public value: string | undefined;

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  constructor(private readonly changeDetector: ChangeDetectorRef) {}

  public onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;
    this.onChange(value);
  }

  public writeValue(value: string) {
    // реагує на ввод данних
    this.value = value;

    this.changeDetector.detectChanges();
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    //вказує нам що користувач вже взаємодіяв з формою і ми можемо її провалідувати
    this.onTouched = fn;
  }
}
