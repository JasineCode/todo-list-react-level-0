import React, { useState } from 'react'
import "./App.css"
import CityAdd from './componets/CityAdd';
import CityList from './componets/CityList';
import { City } from './models/city';



const LIST_CITY = [
  new City(1,"Casablanca"),
  new City(2,"Rabat"), 
]

const App = () => {

  const [cities, setCities] = useState(LIST_CITY)

  const [citiesCopie, setCitiesCopie] = useState(LIST_CITY)

  //add city
  const addCity = (nameCity) => {
    let newList = [...cities,new City(cities.length+1,nameCity)]
    setCities([...newList])
    setCitiesCopie([...newList])

  }

  //delete city
  const deleteCityById = (cityId)=>{
    
    //are you sure 
    if(window.confirm("Are you sure ")===false) return  
    
    //copie cities
    let newCities = cities.filter((c)=>c.id!=cityId)
  
    //update the state 
    setCities(newCities) 
    setCitiesCopie(newCities)

  }
  const filterCityByName = (e) => {

    if(e.target.value==="") setCities(citiesCopie)
    else
    setCities(cities.filter(c=>c.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  return (

    <div>
      {/* ADD CITY */}
      <CityAdd onAddCity={addCity} />
    
      <hr />
      <h1>List Cities</h1>
      <input 
          type="search" 
          placeholder="filter city by name" 
          onChange={filterCityByName}
      />

      {/* LIST CITY */}
      <CityList list={cities} onDeleteList={deleteCityById} />
    </div>
  )
}

export default App;