import React from "react";
import "./App.css";
import {
  BrowserRouter as MainRouter,
  Routes as Switch,
  Route,
  Navigate
} from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import EditUser from "./pages/User/EditUser";


const App = () => {

  return (
    <MainRouter>
      <Switch>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/edit/:id"
          element={<EditUser />}
        />
        <Route
          path="*"
          element={<Navigate to={"/"} /> }
        />
      </Switch>
    </MainRouter>
  );
}

export default App;