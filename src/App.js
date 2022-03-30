import { Items } from "./components/items/items";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./store/reducers";
import { Grid } from "@mui/material";
import SideBar from "./components/sideBar/sideBar";
import { Header } from "./components/header/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home/Home";
import { WishList } from "./components/wishList/wishList";
import { ShopingCard } from "./components/shoping card/shopingCard";
function App() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return (
    <Provider
      store={createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
      )}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />

          <Route path='/WishList' component={WishList} />
          <Route path='/ShopingCard' component={ShopingCard} />
        </Switch>
        {/* <Route path='/' element={<WishList />}></Route>{" "}
        <Route path='/' element={<ShopingCard />}></Route> */}
      </Router>
      {/* <Header />
      <Grid container spacing={0}>
        <Grid item md={3}>
          <SideBar />
        </Grid>

        <Grid item md={9} xs={12} className={"Items_component"}>
          <Items />
        </Grid>
      </Grid> */}
    </Provider>
  );
}

export default App;
//  npx json-server --watch data/db.json --port 8000
