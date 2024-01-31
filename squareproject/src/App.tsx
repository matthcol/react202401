import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { initSquare } from './magic';
import { IValueNumber } from './types/ivaluenumber';
import { initStateGame, stateGameReducer } from './magicreducer';
import { Square1D, Square2D } from './Square';


//function Square(props: {value: number, n: number}){
//function Square({value, n}: {value: number, n: number}){
function SquareInfo({value, n}: IValueNumber){ // NB: return type =  JSX.Element
  // const {value, n} = props;
  let nbValues = n * n;
  return (<div>
      <ul>
        <li>value: {value}</li>
        <li>square size n: {n}</li>
        <li>number of values: {nbValues}</li>
      </ul>
  </div>);
}


function Game() {
  const [stateGame, dispatch] = useReducer(stateGameReducer, 3, initStateGame);
  return (
    <div className="game">
      <h2>Game</h2>
      <div className="controls">
        <div>
          Size
          <input 
              type="number" 
              value={stateGame.n} 
              onChange={(event) => dispatch(({
                'type': 'resize_square',
                'newN': parseInt(event.target.value, 10)
              }))} 
          />
        </div>
        <div>
          Display sums
          <input
            type="checkbox"
            onChange={(e) => {
              // setIsDisplaySum(e.target.checked);
              // WARNING: following code don't trigger a render
              // square[0][0]++;
              // console.log(square);
            }}
          />
        </div>
      </div>
      <div>
        <h2>Summary</h2>
        <ul>
          <li>display: {stateGame.displaySums ? 'visible':'hidden'}</li>
          <li>square size n: {stateGame.n}</li>
          <li>number of values: {stateGame.values.length}</li>
        </ul>
      </div>
      <div>
        <h3>Build your magic Square</h3>
        <Square2D
          square={stateGame.square}
          n={stateGame.n}
          displaySums={stateGame.displaySums}
          dispatch={dispatch}
        />
      </div>
      <div>
        <h3>Pick your values</h3>
        <Square1D
          values={stateGame.values}
          selectedIndex={-1}
          dispatch={dispatch}
        />
      </div>
    </div>
);
}

function App() {
  // const square: number[][] = initSquare(3);
  // square[0][1] = 2;
  return (
    <div className="App">
      { 
        // <SquareInfo n={3} value={square[0][1]}/> 
      }
      <Game />;
    </div>
  );
}

export default App;
