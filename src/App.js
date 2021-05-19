import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Detail from './Pages/Detail/Detail';
import Login from './Pages/Login/Login';
import Booking from'./Pages/Booking/Booking';
import Register from './Pages/Register/Register';
import Admin from './Pages/Admin/Admin';
// import Layout from './Pages/Login/Layout';

function App() {
    return (
        <BrowserRouter>
            <section className="App" >
                <Header></Header>
                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/detail/:id" component={Detail}></Route>
                    <Route exact path="/booking/:id" component={Booking}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/register" component={Register}></Route>
                    <Route exact path ="/" component={Home}></Route>
                </Switch>
            </section>
        </BrowserRouter>
    );
}
export default App;
