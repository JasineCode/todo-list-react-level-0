import AddBlog from "./components/AddBlog";


const App = () => {
  return (
    <main className="container text-center">
      <AddBlog/>
      <hr />
      <h1>List Blogs</h1>
      <input type="search" placeholder="Filter By title" className="form-control" />
     
    </main>

  )
}

export default App;