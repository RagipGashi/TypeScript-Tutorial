// Import ShapesInterface to use its properties
// Implement the interface ShapesInterface so we can use its properties too
import { ShapesInterface } from "./18-shapesInterface";

// Export class Triangle so we can use its properties in export_import file
export class Triangle implements ShapesInterface {
  points: number;

  getPoints() {
    console.log(`This triangle has ${this.points} points`);
  }

  setPoints(points: number) {
    this.points = points;
  }
}

// Export class Square so we can use its properties in shapes file
// Implement the interface ShapesInterface so we can use its properties too
export class Square implements ShapesInterface {
  points: number;

  getPoints() {
    console.log(`This square has ${this.points} points`);
  }

  setPoints(points: number) {
    this.points = points;
  }
}
