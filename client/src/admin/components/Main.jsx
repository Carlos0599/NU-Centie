// import Create from "./Pages/Innovation";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import InnovationSecondPage from "./Pages/InnovationSecondPage";
import Dashboard from "./Pages/Dashboard";
import users from "./Pages/users";
import productsOrders from "./Pages/productsOrders";
import exhibits from "./Pages/exhibits";
import reports from "./Pages/reports";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#002d84",
    },
  },
  typography: {
    fontFamily: "Raleway",
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 700,
    fontWeightBold: 800,
  },
});

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Layout />
          <div>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/users" component={users} />
              <Route
                exact
                path="/products & orders"
                component={productsOrders}
              />
              <Route exact path="/exhibits" component={exhibits} />
              <Route exact path="/reports" component={reports} />
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default Main;
