import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BookListPage from "./containers/bookListPage/bookListPage";
import BookEditionPage from "./containers/bookEditionPage/bookEditionPage";

function App() {
  return (
    <div>
      <Router>
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={BookListPage} />
            <Route path="/BookEditionPage/:id" component={BookEditionPage} />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
