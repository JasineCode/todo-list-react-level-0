import { BrowserRouter ,Route} from "react-router-dom";
import LoginPage from "./auth/Login";


const App = () => {
  return (
    <BrowserRouter>
      <Route path="/admin" component={LoginPage}/>
    </BrowserRouter>
  )
}

export default App;