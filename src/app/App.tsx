// import React from "react";
// import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Route, Link, Switch } from "react-router-dom";
import { HomePage } from "../app/screens/homePage";
import { ProductsPage } from "../app/screens/productsPage";
import { OrdersPage } from "../app/screens/ordersPage";
import { UsersPage } from "../app/screens/usersPage";
import { HelpPage } from "../app/screens/helpPage";
import "../css/app.css";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/products">ProductsPage</Link>
          </li>
          <li>
            <Link to="/orders">OrdersPage</Link>
          </li>
          <li>
            <Link to="/member-page">UsersPage</Link>
          </li>
          <li>
            <Link to="/help-page">HelpPage</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UsersPage />
        </Route>
        <Route path="/helpPage">
          <HelpPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
