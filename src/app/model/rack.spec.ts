import {Tile} from '../../src/models/tile.model';
import {Rack} from '../../src/models/rack.model';

let aRack : Rack = new Rack();

console.log("Should Be empty: (" + aRack.Display()  + ")");

let aTile : Tile = new Tile('A');
aRack.AddTile(aTile);
aRack.AddTile(aTile);
aRack.AddTile(aTile);
aRack.AddTile(aTile);
aRack.AddTile(aTile);
aRack.AddTile(aTile);
aRack.AddTile(aTile);
console.log(aRack.Display());
console.log("Tile count added: " + aRack.AddTile(aTile));