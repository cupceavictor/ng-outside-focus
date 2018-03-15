/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { OutsideClickModule }  from 'outside-click';

@Component({
  selector: 'app',
  template: `<div>
                <h2 (outsideClick)="actionOnOutsideClick()">Lorem ipsum dolor sit amet...</h2>
                <h2>Lorem ipsum dolor sit amet...</h2>
            </div>`
})
class AppComponent {

  constructor() {
  }


  actionOnOutsideClick() {
    console.log('Outside click detected!');
  }

}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, OutsideClickModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
