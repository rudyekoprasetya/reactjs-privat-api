import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import NavBar from './components/NavBar';
import TampilData from './components/TampilData';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<TampilData />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
