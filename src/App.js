import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Listing from './Pages/Listing'
import Jokes from './Pages/Jokes'

const App = createBrowserRouter([
  {
    path : '/',
    element : <Home />,
  },
  {
    path : '/random-user',
    element : <Home />,
  },
  {
    path : '/random-jokes',
    element : <Jokes />,
  },
  {
    path : '/cats-listing',
    element : <Listing />,
  },
])

export default App;
