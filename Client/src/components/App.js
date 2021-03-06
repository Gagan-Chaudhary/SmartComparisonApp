import React from "react"
import Signup from "./Signup"
// import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import page from "../Containers/Pages/page"
import details from "./Product Details"
import productCard from "./ProductCard"
import Categories from "./Categories"

function App() {
  
  return (
 
      <div >
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/page" component={page} />
              <Route path="/product-details" component={details} />
              {/* <Route path="/keyword=" component={page} /> */}
              <Route path="/productCard" component={productCard} />
              <Route path="/categories" component={Categories}/>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    
  )
}

export default App