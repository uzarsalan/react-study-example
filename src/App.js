import logo from "./logo.svg";
import "./App.css";
import FoodList from "./components/FoodList";
import Cart from "./components/Cart";

function App() {
  let food = [
    { name: "Буузы", price: 100 },
    { name: "Пицца", price: 500 },
    { name: "Паста", price: 350 },
  ];

  return (
    <div className="App">
      <header>
        <Cart />
      </header>
      <div className="container mx-auto">
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <FoodList items={food} />
        </div>
      </div>
    </div>
  );
}

export default App;
