import { useState } from "react";

function SquareSum({ value, expectedValue }) {
  // TODO: adapt classnames forcomputed sum (ok or not ok)
  return (
    <div className={`column ${expectedValue === value ? "sum-ok" : "sum-ko"}`}>
      {value === 0 ? " " : value}
    </div>
  );
}

function Square({ value, handleClick, isSelected = false }) {
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

export function Square1D({ square_1d, n, pickValue, selectedIndex = -1 }) {
  return (
    <div>
      {square_1d.map((v, i) => (
        <Square
          key={i}
          value={v}
          handleClick={() => pickValue(v, i)}
          isSelected={i === selectedIndex}
        />
      ))}
    </div>
  );
}

export function Square2D({ square_2d, n, displaySums = false, placeValue }) {
  return (
    <>
      {
        // optional row with 0 values
        displaySums && (
          <div key="row-before" className="row">
            {[...Array(n + 1).keys()].map((j) => (
              <SquareSum value={0} key={`sum-top-${j}`} />
            ))}
          </div>
        )
      }
      {square_2d.map((row, i) => (
        <div key={`row-${i}`} className="row">
          {row.map((v, j) => (
            <Square
              value={v}
              key={`val-${i}-${j}`}
              handleClick={() => placeValue(i, j)}
            />
          ))}
          {displaySums && <SquareSum value={0} key={`sum-right-${n}`} />}
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
