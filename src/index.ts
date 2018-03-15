import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutsideClickDirective } from './outside-click.directive';

export * from './outside-click.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      OutsideClickDirective
  ],
  exports: [
      OutsideClickDirective
  ]
})
export class OutsideClickModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: OutsideClickModule,
      providers: []
    };
  }
}
