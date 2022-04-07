import EstiloGlobal from "./styles/global";
import Rotas from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (    
    <Router>
      <ToastContainer autoClose={3000}/>
      <Rotas/>
      <EstiloGlobal/>
    </Router>
  );
}

