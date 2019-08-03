import {Tile} from '../../src/models/tile.model';

const aTile : Tile = new Tile("A");
console.log(aTile.display());
const zTile : Tile = new Tile("Z");
console.log(zTile.display());
const blankTile : Tile = new Tile("");
console.log(blankTile.display());