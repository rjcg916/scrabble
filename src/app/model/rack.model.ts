import { Tile } from "./tile.model";

export class Slot {
  constructor(private _tile : Tile = null)
  {
    this._tile = _tile;
  }
  set tile(aTile : Tile) {
    this._tile = aTile;
  }
}

export class Rack {
 private _rack : Slot[];
 private tileCount : number = 0;
 public static capacity: number = 7;

  constructor() {
    this._rack = new Array<Slot>(Rack.capacity);
    this._rack[0].tile = new Tile("A", 1);
    this._rack[1].tile = new Tile("C", 1);

  }


  AddTiles(tiles: Array<Tile>): Array<Tile> {
    let tilesNeeded = Rack.capacity - this.tileCount;
    let tilesAvailable = tiles.length;

    let drawCount = tilesAvailable > tilesNeeded ? tilesNeeded : tilesAvailable;
    let tilesToAdd = tiles.splice(0, drawCount);

    tilesToAdd.forEach( (t) => {
        this._rack[this.tileCount++ ].tile = t;
    })

    return tiles;
  }

  RemoveTiles(tiles: Array<Tile>) {
    tiles.forEach(t => {
      let i = this._rack.findIndex(r => r.tile.letter == t.letter);
      if (i > -1)
        this._rack.splice(i, 1);
    })
  }

  allTilesInRack?(tiles: Array<Tile>): boolean {

    // need to create copy to handle duplicate letters
    let copyOfRack = new Array<Tile>();
    for (let i in this._rack) {
      copyOfRack[i] = new Tile(this._rack[i].tile.letter);
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
    return this.TileCount;
  }

  get Tiles(): Array<Slot> {
      return this._rack;
  }
}
