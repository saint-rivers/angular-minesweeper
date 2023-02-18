import { Component, OnInit } from '@angular/core';
import { Cell } from 'src/app/models/cell';
// import {} from 'src/utils/random'

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
interface XyPos { x: number, y: number }

@Component({
  selector: 'app-minefield',
  templateUrl: './minefield.component.html',
  styleUrls: ['./minefield.component.css']
})
export class MinefieldComponent implements OnInit {

  rowSize: number = 15;
  colSize: number = 12;
  mineCount: number = 10;

  field: Cell[][] = [];
  mineCoordinates: XyPos[] = [];

  constructor() {
    // Initialize mine field
    for (let i = 0; i < this.colSize; i++) {
      this.field[i] = new Array<Cell>(this.rowSize)
    }
  }

  ngOnInit(): void {
    for (let i = 0; i < this.colSize; i++) {
      for (let j = 0; j < this.rowSize; j++) {
        this.field[i][j] = {
          isRevealed: false,
          tileContent: null
        }
      }
    }


    this.mineCoordinates = this.generateMineCoordinates()
    for (let i = 0; i < this.mineCoordinates.length; i++) {
      this.field[this.mineCoordinates[i].x][this.mineCoordinates[i].y] = {
        isRevealed: false,
        tileContent: 'mine'
      }
    }
  }

  randomXY(): XyPos {
    return {
      x: getRandomInt(0, this.colSize - 1),
      y: getRandomInt(0, this.rowSize - 1)
    }
  }

  generateMineCoordinates(): XyPos[] {
    let xyPos: XyPos[] = [];
    for (let i = 0; i < this.mineCount; i++) {
      const xy = this.randomXY()
    console.log(xy);

      if (!xyPos.includes(xy)) {
        xyPos.push(xy)
      }
    }
    
    return xyPos
  }

  reveal() {
    // if bomb => end game
    // if empty => reveal all adjacent numbered cells
    // if next to bomb => reveal number (count) of bombs
  }

}
