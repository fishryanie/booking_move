import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Detail from './Pages/Detail/Detail';

function App() {
    return (
        <BrowserRouter>
            <div className="App" >
                <Header></Header>
                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/detail/:id" component={Detail}></Route>
                    <Route exact path ="/" component={Home}></Route>

                </Switch>
            </div>

        </BrowserRouter>


    );
}

export default App;
