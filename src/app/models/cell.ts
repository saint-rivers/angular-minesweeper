export interface Cell {
    isRevealed: boolean;
    tileContent: number | null | 'mine';
    columnIndex: number;
    rowIndex: number;
}
