import { Tile } from "./tile.model";

export class Rack {
  private _rack: Tile[];
  public static capacity: number = 7;

  constructor() {
    this._rack = new Array<Tile>();
  }


  AddTiles(tiles: Array<Tile>): Array<Tile> {
    let tilesNeeded = Rack.capacity - this._rack.length;
    let tilesAvailable = tiles.length;

    let drawCount = tilesAvailable > tilesNeeded ? tilesNeeded : tilesAvailable;
    let tilesToAdd = tiles.splice(0, drawCount);

    this._rack = this._rack.concat(tilesToAdd);

    return tiles;
  }

  RemoveTiles(tiles: Array<Tile>) {
    tiles.forEach(t => {
      let i = this._rack.findIndex(r => r.letter == t.letter);
      if (i > -1)
        this._rack.splice(i, 1);
    })
  }

  allTilesInRack?(tiles: Array<Tile>): boolean {

    // need to create copy to handle duplicate letters
    let copyOfRack = new Array<Tile>();
    for (let i in this._rack) {
      copyOfRack[i] = new Tile(this._rack[i].letter);
    }

    // make sure each tile letter found in rack
    let allLettersFound = true;

    tiles.forEach(t => {
      let i = copyOfRack.findIndex(r => r.letter == t.letter);
      if (i < 0) {// letter not found
        allLettersFound = false;
       return false;
      } else { // remove letter and keep checking
        copyOfRack.splice(i, 1)
      }
    })

    return allLettersFound;
  }

  get TileCount(): number {
    return this._rack.length;
  }

  get Tiles(): Array<Tile> {
      return this._rack;
  }
}
