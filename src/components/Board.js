import React, { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [state, setstate] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  const findingWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleSquareClick = (index) => {
    const squaresUpdate = state.squares.slice();
    if (findingWinner(squaresUpdate)) {
      return;
    }

    squaresUpdate[index] = state.xIsNext ? "X" : "O";
    setstate({
      squares: squaresUpdate,
      xIsNext: !state.xIsNext,
    });
  };

  const renderSquare = (i) => {
    return (
      <Square value={state.squares[i]} onClick={() => handleSquareClick(i)} />
    );
  };

  const winner = findingWinner(state.squares);
  let status;
  if (winner) {
    status = "Winner is: " + winner;
  } else {
    status = "Next Player: " + (state.xIsNext ? "X" : "O");
  }

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column my-5 py-5">
      <h4>{status}</h4>
      <table className="table table-bordered w-25">
        <thead>
          <tr>
            <th> {renderSquare(0)}</th>
            <th scope="col">{renderSquare(1)}</th>
            <th scope="col">{renderSquare(2)}</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col">{renderSquare(3)}</th>
            <th scope="col">{renderSquare(4)}</th>
            <th scope="col">{renderSquare(5)}</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col">{renderSquare(6)}</th>
            <th scope="col">{renderSquare(7)}</th>
            <th scope="col">{renderSquare(8)}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
