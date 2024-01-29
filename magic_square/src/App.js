import "./styles.css";

export default function App() {
  const square_1d = [2, 7, 6, 9, 5, 1, 4, 3, 8];
  const square_2d = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ];
  const n = 3;
  return (
    <div className="App">
      <h1>Magic Square</h1>
      <h2>1st Step: rectangle 1 x n²</h2>
      {
        // display square in 1D
      }
      <h2>1st Step: square n x n</h2>
      {
        //display square in 2D
      }
    </div>
  );
}
