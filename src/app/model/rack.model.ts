import { Tile } from "./tile.model";

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
         let i = this.rack.findIndex( r => r.getLetter() == t.getLetter());
          if (i > -1)
              this.rack.splice(i, 1);
    })
  }

  public getTileCount(): number {
    return this.rack.length;
  }
}
