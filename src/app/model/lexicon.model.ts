import { Word } from './word.model';

export class Lexicon {
  constructor(private words: Array<Word>) {
    words.push(new Word("bob"));
  }
}
