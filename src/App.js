import { useEffect, useState } from "react";
import AddBlog from "./components/AddBlog";
import ListBlogStore from "./components/ListBlog";


const App = () => {

  return (
    <main className="container text-center">
      <AddBlog />
      <hr />
      <h1>List Blogs</h1>
      <input type="search" placeholder="Filter By title" className="form-control" /> 
      <ListBlogStore />
    </main>

  )
}

export default App;