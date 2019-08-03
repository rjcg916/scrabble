import { Tile } from "./tile.model";

export class Rack {
  private rack: Tile[];
  private static tileCount: number = 7;
  constructor() {
    this.rack = new Array<Tile>();
  }

  public Display(): string {
    let list: string = "";
    this.rack.forEach((element) => {
      list =  list.concat(element.display());
    });
    return list;
  }

  public AddTile(newTile: Tile): number {
    if (this.rack.length < Rack.tileCount) {
      this.rack.push(newTile);
      return 1;
    } else {
      return 0;
    }
  }
}