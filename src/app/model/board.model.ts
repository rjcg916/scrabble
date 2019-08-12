import { Square, SquareType } from './square.model';
import { SquareCount, row, col, coord, Span } from './coord.model';
import { Tile } from './tile.model';
import { Util } from './util';
import { Lexicon } from './lexicon.model';
import { Move, placement } from './move.model';



export class Board {
  private board: Square[][];

  constructor() {
    this.board = [];

    // create squares
    for (let r: row = row._1; r <= row._15; r++) {
      this.board[r] = [];
      for (let c: col = col._A; c <= col._O; c++) {
        this.board[r][c] = new Square();
      }
    }

    // set square values

    // start
    this.board[row._8][col._H].SetType(SquareType.start);

    // double letters
    this.doubleLetter(SquareType.dl);

    // triple letters
    this.tripleLetter(SquareType.tl);

    // double word
    this.doubleWord(SquareType.dw);

    // triple word
    this.tripleWord();

  }


  public getWordFromSquares(start: coord, end: coord): string {

    let aString: string = "";

    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        // todo: handle missing tile
        let square = this.board[r][c];
        if (square.isOccupied())
          aString = aString.concat(square.getTile().getLetter());
        else
          return "";
      }
    }

    return aString;

  }

  // public findRunHorizontal(start: coord, end: coord): Span {
  //   let slice = new Array<Square>(SquareCount);
  //
  //    let row = start.row;
  //
  //    for (let c = col._A; c <= col._O; c++)
  //      slice[c] = this.board[row][c];
  //
  //    let endpoints = Util.generateRun(slice, start.col, end.col);
  //
  //    if (endpoints == null)
  //      return null;
  //
  //    return { start: { row: row, col: endpoints.start },
  //             end: { row: row, col: endpoints.end } };
  //  }

  //  public findRunVertical(start: coord, end: coord) {
  //    let slice = new Array<Square>(SquareCount);
  //
  //    let col = start.col;
  //
  //    for (let r = row._1; r <= row._15; r++)
  //      slice[r] = this.board[r][col];
  //
  //    let endpoints = Util.generateRun(slice, start.row, end.row);
  //
  //    if (endpoints == null)
  //      return null;
  //
  //    return { start: { row: endpoints.start, col: col },
  //             end: { row: endpoints.end, col: col } };
  //  }

  //  public findSecondaryRunHorizontal(start: coord): Span {
  //    return this.findRunHorizontal(start, start);
  //  }

  //  public findSecondaryRunVertical(start: coord): Span {
  //    return this.findRunVertical(start, start);
  //  }

  public candidateWords(theMove: Move): Array<string> {
    // generate a list of words created by move

    return new Array<string>();
  }

  public allValidWords(words: Array<string>): boolean {
    let lexicon = new Lexicon();
    // for each candidate, check
    words.forEach(w => {
      if (!lexicon.isWordValid(w))
        return false;
    })
    return true;
  }


  public squaresVacant?(start: coord, end: coord): boolean {

    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        if (this.board[r][c].isOccupied())
          return false;
      }
    }

    return true;
  }

  public getPlacmentValue(start: coord, end: coord): number {

    let letterValue: number = 0;

    // letter based value - compute value of words based upon letters
    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        let square = this.board[r][c];
        letterValue += (square.getLetterMultiplier() * square.getTile().getValue());
      }
    }


    // word based value : compute word-based multipler
    let wordMultiplier: number = 1;
    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        let square = this.board[r][c];
        wordMultiplier *= square.getWordMultiplier();
      }
    }

    // apply wordMultipler to letterValue for final value
    return letterValue * wordMultiplier
  }

  public getPlacementType(tiles: Array<Tile>, start: coord, end: coord): placement {

    let horizontal: boolean = start.row === end.row;
    let horizontalNumberOfTiles: number = end.col - start.col + 1;
    let vertical: boolean = start.col === end.col;
    let verticalNumberOfTiles: number = end.row - start.row + 1;
    let oneTile: boolean = horizontal && vertical;
    let numberOfTiles: number = tiles.length;

    if (horizontal && vertical && (!oneTile))
      return placement.invalid
    else {
      if (horizontal && (horizontalNumberOfTiles === numberOfTiles))
        return placement.horizontal
      else if (vertical && (verticalNumberOfTiles === numberOfTiles))
        return placement.vertical
      else
        return placement.invalid
    }

  }

  public PlaceTilesVertical(start: coord, tiles: Array<Tile>): number {
    let row = start.row - 1;
    tiles.forEach(t => {
      this.board[++row][start.col].Place(t);
    })
    return row;
  }


  public PlaceTilesHorizontal(start: coord, tiles: Array<Tile>): number {
    let col = start.col - 1;
    tiles.forEach(t => {
      this.board[start.row][++col].Place(t);
    })
    return col;
  }

 // public PlaceTiles(start: coord, tiles: Array<Tile>, tilePlacement: placement): number {
 //   // return last index
 //   switch (+tilePlacement) {
 //     case placement.vertical: {
 //       let row = start.row - 1;
 //       tiles.forEach(t => {
//        this.board[++row][start.col].Place(t);
//        })
//        return row;
//        break;
//      }
//      case placement.horizontal: {
//        let col = start.col - 1;
//        tiles.forEach(t => {
//          this.board[start.row][++col].Place(t);
//        })
//        return col;
//        break;
//      }
//      case placement.invalid: {
//        return 0;
//        break;
//      }
//    }
//  }

  public getOccupiedCount(): number {
    let count: number = 0;

    for (let r: row = row._1; r <= row._15; r++) {
      for (let c: col = col._A; c <= col._O; c++) {
        count = this.board[r][c].isOccupied() ? count + 1 : count;
      }
    }

    return count;
  }


  private SetSquareValue(locs: Array<coord>, t: SquareType) {
    locs.forEach(square => {
      this.board[square.row][square.col].SetType(t)
    });
  }

  private tripleWord() {
    this.SetSquareValue(
      [
        new coord(row._1, col._A),
        new coord(row._1, col._H),
        new coord(row._1, col._O),

        new coord(row._8, col._A),
        new coord(row._8, col._O),

        new coord(row._15, col._A),
        new coord(row._15, col._H),
        new coord(row._15, col._O)
      ]
      , SquareType.tw
    )
  }

  private doubleWord(t: SquareType) {

    this.board[row._2][col._B].SetType(t);
    this.board[row._2][col._N].SetType(t);

    this.board[row._3][col._C].SetType(t);
    this.board[row._3][col._M].SetType(t);

    this.board[row._4][col._D].SetType(t);
    this.board[row._4][col._L].SetType(t);

    this.board[row._5][col._E].SetType(t);
    this.board[row._5][col._K].SetType(t);

    this.board[row._14][col._B].SetType(t);
    this.board[row._14][col._N].SetType(t);

    this.board[row._13][col._C].SetType(t);
    this.board[row._13][col._M].SetType(t);

    this.board[row._12][col._D].SetType(t);
    this.board[row._12][col._L].SetType(t);

    this.board[row._11][col._E].SetType(t);
    this.board[row._11][col._K].SetType(t);

  }

  private doubleLetter(t: SquareType) {

    this.board[row._1][col._D].SetType(t);
    this.board[row._1][col._L].SetType(t);

    this.board[row._3][col._G].SetType(t);
    this.board[row._3][col._I].SetType(t);

    this.board[row._4][col._A].SetType(t);
    this.board[row._4][col._H].SetType(t);
    this.board[row._4][col._O].SetType(t);

    this.board[row._7][col._C].SetType(t);
    this.board[row._7][col._G].SetType(t);
    this.board[row._7][col._I].SetType(t);
    this.board[row._7][col._M].SetType(t);

    this.board[row._8][col._D].SetType(t);
    this.board[row._8][col._L].SetType(t);

    this.board[row._9][col._C].SetType(t);
    this.board[row._9][col._G].SetType(t);
    this.board[row._9][col._I].SetType(t);
    this.board[row._9][col._M].SetType(t);

    this.board[row._12][col._A].SetType(t);
    this.board[row._12][col._H].SetType(t);
    this.board[row._12][col._O].SetType(t);

    this.board[row._13][col._G].SetType(t);
    this.board[row._13][col._I].SetType(t);

    this.board[row._15][col._D].SetType(t);
    this.board[row._15][col._L].SetType(t);

  }

  private tripleLetter(t: SquareType) {

    this.board[row._2][col._F].SetType(t);
    this.board[row._2][col._J].SetType(t);

    this.board[row._6][col._B].SetType(t);
    this.board[row._6][col._F].SetType(t);
    this.board[row._6][col._J].SetType(t);
    this.board[row._6][col._N].SetType(t);

    this.board[row._14][col._F].SetType(t);
    this.board[row._14][col._J].SetType(t);

    this.board[row._10][col._B].SetType(t);
    this.board[row._10][col._F].SetType(t);
    this.board[row._10][col._J].SetType(t);
    this.board[row._10][col._N].SetType(t);

  }

}
