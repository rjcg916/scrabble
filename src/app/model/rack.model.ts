import { Tile } from "./tile.model";
import { all } from "q";

export class Rack {
  private rack: Tile[];
  public static capacity: number = 7;
  constructor() {
    this.rack = new Array<Tile>();
  }



  public FillWithTiles(tileSource: Array<Tile>): Array<Tile> {
    let tilesNeeded = Rack.capacity - this.rack.length;
    let tilesAvailable = tileSource.length;

    let drawCount = tilesAvailable > tilesNeeded ? tilesNeeded : tilesAvailable;
    let tilesToAdd = tileSource.splice(0, drawCount);

    this.rack = this.rack.concat(tilesToAdd);

    return tileSource;
  }

  public RemoveTiles(tilesToRemove: Array<Tile>) {
    tilesToRemove.forEach(t => {
      let i = this.rack.findIndex(r => r.getLetter() == t.getLetter());
      if (i > -1)
        this.rack.splice(i, 1);
    })
  }

  public allTilesInRack?(tiles: Array<Tile>): boolean {

    // need to create copy to handle duplicate letters
    let copyOfRack = new Array<Tile>();
    for (let i in this.rack) {
      copyOfRack[i] = new Tile(this.rack[i].getLetter())
    }

    // make sure each tile letter found in rack
    let allLettersFound = true;

    tiles.forEach(t => {
      let i = copyOfRack.findIndex(r => r.getLetter() == t.getLetter());
      if (i < 0) {// letter not found
        allLettersFound = false;
       return false;
      } else { // remove letter and keep checking
        copyOfRack.splice(i, 1)
      }
    })

    return allLettersFound;
  }

  public getTileCount(): number {
    return this.rack.length;
  }
}
