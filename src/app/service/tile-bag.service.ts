import { Tile } from '../model/tile.model';

class Letter {
  constructor(public name: string, public value: number, public frequency : number){
  }
}


export class TileBagService {

  private static letters : Array<Letter> =
  [
    new Letter("A", 1, 9),
    new Letter("B", 3, 2),
    new Letter("C", 3, 2),
    new Letter("D", 2, 4),
    new Letter("E", 1, 12),
    new Letter("F", 4, 2),
    new Letter("G", 2, 3),
    new Letter("H", 4, 2),
    new Letter("I", 1, 9),
    new Letter("J", 8, 1),
    new Letter("K", 5, 1),
    new Letter("L", 1, 4),
    new Letter("M", 3, 2),
    new Letter("N", 1, 6),
    new Letter("O", 1, 8),
    new Letter("P", 3, 2),
    new Letter("Q", 10, 1),
    new Letter("R", 1, 6),
    new Letter("S", 1, 4),
    new Letter("T", 1, 6),
    new Letter("U", 1, 4),
    new Letter("V", 4, 2),
    new Letter("W", 4, 2),
    new Letter("X", 8, 1),
    new Letter("Y", 4, 2),
    new Letter("Z", 10, 1),
    new Letter("", 0, 2)
  ]

  public GetTiles(): Array<Tile> {

    let tiles: Array<Tile> = new Array<Tile>();

    TileBagService.letters.forEach( letter => {
      for (let c: number = 0; c < letter.frequency; c++) {
        tiles.push(new Tile(letter.name, letter.value));
      }
    })

    return tiles;
  }

}
