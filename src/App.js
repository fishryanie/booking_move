import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import  {HomeTemplate}  from './Template/HomeTemplate'
import { AdminTemplate } from './Template/AdminTemplate';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Detail from './Pages/Detail/Detail';
import Login from './Pages/Login/Login';
import Booking from'./Pages/Booking/Booking';
import Register from './Pages/Register/Register';
import Admin from './Pages/Admin/Admin';
import FilmManagement from './Pages/Admin/FilmManagement';
export const history =  createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <section className="App" >
                <Switch>
                    <HomeTemplate exact path="/home" Component={Home}></HomeTemplate>
                    <HomeTemplate exact path="/contact" Component={Contact}></HomeTemplate>
                    <HomeTemplate exact path="/detail/:id" Component={Detail}></HomeTemplate>
                    <HomeTemplate exact path="/booking/:id" Component={Booking}></HomeTemplate>
                    <HomeTemplate exact path="/login" Component={Login}></HomeTemplate>
                    <HomeTemplate exact path="/register" Component={Register}></HomeTemplate>
                    <AdminTemplate exact path = "/admin" Component ={Admin}></AdminTemplate>
                    <AdminTemplate exact path = "/filmManagement" Component ={FilmManagement}></AdminTemplate>
                    <HomeTemplate exact path ="/" Component={Home}></HomeTemplate>
                </Switch>
            </section>
        </Router>
    );
}
export default App;
