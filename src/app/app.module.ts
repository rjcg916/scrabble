import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppComponent } from './app.component';
import {GameComponent} from './component';
import {BoardComponent} from './board.component';
import {PlayerComponent} from './player.component'
import {RackComponent} from './rack.component';
import {SquareDirective} from './square.directive';

@NgModule({
  declarations: [
    GameComponent, BoardComponent, PlayerComponent, SquareDirective, RackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GameComponent]
})
export class AppModule { }
