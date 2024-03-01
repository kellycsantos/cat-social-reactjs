import "./App.css";
import Home from "./View/Home";
import Error from "./View/Error404";
import About from "./View/About";
import User from "./View/User";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  let randomId = Math.floor(Math.random() * 10) ;
  return (
    <div className="App">
      <nav>
        <a href="/">Home</a>
        <a href="/sobre">Sobre</a>
        <a href={`/usuario/${randomId}`}>Usuario</a>
      </nav>


      
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/sobre" Component={About} />
          <Route path="/usuario/:id" Component={User} />
          <Route path="*" Component={Error} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
