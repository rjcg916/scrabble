import { Rack } from './rack.model';
import { Tile } from './tile.model';
import { Board, Move, placement } from './board.model';
import { coord } from './coord.model';
import { Util } from './util';


interface MoveResult {
  isValid: boolean;
  errorMessages: Array<string>;
  score: number;
}

export class Player {
  private rack: Rack;
  constructor(public name?: string) {
    this.rack = new Rack();
  }

  public DrawTiles(availableTiles: Array<Tile>): Array<Tile> {
    return this.rack.FillWithTiles(availableTiles);
  }

  private EndForMove(start: coord, count: number, orientation: placement): coord {
    let end: coord;
    if (orientation == placement.horizontal) {
      end = new coord(start.row, start.col + count);
    } else if (orientation == placement.vertical) {
      end = new coord(start.row + count, start.col)
    }
    return end;
  }

  public Move(theBoard: Board, start: coord, letters: string, orientation: placement): MoveResult {

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

    let allTilesInRack = this.rack.allTilesInRack(tiles);
    if (!allTilesInRack)
      throw new Error('Specified tiles not in Rack.');

    let end = this.EndForMove(start, letters.length, orientation);

    let squaresVacant = theBoard.squaresVacant(start, end)
    if (!squaresVacant)
      throw new Error('Specified squares not vacant');

     switch (orientation) {
      case placement.horizontal : {
        let horizontalSpan = theBoard.findRunHorizontal(start, end)
        // for all cols,
        theBoard.findSecondaryRunVertical()
      }
      case placement.vertical : {
        let verticalSpan = theBoard.findRunVertical(start, end)
        // for all rows
        theBoard.findSecondaryRunHorizontal()
      }

    }

     return { isValid: true, errorMessages: Array<string>(), score: 50 };

  }

  public PlaceTiles(move: Move) {
    //place tiles

  }

}
