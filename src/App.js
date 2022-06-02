import { BrowserRouter, Link, Routes, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Pages/home';
// import Courses from './Pages/courses';
import Search from './components/search';
import List from './components/list';
import NotFound from './Pages/notfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/search" >
            <Route index element={<Search />} />
            <Route path="bio">
              <Route path=":id" element={<List />} />
            </Route>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {/* <Routes>
          
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
