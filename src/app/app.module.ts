import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppComponent } from './app.component';
import {GameComponent} from './component';
import {BoardComponent} from './board.component';
import {PlayerComponent} from './player.component'

@NgModule({
  declarations: [
    [GameComponent, BoardComponent, PlayerComponent]
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GameComponent]
})
export class AppModule { }
