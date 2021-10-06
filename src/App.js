import React, { useState } from 'react'
import "./App.css"
import CityAdd from './componets/CityAdd';
import CityList from './componets/CityList';

const App = () => {
  

  // let A = ["1","2","3"]
  // let B = A;
  // B[0]="5";
  // console.log(A)
  // console.log(B)



  const [cities, setCities] = useState(["casa","rabat","fes"])

  const [citiesCopie, setCitiesCopie] = useState(["casa","rabat","fes"])

  //add city
  const addCity = (newCity) => {
    //copie cities
    let newCities = cities
    //apply changes on the copie 
    newCities.push(newCity)
    //update the state 
    setCities(newCities)
    setCitiesCopie(newCities)

  }

  //delete city
  const deleteCityById = (cityIndex)=>{
    
    //are you sure 
    if(window.confirm("Are you sure ")===false) return  
    
    //copie cities
    let newCities = cities.filter((_,index)=>index!=cityIndex)
  
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