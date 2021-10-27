import React, { useEffect, useState } from 'react'

const App = () => {

    const [data, setData] = useState()
    const [error, setError] = useState(null)
    const fetchData = () => {
        fetch("http://hn.algolia.com/api/v1/items/0")
        .then(res=>console.log(res))
        .then(res=>setData(res))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>
            Hello I'm Really Here 🐰 !!
        </div>
    )
}

export default App
