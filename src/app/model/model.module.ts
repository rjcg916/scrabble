import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestLexicon, REST_URL } from '../service/rest.lexicon';

@NgModule({
  imports : [HttpClientModule],
  providers: [RestLexicon, {provide: REST_URL, useValue: 'https://wordsapiv1.p.mashape.com/words'}]
})
export class ModelModule {}
