import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppComponent } from './app.component';
import {GameComponent} from './game/game.component';
import {BoardComponent} from './board/board.component';
import {PlayerComponent} from './player/player.component'
import {RackComponent} from './rack/rack.component';
import {SquareDirective} from './square.directive';
import {RestLexicon, REST_URL} from './service/rest.lexicon';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    GameComponent, BoardComponent, PlayerComponent, SquareDirective, RackComponent
  ],
  imports: [
    [BrowserModule, HttpClientModule]
  ],
  providers: [RestLexicon, {provide : REST_URL, useValue:"https://wordsapiv1.p.mashape.com/words"}],
  bootstrap: [GameComponent]
})
export class AppModule { }
