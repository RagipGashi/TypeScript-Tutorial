export {};
// Using static member which is accessable inside the class and in instantiation too
// The example is calculating the distance from a poit to another
class Grid {
  static origin = { x: 0, y: 0 };
  calcDist(point: { x: number; y: number }) {
    const xDist = point.x - Grid.origin.x;
    const yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }

  constructor(public scale: number) {}
}

const grid1 = new Grid(1.0);
const grid2 = new Grid(5.0);

console.log(grid1.calcDist({ x: 10, y: 10 }));
console.log(grid2.calcDist({ x: 10, y: 10 }));
