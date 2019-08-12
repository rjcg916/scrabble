import { Rack } from './rack.model';
import { Tile } from './tile.model';
import { Board, Move, placement } from './board.model';
import { coord } from './coord.model';
import { Util } from './util';

export class MoveResult {

  constructor(private isValid : boolean,
              private errorMessages : Array<string>,
              private score : number) {}
}

export class Player {
  private rack: Rack;
  constructor(public name?: string) {
    this.rack = new Rack();
  }

  public DrawTiles(availableTiles: Array<Tile>): Array<Tile> {
    return this.rack.FillWithTiles(availableTiles);
  }

  public Move(theBoard: Board, startAt: coord, letters: string, placement: placement) : MoveResult {

    let tiles = Util.LettersToTiles(letters);
    
    // Move: proposed move
    //  are letters in rack?
    //  proposed placment
    //  what runs does placement generate
    //    are all runs valid words?
    //
    //  score the move
    //  remove the tiles from rack
    //  draw new tiles

    return new MoveResult(true, new Array<string>(), 50);
  }

  public PlaceTiles(move : Move) {
    //place tiles

  }

}
