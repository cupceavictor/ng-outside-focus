/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgOutsideFocusModule }  from 'ng-outside-focus';

@Component({
  selector: 'app',
  template: `<div>
                <h2 (ngOutsideFocus)="actionOnOutsideFocus()">Lorem ipsum dolor sit amet...</h2>
                <h2>Lorem ipsum dolor sit amet...</h2>
            </div>`
})
class AppComponent {

  constructor() {
  }


  actionOnOutsideFocus() {
    console.log('Outside click detected!');
  }

}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, NgOutsideFocusModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
