import { Component, OnInit } from '@angular/core';
import { Cell } from 'src/app/models/cell';

@Component({
  selector: 'app-minefield',
  templateUrl: './minefield.component.html',
  styleUrls: ['./minefield.component.css']
})
export class MinefieldComponent implements OnInit {

  field: Cell[] = new Array<Cell>(12);

  constructor() { }

  ngOnInit(): void {
    // Initialize mine field
    for (let i = 0; i < this.field.length; i++) {
      this.field[i] = new Array<Cell>(15)
    }
  }

}
