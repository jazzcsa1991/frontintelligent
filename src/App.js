import './App.css';
import Home from './components/home'
import Pagos from './components/pagos'
import Create from './components/create'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Switch>
          <Route exact path="/" component={Home} />  
          <Route exact name="pagos" path="/pagos" component={Pagos} />//ruta de todos los commit de una rama
          <Route exact name="create" path="/create" component={Create} />//ruta de todos los commit de una rama
          
        </Switch>
    </BrowserRouter>
  );
}
export default App;
