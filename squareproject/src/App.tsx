import React from 'react';
import logo from './logo.svg';
import './App.css';
import { initSquare } from './magic';
import { IValueNumber } from './types/ivaluenumber';


//function Square(props: {value: number, n: number}){
//function Square({value, n}: {value: number, n: number}){
function Square({value, n}: IValueNumber){ // NB: return type =  JSX.Element
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

function App() {
  const square: number[][] = initSquare(3);
  square[0][1] = 2;
  return (
    <div className="App">
      <Square n={3} value={square[0][1]}/>
    </div>
  );
}

export default App;
