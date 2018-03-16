import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOutsideFocusDirective } from './ng-outside-focus.directive';

export * from './ng-outside-focus.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      NgOutsideFocusDirective
  ],
  exports: [
      NgOutsideFocusDirective
  ]
})
export class NgOutsideFocusModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgOutsideFocusModule,
      providers: []
    };
  }
}
