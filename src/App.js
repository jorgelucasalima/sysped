import EstiloGlobal from "./styles/global";
import Rotas from "./routes";
import { BrowserRouter as Router } from "react-router-dom";


export default function App() {
  return (    
    <Router>
      <Rotas/>
      <EstiloGlobal/>
    </Router>
  );
}

