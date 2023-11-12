import './App.css';
import React, { useState } from "react";

function App() {
  const searchList = ["BestAfrik", "Demo", "Test", "Java", "Python", "Spring Boot", "Jython"];

  const [filteredList, setFilteredList] = new useState(searchList);

  const filterSearch = () => {
    let value = document.querySelector('input').value;
    let newFilteredList = searchList.filter((item) => {
      return item.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredList(newFilteredList);
  }

  return (
    <div className="App">
        <p>
          Simple React JS Search Filter
        </p>
        <input type="text" name="" placeholder="Search by words" onChange={filterSearch}/>
        <div id="search-list">
          {filteredList.map((item) => (
              <li>{item}</li>
          ))}
        </div>
    </div>
  );
}

export default App;
