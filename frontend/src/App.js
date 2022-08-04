import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AllEvents from "./components/Homepage";
import SingleEvent from "./components/SingleEvent";
import CreateEvent from "./components/CreateEvent";
import LoginForm from "./components/LoginFormModal/LoginForm";
import MyEvents from "./components/MyEvents";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>    
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup" exact={true}>
            <SignupFormPage />
          </Route>
          <Route path="/login" exact={true}>
            <LoginForm />
          </Route>
          <Route  path='/' exact={true}>
          <AllEvents />
          </Route>
          <Route  path='/events/:id' exact={true}>
         <SingleEvent />
         </Route>
         <Route path="/create-event" exact={true}>
          <CreateEvent />
         </Route>
         <Route path="/tickets/users/:id" exact={true}>
           <MyEvents />
         </Route>         
          </Switch>
        )}
        
    </>
  );
}

export default App;