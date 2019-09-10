import { Tile } from "./tile.model";

export class Slot {
  private _tile : Tile;
  constructor() {
    this._tile = null;
  }
  set tile(tile: Tile) {
    this._tile = tile;
  }
  get tile(): Tile {
    return this._tile;
  }

  ShowSlot() : string {
    if (this._tile) {
      return this._tile.letter;
    }
    return "_";
  }
}

export class Rack {
  private _rack: Slot[] = [];
  private _tileCount: number = 0;
  public static capacity: number = 7;
  constructor() {
    for (let i = 0; i < Rack.capacity; i++) {
      this._rack.push(new Slot());
    }
  }


  AddTiles(tiles: Array<Tile>): Array<Tile> {
    let tilesNeeded = Rack.capacity - this._tileCount;
    let tilesAvailable = tiles.length;
    let drawCount = tilesAvailable > tilesNeeded ? tilesNeeded : tilesAvailable;

    let tilesToAdd = tiles.splice(0, drawCount);

    tilesToAdd.forEach((t) => {
      this._rack[this._tileCount].tile = t;
      if (this._tileCount < this._rack.length) this._tileCount++;
    })

    return tiles;
  }

  RemoveTiles(tiles: Array<Tile>) {
    tiles.forEach(t => {
      let i = this._rack.findIndex(r => r.tile.letter == t.letter);
      if (i > -1) {
        this._rack.splice(i, 1);
        this._tileCount--;
      }
    })
  }

  allTilesInRack?(tiles: Array<Tile>): boolean {

    // create copy to handle duplicate letters
    let copyOfRack = new Array<Tile>();
    for (let i in this._rack) {
      if (this._rack[1].tile) {
        copyOfRack[i] = new Tile(this._rack[i].tile.letter);
      }
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
    return this._tileCount;
  }

  get slots(): Array<Slot> {
    return this._rack;
  }
}
