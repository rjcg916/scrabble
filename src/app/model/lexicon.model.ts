export interface ILexicon {
  validWord(word: string) : boolean;
}

export class Lexicon implements ILexicon {


  private words = new Array<string>();

  constructor() {
    this.words.push("bob");
    this.words.push("dianne");
  }

   public validWord( word : string) : boolean {
     return this.words.indexOf(word) > -1;
  }
}
