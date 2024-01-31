import { useState } from "react";
import { initSquare, initValues } from "./magic";
import { Square2D, Square1D } from "./Square";
import "./styles.css";

function Game() {
  // TODO: select a value in availabes values
  // hihghlight selected value
  // put selected value in square when click on target place
  // remove selected value from array values

  // create states (init phase only)
  const [isDisplaySum, setIsDisplaySum] = useState(false);
  const [n, setN] = useState(3);
  const [square, setSquare] = useState(initSquare(n));
  const [values, setValues] = useState(initValues(n * n));
  const [selectedValue, setSelectedValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function placeValue(i, j) {
    let valuePutBack = 0;
    let newValues = [...values];
    let newSquare = [...square];
    if (square[i][j] !== 0) {
      console.log("A value is already there");
      // memorize value to put back in values
      valuePutBack = square[i][j];
      // remove previous value
      newSquare[i][j] = 0;
    }
    if (selectedValue != 0) {
      console.log(`Placing value ${selectedValue} at ${i},${j}`);
      newSquare[i][j] = selectedValue;
      newValues.splice(selectedIndex, 1);
      setSelectedValue(0);
      setSelectedIndex(-1);
    }
    if (valuePutBack != 0) {
      console.log(`Putting back value ${valuePutBack} in available values`);
      newValues.push(valuePutBack);
      newValues.sort();
    }
    setSquare(newSquare);
    setValues(newValues);
  }

  function pickValue(value, index) {
    console.log("Picked value: ", value);
    setSelectedValue(value);
    setSelectedIndex(index);
  }

  function handleChangeN(e) {
    const newN = parseInt(e.target.value, 10);
    console.log(newN, typeof newN);
    if (newN != n && newN > 0 && newN <= 15) {
      setN(newN);
      setSquare(initSquare(newN));
      setValues(initValues(newN * newN));
      setSelectedValue(0);
      setSelectedIndex(-1);
    }
  }
  // init + reredenring

  return (
    <div className="game">
      <h2>Game</h2>
      <div className="controls">
        <div>
          Size
          <input type="number" value={n} onChange={handleChangeN} />
        </div>
        <div>
          Display sums
          <input
            type="checkbox"
            onChange={(e) => {
              setIsDisplaySum(e.target.checked);
              // WARNING: following code don't trigger a render
              // square[0][0]++;
              // console.log(square);
            }}
          />
        </div>
      </div>
      <div>
        <h3>Build your magic Square</h3>
        <Square2D
          square_2d={square}
          n={n}
          displaySums={isDisplaySum}
          placeValue={placeValue}
        />
      </div>
      <div>
        <h3>Pick your values</h3>
        <Square1D
          square_1d={values}
          n={n * n}
          pickValue={pickValue}
          selectedIndex={selectedIndex}
        />
      </div>
    </div>
  );
}

function PreGame() {
  // some data for intermediate state
  const square_1d = [2, 7, 6, 9, 5, 1, 4, 3, 8];
  const square_2d = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ];
  const square_2d_incomplete = [
    [2, 7, 0],
    [9, 5, 1],
    [4, 3, 8],
  ];
  const n = 3;
  return (
    <div className="pre-game">
      <h2>1st Step: rectangle 1 x n²</h2>

      <Square1D square_1d={square_1d} n={n} />

      <h2>2nd Step: square n x n</h2>
      <h3>Complete</h3>
      <Square2D square_2d={square_2d} n={n} />

      <h3>Incomplete</h3>
      <Square2D square_2d={square_2d_incomplete} n={n} />

      <h3>With sums</h3>
      <Square2D square_2d={square_2d_incomplete} n={n} displaySums={true} />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Magic Square</h1>

      <Game />
      <PreGame />
    </div>
  );
}
