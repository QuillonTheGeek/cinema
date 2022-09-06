import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Movies from "./component/movies";
import Customers from "./component/customers";
import Rentals from "./component/rentals";
import NotFound from "./component/notfound";

function App() {
  return (
    <main className="container">
      <Route path="/movies" component={Movies} />
      <Route path="/customers" component={Customers} />
      <Route path="/rentals" component={Rentals} />
      <Route path="/not-found" component={NotFound} />
    </main>
  );
}

export default App;
