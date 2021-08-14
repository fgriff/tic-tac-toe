class TicTacToe {
  constructor() {
    this.symbol = 'x';
    this.field = Array(3).fill().map(() => Array(3).fill(null));
  }

  getCurrentPlayerSymbol() {
    return this.symbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.field[rowIndex][columnIndex]) {
      this.field[rowIndex][columnIndex] = this.symbol;
      this.symbol = this.symbol === 'x' ? 'o' : 'x';
    }
  }

  isFinished() {
    return this.noMoreTurns() || this.getWinner() !== null;
  }

  getWinner() {
    const lines = [
      ['00', '01', '02'],
      ['10', '11', '12'],
      ['20', '21', '22'],
      ['00', '10', '20'],
      ['01', '11', '21'],
      ['02', '12', '22'],
      ['00', '11', '22'],
      ['02', '11', '20'],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      const [rowA, columnA] = a.split('').map((item) => Number(item));
      const [rowB, columnB] = b.split('').map((item) => Number(item));
      const [rowC, columnC] = c.split('').map((item) => Number(item));

      if (
        this.field[rowA][columnA] === this.field[rowB][columnB] &&
        this.field[rowB][columnB] === this.field[rowC][columnC] &&
        this.field[rowA][columnA] === this.field[rowC][columnC]
      ) {
        return this.field[rowA][columnA];
      }
    }

    return null;
  }

  noMoreTurns() {
    for (let i = 0; i < this.field.length; i++) {
      for (let j = 0; j < this.field[i].length; j++) {
        if (this.field[i][j] === null) {
          return false;
        }
      }
    }
  
    return true;
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
