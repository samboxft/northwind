import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Copyrights from "../Copyrights/Copyrights";
import Menu from "../Menu/Menu";
import Home from "../../Home/Home/Home";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <aside>
          <Menu />
      </aside>
      <main>
          <Home />
      </main>
      <footer>
        <Copyrights />
      </footer>
    </div>
  );
}

export default App;
