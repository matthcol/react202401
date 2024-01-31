import { Dispatch, MouseEvent } from "react";
import { IAction } from "./types/stategame";

function SquareSum({ value, expectedValue }: {value: number, expectedValue: number}) {
  return (
    <div className={`column ${expectedValue === value ? "sum-ok" : "sum-ko"}`}>
      {value === 0 ? " " : value}
    </div>
  );
}

function Square(
    { 
        value, 
        isSelected = false, 
        handleClick 
    }: 
    {
        value: number, 
        isSelected: boolean, 
        handleClick: (event?: MouseEvent<HTMLElement>) => void
    }) 
{
  let buttonClasses = "column ";
  buttonClasses += isSelected ? "value-selected" : "value";
  return (
    <button
      onClick={(event) => {
         handleClick(event);
      }}
      className={buttonClasses}
    >
      {value === 0 ? " " : value}
    </button>
  );
}

export function Square1D(
    {  values, selectedIndex = -1, dispatch }:
    {   values: number[], selectedIndex: number, dispatch: Dispatch<IAction>}) 
{
  return (
    <div>
      {values.map((v, i) => (
        <Square
          key={i}
          value={v}
          handleClick={() => dispatch({
            type: "select_value",
            newSelectedValue: v,
            newSelectedIndex: i
          })}
          isSelected={i === selectedIndex}
        />
      ))}
    </div>
  );
}

export function Square2D(
    { square, n, displaySums = false, dispatch }:
    { square: number[][], n: number, displaySums: boolean, dispatch: Dispatch<IAction>}
){
  return (
    <>
      {
        // optional row with 0 values
        displaySums && (
          <div key="row-before" className="row">
            {[...Array(n + 1).keys()].map((j) => (
              <SquareSum value={0} expectedValue={15} key={`sum-top-${j}`} />
            ))}
          </div>
        )
      }
      {square.map((row, i) => (
        <div key={`row-${i}`} className="row">
          {row.map((v, j) => (
            <Square
              value={v}
              isSelected={false}
              key={`val-${i}-${j}`}
              handleClick={() => {}}
            />
          ))}
          {displaySums && <SquareSum value={0} expectedValue={15} key={`sum-right-${n}`} />}
        </div>
      ))}
      {
        // optional row with 0 values
        displaySums && (
          <div key="row-after" className="row">
            {[...Array(n + 1).keys()].map((j) => (
              <SquareSum
                value={15}
                expectedValue={15}
                key={`sum-bottom-${j}`}
              />
            ))}
          </div>
        )
      }
    </>
  );
}