
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Authentication/LogIn/Login';
import Make from './components/Make/Make';
import Register from './components/Authentication/Registration/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Admin from './components/Admin/Admin';
import PrivateRoute from './components/Authentication/PrivateRoute/PrivateRoute';
import AdminRoute from './components/Authentication/AdminRoute/AdminRoute';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import Company from './components/Company/Company';

function App() {

  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/make">
              <Make></Make>
            </Route>
            <Route exact path="/make/:id">
              <Company></Company>
            </Route>


            <AdminRoute path="/admin">
              <Admin></Admin>
            </AdminRoute>

            <Route path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
