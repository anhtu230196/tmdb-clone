import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./components/content/details/Detail";
import ErrorPage from "./components/error/ErrorPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Switch>
            <Route path="/:id/:name/details" exact component={Detail} />
            <Route path="/" exact component={Main} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
