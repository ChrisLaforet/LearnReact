import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router , Route, Switch} from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";


function App() {
  return (
      <Router>
          <div className="App">
              <Navbar/>
              <div className="content">
                  <Switch>
                      {/* first match that partial-matches is selected so put full matches first and work down to partial match OR you can use the exact prop */}
                      <Route exact path="/">
                          <Home />
                      </Route>
                      <Route path="/create">
                          <Create />
                      </Route>
                      <Route path="/blogs/:id">
                          <BlogDetails />
                      </Route>
                      <Route path="*">
                          <NotFound />
                      </Route>
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;
