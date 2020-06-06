import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import ErrorBoundary from './Components/Commons/ErrorBoundary'
const Mytask = lazy(() => import('./Pages/MyTask/MyTask'))
const App = props => {
  const [heading, setHeading] = useState("My Task");
  const handleHeading = (name) => {
    setHeading(name)
  }
  return (
    <div className="App">
      {console.log(props)}
      <Header heading={heading}/>
      <Router>
        <div className="body-section">
          <SideBar handleHeading={handleHeading}/>
          <div className="left-body">
              <Suspense fallback={<div className="loading">Loading....</div>}>
                  <Switch>
                    <ErrorBoundary>
                        <Route path="/" component={Mytask} exact />
                        <Route path="/mytask" component={Mytask} exact />
                        <Route path="/mytask/:tab" component={Mytask} />
                    </ErrorBoundary>
                  </Switch>
              </Suspense>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
