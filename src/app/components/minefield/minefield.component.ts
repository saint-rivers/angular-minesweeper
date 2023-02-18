import { Component, OnInit } from '@angular/core';
import { Cell } from 'src/app/models/cell';
import { Coordinate } from 'src/app/models/coordinate';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-minefield',
  templateUrl: './minefield.component.html',
  styleUrls: ['./minefield.component.css']
})
export class MinefieldComponent implements OnInit {

  rowSize: number = 15;
  colSize: number = 12;
  mineCount: number = 30;

  field: Cell[][] = [];
  mineCoordinates: Coordinate[] = [];

  constructor(private rand: RandomService) {
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
          tileContent: null,
          columnIndex: i,
          rowIndex: j
        }
      }
    }

    this.mineCoordinates = this.rand.generateMineCoordinates(
      this.colSize, this.rowSize, this.mineCount
    )
    
    for (let i = 0; i < this.mineCoordinates.length; i++) {
      this.field[this.mineCoordinates[i].x][this.mineCoordinates[i].y] = {
        isRevealed: false,
        tileContent: 'mine',
        columnIndex: this.mineCoordinates[i].x,
        rowIndex: this.mineCoordinates[i].y
      }
    }
  }

  updateCell(cell: Cell, value: number) {
    const cellCopy = cell;
    this.field[cell.columnIndex][cell.rowIndex] = {
      ...cellCopy,
      tileContent: value,
      isRevealed: true
    }
  }

  reveal(cell: Cell) {
    if (cell.tileContent === "mine") {
      alert("game end");
      // reveal all bombs
    } else if (cell.tileContent === null) {
      // check if surrounding cells have bombs
      this.updateCell(cell, 1.5)
    }
  }
}
