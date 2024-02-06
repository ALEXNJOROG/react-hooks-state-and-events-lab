import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from "react"

function App() {

  const [isItDarkMode, yesItIsDarkMode] = useState(false)

  const appClass = isItDarkMode ? "App dark" : "App light"

  function handleClick(){
    yesItIsDarkMode((isItDarkMode) => !isItDarkMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
