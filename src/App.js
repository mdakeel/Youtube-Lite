import '@fontsource/roboto';
import './App.css';
import {AllRoutes} from "./AllRoutes/CustomRoutes"
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="App">
   <BrowserRouter>
      <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
