import React, { useState } from 'react'
import "./App.css"
import CityAdd from './componets/CityAdd';
import CityList from './componets/CityList';

const App = () => {
  
  const [cities, setCities] = useState(["casa","rabat","fes"])

  //add city
  const addCity = (newCity) => {
    //copie cities
    let newCities = [...cities]
    //apply changes on the copie 
    newCities.push(newCity)
    //update the state 
    setCities([...newCities])
  }

  return (

    <div>
      {/* ADD CITY */}
      <CityAdd onAddCity={addCity} />
      
      <hr />
      <h1>List Cities</h1>
      <input type="search" placeholder="filter city by name" />

      {/* LIST CITY */}
      <CityList list={cities} />
    </div>
  )
}

export default App;