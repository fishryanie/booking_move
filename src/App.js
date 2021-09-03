// import logo from './logo.svg';
import './App.css';
import { Router, Switch } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import  {HomeTemplate}  from './Template/HomeTemplate'
import { AdminTemplate } from './Template/AdminTemplate';
import About from './Pages/About/About'
import Home from './Pages/Home/Home';
import AlertDialogSlide from './Pages/Home/DialogBuyTicket';
import Application from './Pages/Application/Application';
import Contact from './Pages/Contact/Contact';
import Detail from './Pages/Detail/Detail';
import Login from './Pages/Login-Register/Login';
import Checkout from'./Pages/Checkout/Checkout';
import Register from './Pages/Login-Register/Register';
import Admin from './Pages/Admin/Admin';
import Seat from './Pages/Seat/Seat'

import FilmManagement from './Pages/Admin/FilmManagement';
export const history =  createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <section className="App" >
        <Switch>
          <HomeTemplate exact path="/home" Component={Home}></HomeTemplate>
          <HomeTemplate exact path="/home" Component={AlertDialogSlide}></HomeTemplate>
          <HomeTemplate exact path="/app" Component={Application}></HomeTemplate>
          <HomeTemplate exact path="/about" Component={About}></HomeTemplate>
          <HomeTemplate exact path="/contact" Component={Contact}></HomeTemplate>
          <HomeTemplate exact path="/checkout" Component={Checkout}></HomeTemplate>
          <HomeTemplate exact path="/detail/:id" Component={Detail}></HomeTemplate>
          <HomeTemplate exact path="/seat/:id" Component={Seat}></HomeTemplate>
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
