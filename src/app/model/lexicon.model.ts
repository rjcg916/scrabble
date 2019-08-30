export interface ILexicon {
  isWordValid(word: string) : boolean;
}

export class Lexicon implements ILexicon {


  private _words = new Array<string>();

  constructor() {
    this._words.push("bob");
    this._words.push("dianne");
  }

  isWordValid( word : string) : boolean {
     return this._words.indexOf(word) > -1;
  }

  allValidWords(words: Array<string>): boolean {
    // for each candidate, check
    words.forEach(w => {
      if (!this.isWordValid(w))
        return false;
    })
    return true;
  }

}
