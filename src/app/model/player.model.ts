import { Rack } from './rack.model';
import { Tile } from './tile.model';
import { Board } from './board.model';
import { Move, HorizontalMove, VerticalMove } from './move.model';
import { coord } from './coord.model';
import { Util, placement } from './util.model';


interface MoveResult {
  isValid: boolean;
  errorMessages: Array<string>;
  score: number;
}

export class Player {
  private _rack: Rack;
  constructor(private _name?: string) {
    this._rack = new Rack();
  }

  get name() {
    return this._name;
  }

  get rack() {
    return this._rack;
  }

  getRack() {
    return this._rack;
  }

  DrawTiles(tiles: Array<Tile>): Array<Tile> {
    return this._rack.AddTiles(tiles);
  }

  // private EndForMove(start: coord, count: number, orientation: placement): coord {
  //   let end: coord;
  //   if (orientation == placement.horizontal) {
  //     end = new coord(start.row, start.col + count);
  //   } else if (orientation == placement.vertical) {
  //     end = new coord(start.row + count, start.col)
  //   }
  //   return end;
  // }

  Move(theBoard: Board, start: coord, letters: string, orientation: placement): MoveResult {

    // Move: proposed move
    //  are letters in rack?
    //  proposed placment
    //  what runs does placement generate
    //    are all runs valid words?
    //
    //  score the move
    //  remove the tiles from rack
    //  draw new tiles


    let tiles = Util.LettersToTiles(letters);

    let allTilesInRack = this._rack.allTilesInRack(tiles);
    if (!allTilesInRack)
      throw new Error('Specified tiles not in Rack.');


    let squaresVacant: boolean;

    switch (orientation) {
      case placement.horizontal: {
        let move = new HorizontalMove(theBoard, start, letters);

        //   let horizontalSpan = theBoard.findRunHorizontal(start, end)
        // for all cols,
        //  theBoard.findSecondaryRunVertical()
        squaresVacant = theBoard.squaresVacant(start, move.getEndCoord());
        break;
      }
      case placement.vertical: {
        let move = new VerticalMove(theBoard, start, letters);
        //        let verticalSpan = theBoard.findRunVertical(start, end)
        // for all rows
        //        theBoard.findSecondaryRunHorizontal()

        // let end = this.EndForMove(start, letters.length, orientation);
        squaresVacant = theBoard.squaresVacant(start, move.getEndCoord());
        break;
      }
    }
    if (!squaresVacant)
      throw new Error('Specified squares not vacant');



    return { isValid: true, errorMessages: Array<string>(), score: 50 };

  }

  PlaceTiles(move: Move) {
    //place tiles

  }

}
