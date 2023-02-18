import { Injectable } from '@angular/core';
import { Coordinate } from '../models/coordinate';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  randomXY(colSize: number, rowSize: number): Coordinate {
    return {
      x: this.getRandomInt(0, colSize - 1),
      y: this.getRandomInt(0, rowSize - 1)
    }
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateMineCoordinates(colSize: number, rowSize: number, totalMines: number): Coordinate[] {
    let xyPos: Coordinate[] = [];
    for (let i = 0; i < totalMines; i++) {
      const xy = this.randomXY(colSize, rowSize)
      if (!xyPos.includes(xy)) {
        xyPos.push(xy)
      }
    }
    return xyPos
  }
}
