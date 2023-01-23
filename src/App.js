import Navbar from "./components/Navbar";
import {BrowserRouter} from 'react-router-dom';
import Routing from "./router/Routing";
import './index.css';

function App() {
  return (
      <div className="container">
          <BrowserRouter>
              <Navbar/>
              <Routing/>
          </BrowserRouter>
      </div>
  );
}

export default App;
