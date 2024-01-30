import "./styles.css";

function SquareSum({ value, key }) {
  // TODO: adapt classnames forcomputed sum (ok or not ok)
  return (
    <div key={key} className="column">
      {value === 0 ? " " : value}
    </div>
  );
}

function Square({ value, key }) {
  // TODO: adapt classnames for played value
  return (
    <button key={key} className="column">
      {value === 0 ? " " : value}
    </button>
  );
}

function Square1D({ square_1d, n }) {
  return (
    <div>
      {square_1d.map((v, i) => (
        <Square value={v} key={i} />
      ))}
    </div>
  );
}

function Square2D({ square_2d, n, displaySums = false }) {
  return (
    <>
      {
        // optional row with 0 values
        displaySums && (
          <div key={0} className="row">
            {[...Array(n + 1).keys()].map((j) => (
              <SquareSum value={0} key={`0-${j}`} />
            ))}
          </div>
        )
      }
      {square_2d.map((row, i) => (
        <div key={i} className="row">
          {row.map((v, j) => (
            <Square value={v} key={`${i}-${j}`} />
          ))}
          <SquareSum value={0} key={`${i}-${n}`} />
        </div>
      ))}
      {
        // optional row with 0 values
        displaySums && (
          <div key={0} className="row">
            {[...Array(n + 1).keys()].map((j) => (
              <SquareSum value={0} key={`${n}-${j}`} />
            ))}
          </div>
        )
      }
    </>
  );
}

export default function App() {
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
    <div className="App">
      <h1>Magic Square</h1>
      <h2>1st Step: rectangle 1 x n²</h2>

      <Square1D square_1d={square_1d} n={3} />

      <h2>2nd Step: square n x n</h2>
      <h3>Complete</h3>
      <Square2D square_2d={square_2d} n={3} />

      <h3>Incomplete</h3>
      <Square2D square_2d={square_2d_incomplete} n={3} />

      <h3>With sums</h3>
      <Square2D square_2d={square_2d_incomplete} n={3} displaySums={true} />
    </div>
  );
}
